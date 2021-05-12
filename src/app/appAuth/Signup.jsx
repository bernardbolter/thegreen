import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

import UseAppContainer from '../../hooks/useAppContainer'
import { useWindowSize } from '../../hooks/useWindowSize'
import { hexToRgba } from '../../helpers/hexToRgba'

import Sponser from '../../components/modals/Sponser'
import Extracts from '../../components/modals/Extracts'

import SubmitButton from '../../components/SubmitButton'

import { ReactComponent as BrandTopLeft } from '../../svg/authSvgs/brandTopLeft.svg'
import { ReactComponent as CircleArrow } from '../../svg/authSvgs/circleArrow.svg'
import { ReactComponent as SignupTitle } from '../../svg/authSvgs/signup.svg'
import { ReactComponent as EyeOpen } from '../../svg/authSvgs/eyeOpen.svg'
import { ReactComponent as EyeClosed } from '../../svg/authSvgs/eyeClosed.svg'
import { ReactComponent as TwitterLogo } from '../../svg/authSvgs/twitterLogo.svg'
import { ReactComponent as FacebookLogo } from '../../svg/authSvgs/facebookLogo.svg'
import { ReactComponent as GoogleLogo } from '../../svg/authSvgs/googleLogo.svg'

import '../../styles/forms.scss'
import './appAuth.scss'

import { SET_AUTH_NAV_NAME } from '../../store/actions/navigation'
import {
    signinEmail,
    signinTwitter,
    signinFacebook,
    signinGoogle
} from '../../store/actions/auth'

const signupSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(30)
})

const Signup = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const colors = useSelector(state => state.colors)
    const submit = useSelector(state => state.submit)
    const profile = useSelector(state => state.firebase.profile)
    console.log(profile)

    const [fadedDark, setFadedDark] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const size = useWindowSize()
    console.log(size)

    useEffect(() => {
        if (colors.dark.length !==0) {
            setFadedDark(hexToRgba(colors.dark, .5))
        }

        return () => null
    }, [colors.dark])

    useEffect(() => {
        if (!profile.isEmpty) {
            history.push('/')
        }

        return () => null
    }, [profile.isEmpty, history])

    return (
        <UseAppContainer
            xs={630}
            s={660}
            m={670}
            l={680}
            xl={700}
        >
            <div className="auth-header">
                <div className="brand-top-left-svg">
                    <BrandTopLeft 
                        style={{ fill: colors.dark } }
                    />
                </div>
                <div
                    className="auth-link signup-link"
                    onClick={() => dispatch({
                        type: SET_AUTH_NAV_NAME,
                        updatedAuthNavName: 'login'
                    })}
                >
                    <div className="signup-svg">
                        <SignupTitle 
                            style={{ fill: colors.dark }}
                        />
                    </div>
                    <div className="auth-link-text singup-link-text">
                        <h5>already have an account</h5>
                        <div className="circle-arrow-svg">
                            <CircleArrow 
                                style={{ fill: colors.dark }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="auth-middle">

            <div className="signup-text">
                <h3
                    style={{ color: colors.dark }}
                >In 10 easy steps you’ll be in contact with qualified docter onine, while helping subsidies a veterans access.</h3>
            </div>

            <Formik
                initialValues={{ 
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={signupSchema}
            >
                {(signupProps) => {
                    var isSubmitReady = false
                    if (signupProps.dirty && !signupProps.errors.email && !signupProps.errors.password && !signupProps.errors.confirmPassword) {
                        isSubmitReady = true
                    } else {
                        isSubmitReady = false
                    }
                    console.log(isSubmitReady)
                    return (
                    <Form className="auth-form">
                        <Field
                            id="email"
                            name="email"
                            placeholder="enter email"
                            className="input"
                            style={{ borderColor: fadedDark }}
                            inputMode="email"
                        />
                        <p className="error">{signupProps.touched.email && signupProps.errors.email}</p>
                        <div className="input-eye-container">
                            <Field
                                id="password"
                                name="password"
                                placeholder="enter password"
                                className="input"
                                style={{ borderColor: fadedDark }}
                                type={!passwordVisible ? "password" : null}
                            />
                            <div 
                                className="eye-svg"
                                onClick={() => setPasswordVisible(!passwordVisible)} 
                                style={{ borderColor: fadedDark }}   
                            >
                                {passwordVisible ? <EyeOpen /> : <EyeClosed />}
                            </div>
                        </div>
                        <p className="error">{signupProps.touched.password && signupProps.errors.password}</p>

                        <SubmitButton
                            formProps={signupProps}
                            isSubmitReady={isSubmitReady}
                            isSubmit={submit.signup.isSubmit}
                            submitAction={signinEmail}
                            text={isSubmitReady ? 'CREAT MY ACCOUNT' : 'ENTER YOUR INFO'}
                            submitName="signup"
                        />

                        { (submit.signup.errorMessage.length !== 0) ? <p className="submit-error">{submit.signup.errorMessage}</p> : null }
                    </Form>
                )}}
            </Formik>

            <div className="auth-with-text">
                <h4
                    style={{ color: colors.dark }}
                >or signup with</h4>
            </div>

            <div className="auth-socials-container">
                <div
                    className="auth-social"
                    onClick={() => dispatch(signinTwitter())}
                >
                    <TwitterLogo />
                </div>
                <div
                    className="auth-social"
                    onClick={() => dispatch(signinFacebook())}
                >
                    <FacebookLogo />
                </div>
                <div
                    className="auth-social"
                    onClick={() => dispatch(signinGoogle())}
                >
                    <GoogleLogo />
                </div>
            </div>

            </div> {/* end auth middle */}

            <div className="auth-bottom-container">
                <Sponser />
                <Extracts />
            </div>

        </UseAppContainer>
    )
}

export default Signup