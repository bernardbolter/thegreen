import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UseAppContainer from '../../hooks/useAppContainer'

import './passport.scss'

const Passport = () => {
    const { colors } = useSelector(state => state)
    return (
        <UseAppContainer
            xs={550}
            s={570}
            m={600}
            l={610}
            xl={630}
        >
            <div className="passport-container">
                <h3>Passport</h3>
            </div>

        </UseAppContainer>
    )
}

export default Passport