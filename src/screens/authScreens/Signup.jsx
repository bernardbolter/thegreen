import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './authScreens.scss'

import {  SET_AUTH_NAV_NAME } from '../../store/actions/navigation'

const Signup = () => {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.colors)
    return (
        <section 
            className="signup-screen"
            style={{ backgroundColor: colors.light }}    
        >
            <h1
                style={{ color: colors.dark }}
            >
                Signup
            </h1>
            <button
                onClick={() => dispatch({
                    type: SET_AUTH_NAV_NAME,
                    updatedAuthNavName: 'login'
                })}
            >
                go to login
            </button>
        </section>
    )
}

export default Signup