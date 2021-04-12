import React, { useEffect, useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Signup from '../screens/authScreens/Signup'
import Login from '../screens/authScreens/Login'

import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'

import { setColors } from '../store/actions/colors'

import './navigation.scss'

const AuthSwitch = () => {
    const dispatch = useDispatch()
    const { authNavName } = useSelector(state => state.navigation)
    const nodeRef = useRef(null)

    useEffect(() => {
        dispatch(setColors())

        return () => null
    }, [dispatch])

    var authRoute = useMemo(() => {
        if (authNavName === 'signup') {
            return (
                <Signup 
                    nodeRef={nodeRef}
                    className="left"    
                />
            )
        } else {
            return (
                <Login nodeRef={nodeRef}/>
            )
        }
    }, [authNavName])

    // var authRoute = useMemo(() => {
    //     const timeout = { enter: 800, exit: 400}
    //     if (authNavName === 'signup') {
    //         return (
    //             <CSSTransition
    //                 mountOnEnter={false}
    //                 unmountOnExit={true}
    //                 key={authNavName}
    //                 timeout={timeout}
    //                 classNames="item"
    //                 nodeRef={nodeRef}
    //             >
    //                 <div className="left">
    //                     <Signup />
    //                 </div>
    //             </CSSTransition>
    //         )
    //     } else {
    //         return (
    //             <CSSTransition
    //                 mountOnEnter={false}
    //                 unmountOnExit={true}
    //                 key={authNavName}
    //                 timeout={timeout}
    //                 classNames="item"
    //                 nodeRef={nodeRef}
    //             >
    //                 <div className="left">
    //                     <Login />
    //                 </div>
    //             </CSSTransition>
    //         )
    //     } 
    // }, [authNavName])

    return (
        <section className="auth-switch-container">
            <TransitionGroup>
                <CSSTransition
                    classNames={authNavName === 'signup' ? 'slide-right' : 'slide-left'}
                    timeout={{ enter: 1000, exit: 1000 }}
                    key={authNavName}
                >
                    {authRoute}
                </CSSTransition>
            </TransitionGroup>  
        </section>
    )
}
export default AuthSwitch