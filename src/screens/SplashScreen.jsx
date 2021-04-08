import React from 'react'

import { ReactComponent as StartupBrand } from '../svg/startupBrand.svg'
import backgroundBud from '../img/backgroundBud.jpg'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './splashScreen.scss'

const SplashScreen = () => {
    return (
        <section className="splash-screen">
            <div className="splash-forground">
                <StartupBrand />
                <Loader
                    type="ThreeDots"
                    color="rgba(27,47,31,.8)"
                    height={50}
                    width={50}
                />
            </div>
            <div 
                className="splash-background"
                style={{
                    backgroundImage: `url(${backgroundBud})`
                }}  
            />
        </section>
    )
}

export default SplashScreen