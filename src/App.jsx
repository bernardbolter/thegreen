import React from 'react'
import { Provider, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import {
  createFirestoreInstance,
  firestoreReducer
} from 'redux-firestore'

import colorsReducer from '../src/store/reducers/colors'
import navigationReducer from '../src/store/reducers/navigation'

import SplashScreen from '../src/screens/SplashScreen'
import AuthSwitch from '../src/navigation/AuthSwitch'
import NavigationSwitch from './navigation/NavigationSwitch'

import firebaseConfig from '../src/firebase/config'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()
firebase.storage()

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  colors: colorsReducer,
  navigation: navigationReducer
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
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <SplashScreen />
  return children
}

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector(state => state.firebase.auth)
  console.log(auth)
  return (
    <Route
      {...rest}
      render={({ location }) => 
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location }
            }}
          />
        )
      } 
    />
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <AuthIsLoaded>
            <Switch>
              <Route path="/signup">
                <AuthSwitch />
              </Route>
              <PrivateRoute path ="/">
                <NavigationSwitch />
              </PrivateRoute>
            </Switch>
          </AuthIsLoaded>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
