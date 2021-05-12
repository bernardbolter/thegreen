import React from 'react'
import { useSelector } from 'react-redux'

import UseAppContainer from '../../hooks/useAppContainer'

import AppRegistrationNavigation from './AppRegistrationNavigation'

import './payment.scss'

const Payment = () => {
    const colors = useSelector(state => state.colors)
    return (
        <UseAppContainer
                xs={550}
                s={570}
                m={600}
                l={610}
                xl={630}
            >
            <AppRegistrationNavigation />
            <div 
                className="payment-container"
                style={{ backgroundColor: colors.light }}    
            >
                <p style={{ color: colors.dark }}>Payment</p>
            </div>
        </UseAppContainer>
    )
}

export default Payment