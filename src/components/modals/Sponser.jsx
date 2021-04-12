import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import {
    CSSTransition
} from 'react-transition-group'

import { ReactComponent as OurPartner } from '../../svg/modalSvgs/ourPartner.svg'
import { ReactComponent as Brand } from '../../svg/modalSvgs/brand.svg'

import backgroundBud from '../../img/backgroundBud.jpg'
import veteranLogo from '../../img/veteranLogo.png'

import './modals.scss'

const Sponser = () => {
    const [sponserOpen, setSponserOpen] = useState(false)
    const nodeRef = useRef(null)
    const colors = useSelector(state => state.colors)

    return (
        <div className="sponser-container">
            <div 
                className="sponser-logo-button"
                onClick={() => setSponserOpen(true)}
            >
                <img
                    src={veteranLogo}
                    alt="Veteran Patient Access Logo"
                />
            </div>
            <CSSTransition
                classNames="sponser-modal"
                in={sponserOpen}
                timeout={{ enter: 600 , exit: 600 }}
                unmountOnExit
                appear
            >
                <div 
                    className="sponser-modal-container"
                    noderef={nodeRef}  
                >
                    <div className="sponser-modal-content">
                        <div className="sponser-header">
                            <div className="sponser-partner-svg-container">
                                <OurPartner />
                            </div>
                            <div className="sponser-brand-svg-container">
                                <Brand />
                            </div>
                        </div>

                        <div className="sponser-body">
                            <h3
                                style={{ color: colors.dark }}
                            >Welcome to <span className="bold">The Green App!</span> Your platform for doctor recommendations, dispensary discounts, and the select <span className="italic">Passport Network.</span> Secure sign-up for a doctor takes only 10 minutes with real-time appointments often available.</h3>
                            <h3
                                style={{ color: colors.dark }}
                            >Our partners at <span className="bold">Veteran Patient Access (VPA)</span> are proud to support you in helping disabled veterans access doctors and medicine. Pass <span className="bold">The Green App</span> QR code card to your friends, and we will sponsor a disabled veteran on your behalf.</h3>
                        </div>

                        <div className="sponser-logo">
                            <img
                                src={veteranLogo}
                                alt="Veteran Patient Access Logo"
                            />
                        </div>

                        <div 
                            className="sponser-close-button"
                            onClick={() => setSponserOpen(false)}
                        >
                            <h2
                                style={{ color: colors.dark, opacity: .5 }}
                            >CLOSE</h2>
                        </div>
                    </div>

                    <div className="sponser-background"
                        style={{
                            backgroundImage: `url(${backgroundBud})`
                        }} 
                    />
                </div>
            </CSSTransition> 
        </div>
    )
}

export default Sponser