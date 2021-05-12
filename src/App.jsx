import React, { Suspense, useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  getFirebase,
  isLoaded
} from 'react-redux-firebase'
import {
  createFirestoreInstance,
  firestoreReducer
} from 'redux-firestore'

import colorsReducer from './store/reducers/colors'
import navigationReducer from './store/reducers/navigation'
import submitReducer from './store/reducers/submit'
import couponReducer from './store/reducers/coupon'
import userReducer from './store/reducers/user'
import historyReducer from './store/reducers/history'
import doctorsReducer from './store/reducers/doctors'
import appointmentsReducer from './store/reducers/appointments'
import idReducer from './store/reducers/id'
import strainsReducer from './store/reducers/strains'

import SplashScreen from './components/SplashScreen'

import firebaseConfig from './firebase/config'

import { setColors } from './store/actions/colors'

const Website = React.lazy(() => import('./website/Website'))
const GreenApp = React.lazy(() => import('./app/GreenApp'))
const GreenBack = React.lazy(() => import('./backend/GreenBack'))

const rrfConfig = {
  userProfile: 'users',
  enableLogging: false,
  useFirestoreForProfile: true,
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()
firebase.storage()

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  colors: colorsReducer,
  navigation: navigationReducer,
  submit: submitReducer,
  coupon: couponReducer,
  user: userReducer,
  history: historyReducer,
  doctors: doctorsReducer,
  appointments: appointmentsReducer,
  id: idReducer,
  strains: strainsReducer
})

const initialState = {}
const store = createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase))
  )
)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setColors())

      return () => null
  }, [dispatch])
  
  const { auth } = useSelector(state => state.firebase)
  if (!isLoaded(auth)) return <SplashScreen />
  return children
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <Suspense fallback={<SplashScreen />}>
            <Router>
              <Switch>
                  <Route exact path='/' component={Website} />
                  <Route path='/app' component={GreenApp} />
                  <Route path='/greenback' component={GreenBack} />
                  <Route component={Website} />
              </Switch>
            </Router>
          </Suspense>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
