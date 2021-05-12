import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UseAppContainer from '../../hooks/useAppContainer'
import HomeModal from '../../components/modals/HomeModal'
import StrainSpotlight from '../../components/StrainSpotlight'

import { SET_REGISTRATION_COMPONENT } from '../../store/actions/navigation'
import { getAppCurrentCoupon } from '../../store/actions/coupons'

import './coupons.scss'

const Coupons = () => {
    const dispatch = useDispatch()
    const { colors, user } = useSelector(state => state)
    return (
        <UseAppContainer
                xs={550}
                s={570}
                m={600}
                l={610}
                xl={630}
            >
                <div className="coupons-container">
                    <div className="coupons-header">
                        <div className="coupons-title">
                            <HomeModal />
                            <h3>YOUR COUPONS</h3>
                            <p>{user.username === undefined ? user.contactInfo.email : user.username}</p>
                        </div>
                        <StrainSpotlight />
                    </div>

                    <div className="coupons-list-container">
                        {(user.coupons.length !== 0 ? (
                            <div className="coupons-list">
                                {user.coupons.map(coupon => {
                                    return (
                                        <div 
                                            className="coupons-coupon"
                                            key={coupon.couponId}
                                            onClick={() => {
                                                dispatch({ type: SET_REGISTRATION_COMPONENT, updatedRegistrationNavName: 'ViewCoupon' })
                                                dispatch(getAppCurrentCoupon(coupon.couponId))
                                            }}
                                        >
                                            <img
                                                src={{ uri: coupon.url }}
                                                alt={`Coupon from ${coupon.dispensaryName}`}
                                                className="coupons-coupon-image"
                                            />
                                            <div className="coupons-coupon-image-shadow" />
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="coupons-none">
                                <h3>No Coupons</h3>
                            </div>
                        ))}
                    </div>
                </div>

        </UseAppContainer>
    )
}

export default Coupons