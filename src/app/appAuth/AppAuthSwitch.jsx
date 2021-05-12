import React, { useEffect, useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Signup from './Signup'
import Login from './Login'

import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'

import Noisy from '../../img/noisy_grid.png'

import { setColors } from '../../store/actions/colors'

import './appAuth.scss'

const AppAuthSwitch = () => {
    const dispatch = useDispatch()
    const { authNavName } = useSelector(state => state.navigation)
    console.log(authNavName)
    const nodeRef = useRef(null)

    useEffect(() => {
        dispatch(setColors())

        return () => null
    }, [dispatch])

    var authRoute = useMemo(() => {
        if (authNavName === 'signup') {
            return (
                <Signup nodeRef={nodeRef} />
            )
        } else {
            return (
                <Login nodeRef={nodeRef} />
            )
        }
    }, [authNavName])

    return (
        <div 
            className="auth-background"
            style={{  backgroundImage:  `url(${Noisy})`}}
        >
            <TransitionGroup>
                <CSSTransition
                    classNames={authNavName === 'signup' ? 'slide-right' : 'slide-left'}
                    timeout={{ enter: 500, exit: 500 }}
                    key={authNavName}
                >
                    {authRoute}
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
export default AppAuthSwitch
