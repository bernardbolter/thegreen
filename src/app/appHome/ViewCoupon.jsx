import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UseAppContainer from '../../hooks/useAppContainer'

import './view-coupon.scss'

const ViewCoupon = () => {
    const { colors } = useSelector(state => state)
    return (
        <UseAppContainer
            xs={550}
            s={570}
            m={600}
            l={610}
            xl={630}
        >
            <div className="view-coupon-container">
                <h3>View Coupon</h3>
            </div>
        </UseAppContainer>
    )
}

export default ViewCoupon