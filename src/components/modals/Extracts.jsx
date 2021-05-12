import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { CSSTransition } from 'react-transition-group'

import { ReactComponent as Info } from '../../svg/modalSvgs/info.svg'
import { ReactComponent as Times } from '../../svg/modalSvgs/times.svg'

import './modals.scss'

const Extracts = ({ textColor }) => {
    const colors = useSelector(state => state.colors)
    const [extractsOpen, setExtractsOpen] = useState(false)
    return (
        <div className="extracts-container">
            <div 
                className="extracts-button"
                onClick={() => setExtractsOpen(true)}
            >
                <div className="extracts-info-svg">
                    <Info 
                        style={{ fill: textColor }}
                    />
                </div>
                <h5
                    style={{ color: textColor }}
                >{colors.lightName}</h5>
                <div className="extracts-times-svg">
                    <Times 
                        style={{ fill: textColor }}
                    />
                </div>
                <h5
                    style={{ color: textColor }}
                >{colors.darkName}</h5>
            </div>
            <CSSTransition
                classNames="extracts-modal"
                in={extractsOpen}
                timeout={{ enter: 300, exit: 300 }}
                unmountOnExit
                appear
            >
                <div
                    className="extracts-modal-container"
                    style={{ backgroundColor: colors.lightSecondary }}
                >
                    <div className="extracts-bar" />

                    <div
                        className="extracts-modal-content"
                    >
                        <h3
                            style={{ color: colors.darkSecondary }}
                        >The Green App colors have been extraxted from various strains of cannabis, and as you go through this site you will get different strain combinations.
                        </h3>
                        <h3
                            style={{ color: colors.darkSecondary }}
                        >Like this popup menu is {colors.lightSecondaryName} x {colors.darkSecondaryName} and the main screen is {colors.lightName} x {colors.darkName}.
                        </h3>
                    </div>

                    <div
                        className="extracts-close"
                        onClick={() => setExtractsOpen(false)}    
                    >
                        <h2>CLOSE</h2>
                    </div>
                </div>

            </CSSTransition>
        </div>
    )
}

export default Extracts