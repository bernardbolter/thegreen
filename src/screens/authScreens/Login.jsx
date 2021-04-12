import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './authScreens.scss'

import { SET_AUTH_NAV_NAME } from '../../store/actions/navigation'

const Login = () => {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.colors)
    return (
        <div 
            className="login-screen left"
            style={{ backgroundColor: colors.lightSecondary }}    
        >
            <h1
                style={{ color: colors.darkSecondary }}
            >
                Login
            </h1>
            <button
                onClick={() => dispatch({
                    type: SET_AUTH_NAV_NAME,
                    updatedAuthNavName: 'signup'
                })}
            >
                go to Signup
            </button>
        </div>
    )
}

export default Login