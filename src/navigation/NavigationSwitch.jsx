import React from 'react'
import { getFirebase } from 'react-redux-firebase'

import './navigation.scss'

const NavigationSwitch = () => {
    const firebase = getFirebase()
    console.log(firebase)
    return (
        <div className="navigation-switch">
            <h1>Navigation Switch</h1>
            <button
                onClick={() => firebase.logout()}
            >
                <h4>sign out</h4>
            </button>
        </div>
    )
}

export default NavigationSwitch