import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFirebase } from 'react-redux-firebase'

import UseAppContainer from '../../hooks/useAppContainer'
import Profile from '../../components/Profile'
import HomeLink from '../../components/HomeLink'

import HomeModal from '../../components/modals/HomeModal'
import Sponser from '../../components/modals/Sponser'
import Extracts from '../../components/modals/Extracts'

import './home.scss'

const Home = () => {
    const dispatch = useDispatch()
    const firebase = getFirebase()
    const { colors, user } = useSelector(state => state)
    
    return (
        <UseAppContainer
                xs={550}
                s={570}
                m={600}
                l={610}
                xl={630}
            >
            <div className="home-container">
                <div className="home-header-container">
                    <HomeModal />
                    <Profile />
                </div>

                <div className="home-links-container">
                    <h3 style={{ color: colors.dark }}>Coupons</h3>
                    <HomeLink
                        text="view your current coupons"
                        link="Coupons"
                    />
                    <h3 style={{ color: colors.dark }}>Strains</h3>
                    <HomeLink
                        text="new strain available"
                        link="Strain"
                    />
                    <h3 style={{ color: colors.dark }}>Passport</h3>
                    <HomeLink
                        text="change your local dispensary"
                        link="Passport"
                    />
                    <HomeLink
                        text="view your stats"
                        link="passport"
                    />
                    <h3 style={{ color: colors.dark }}>Registration</h3>
                    <HomeLink
                        text="renew your script"
                        link="Coupon"
                    />
                </div>

                <div classNAme="home-footer">
                    <Sponser />
                    <Extracts />
                </div>

            </div>
        </UseAppContainer>
    )
}

export default Home