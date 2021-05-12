import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UseAppContainer from '../../hooks/useAppContainer'

import './strain.scss'

const Strain = () => {
    const { colors } = useSelector(state => state)
    return (
        <UseAppContainer
                xs={550}
                s={570}
                m={600}
                l={610}
                xl={630}
            >
                <div className="strain-container">
                    <h3>Coupons</h3>
                </div>

        </UseAppContainer>
    )
}

export default Strain