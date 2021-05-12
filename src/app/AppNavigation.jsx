import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import SplashScreen from '../components/SplashScreen'

import Coupon from './appRegistration/Coupon'
import Id from './appRegistration/Id'
import Contact from './appRegistration/Contact'
import Consent from './appRegistration/Consent'
import History from './appRegistration/History'
import Medications from './appRegistration/Medications'
import Scheduling from './appRegistration/Scheduling'
import Payment from './appRegistration/Payment'

import Home from './appHome/Home'
import Coupons from './appHome/Coupons'
import Passport from './appHome/Passport'
import Strain from './appHome/Strain'
import ViewCoupon from './appHome/ViewCoupon'

import { SET_USER } from '../store/actions/user'
import { SET_REGISTRATION_COMPONENT } from '../store/actions/navigation'

const AppNavigation = () => {
    const dispatch = useDispatch()
    const { registrationNavName } = useSelector(state => state.navigation)
    const { auth } = useSelector(state => state.firebase)
    const user = useSelector(state => state.user)
    console.log(user)

    useFirestoreConnect([{ collection: 'users', doc: auth.uid }])
    const firestoreUser = useSelector(({ firestore: { data } }) => data.users && data.users[auth.uid])

    useEffect(() => {
        console.log('updating user info')
        dispatch({ type: SET_USER, updatedUser: firestoreUser })

        return () => null
    }, [firestoreUser])

    useEffect(() => {
        console.log("app reg efect ", registrationNavName)
        if (Object.values(user).length !== 0 && registrationNavName === '') {
            if (user.isRegistered && user.isRegisterWithoutDoctor && !user.isRenewal) {
                dispatch({  type: SET_REGISTRATION_COMPONENT, updatedRegistrationNavName: 'Home'})
            } else {
                if (!user.registrationProgress.coupon) {
                    dispatch({  type: SET_REGISTRATION_COMPONENT, updatedRegistrationNavName: 'Coupon'}) 
                } else if (!user.registrationProgress.id) {
                    dispatch({  type: SET_REGISTRATION_COMPONENT, updatedRegistrationNavName: 'Id'}) 
                }
            }
        }

        return () => null
    }, [registrationNavName, user])

    var appPath = useMemo(() => {
        console.log("use appPath")
        console.log("reg name ", registrationNavName)
        if (Object.values(user).length === 0 || registrationNavName === '') {
            return <SplashScreen />
        } else if (registrationNavName === 'Coupon') {
            return <Coupon />
        } else if (registrationNavName === 'Id') {
            return <Id />
        } else if (registrationNavName === 'Contact') {
            return <Contact />
        } else if (registrationNavName === 'Consent') {
            return <Consent />
        } else if (registrationNavName === 'Consent') {
            return <Consent />
        } else if (registrationNavName === 'Medications') {
            return <Medications />
        } else if (registrationNavName === 'History') {
            return <History />
        } else if (registrationNavName === 'Scheduling') {
            return <Scheduling />
        } else if (registrationNavName === 'Payment') {
            return <Payment />
        } else if (registrationNavName === 'Home') {
            return <Home />
        } else if (registrationNavName === 'Coupons') {
            return <Coupons />
        } else if (registrationNavName === 'Passport') {
            return <Passport />
        } else if (registrationNavName === 'Strain') {
            return <Strain />
        } else if (registrationNavName === 'ViewCoupon') {
            return <ViewCoupon />
        } else {
            return <Home />
        }
    }, [user, registrationNavName])

    return (
        <>
            {appPath}
        </>
    )

    
}

export default AppNavigation