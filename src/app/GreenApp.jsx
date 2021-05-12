import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import AppAuthSwitch from './appAuth/AppAuthSwitch'
import AppNavigation from './AppNavigation'

import { useWindowSize } from '../hooks/useWindowSize'
import Noisy from '../img/noisy_grid.png'

import { setColors } from '../store/actions/colors'

const GreenApp = () => {
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.firebase)
    const { width, height } = useWindowSize()

    useEffect(() => {
        dispatch(setColors())
        return () => null
    }, [dispatch])

    var componentReturn = useMemo(() => {
        if (isLoaded(auth) && !isEmpty(auth)) {
            return <AppNavigation />
        } else {
            return <AppAuthSwitch />
        }
    }, [auth])

    return (
        <div 
            style={{
                width: width,
                height: height,
                position: 'fixed',
                zIndex: -1001,
                backgroundImage:  `url(${Noisy})`,
                backgroundRepeat: 'repeat',
                top: 0,
                left: 0
            }}
        >
            {componentReturn}
        </div>
    )  
}

export default GreenApp