import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Signup from '../screens/authScreens/Signup'
import Login from '../screens/authScreens/Login'

import { setColors } from '../store/actions/colors'

const AuthSwitch = () => {
    const dispatch = useDispatch()
    const { authNavName } = useSelector(state => state.navigation)

    useEffect(() => {
        dispatch(setColors())

        return () => null
    }, [dispatch])

    if (authNavName === 'signup') {
        return <Signup />
    } else if (authNavName === 'login') {
        return <Login />
    } else {
        return <Signup />
    }
}
export default AuthSwitch