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

import { ReactComponent as BrandTopRight } from '../../svg/authSvgs/brandTopRight.svg'
import { ReactComponent as LoginTitle } from '../../svg/authSvgs/login.svg'
import { ReactComponent as CircleArrow } from '../../svg/authSvgs/circleArrow.svg'
import { ReactComponent as EyeOpen } from '../../svg/authSvgs/eyeOpen.svg'
import { ReactComponent as EyeClosed } from '../../svg/authSvgs/eyeClosed.svg'
import { ReactComponent as TwitterLogo } from '../../svg/authSvgs/twitterLogo.svg'
import { ReactComponent as FacebookLogo } from '../../svg/authSvgs/facebookLogo.svg'
import { ReactComponent as GoogleLogo } from '../../svg/authSvgs/googleLogo.svg'

import '../../styles/forms.scss'
import './appAuth.scss'

import { SET_AUTH_NAV_NAME } from '../../store/actions/navigation'
import {
    loginEmail,
    loginTwitter,
    loginFacebook,
    loginGoogle
} from '../../store/actions/auth'

const loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(30),
})

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const colors = useSelector(state => state.colors)
    const submit = useSelector(state => state.submit)
    const profile = useSelector(state => state.firebase.profile)
    console.log(profile)

    const [fadedDark, setFadedDark] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const { width, height } = useWindowSize()
    console.log(height)

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
                xs={550}
                s={570}
                m={600}
                l={610}
                xl={630}
            >
                <div className="auth-header">
                    <div
                        className="auth-link login-link"
                        onClick={() => dispatch({
                            type: SET_AUTH_NAV_NAME,
                            updatedAuthNavName: 'signup'
                        })}
                    >
                        <div className="login-svg">
                            <LoginTitle
                                style={{ fill: colors.dark }}
                            />
                        </div>
                        <div className="auth-link-text login-text">
                            <div className="circle-arrow-svg flip-svg">
                                <CircleArrow
                                    style={{ fill: colors.dark }}
                                />
                            </div>
                            <h5>no account? sign up</h5>
                        </div>
                    </div>
                    <div className="brand-top-right-svg">
                        <BrandTopRight
                            style={{ fill: colors.dark }}
                        />
                    </div>
                </div>

                <div className="auth-middle">

                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={loginSchema}
                >
                    {(loginProps) => {
                        var isSubmitReady = false
                        if (loginProps.dirty && !loginProps.errors.email && !loginProps.errors.password) {
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
                                    className='input'
                                    inputMode="email"
                                    style={{ borderColor: fadedDark }}
                                />
                                <p className="error">{loginProps.touched.email && loginProps.errors.email}</p>
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
                                        style={{ borderColor: fadedDark }}
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        {passwordVisible ? <EyeOpen /> : <EyeClosed />}
                                    </div>
                                </div>

                                <SubmitButton
                                    formProps={loginProps}
                                    isSubmitReady={isSubmitReady}
                                    isSubmit={submit.login.isSubmit}
                                    submitAction={loginEmail}
                                    text={isSubmitReady ? "LOG IN" : "ENTER YOUR INFO"}
                                    submitName="login"
                                />

                                {(submit.login.errorMessage.length !== 0) 
                                    ? <p className="submit-error">{submit.login.errorMessage}</p> 
                                    : null 
                                }
                                
                            </Form>
                        )
                    }}
                </Formik>

                <div className="auth-with-text">
                    <h4
                        style={{ color: colors.dark }}
                    >or login with</h4>
                </div>

                <div className="auth-socials-container">
                    <div
                        className="auth-social"
                        onClick={() => dispatch(loginTwitter())}
                    >
                        <TwitterLogo />
                    </div>
                    <div
                        className="auth-social"
                        onClick={() => dispatch(loginFacebook())}
                    >
                        <FacebookLogo />
                    </div>
                    <div
                        className="auth-social"
                        onClick={() => dispatch(loginGoogle())}
                    >
                        <GoogleLogo />
                    </div>
                </div>

                </div>

                <div className="auth-bottom-container">
                    <Sponser />
                    <Extracts />
                </div>

            </UseAppContainer>
    )
}

export default Login