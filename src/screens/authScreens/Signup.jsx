import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

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

import './authScreens.scss'

import {  SET_AUTH_NAV_NAME } from '../../store/actions/navigation'
import {
    signinEmail,
    signinTwitter,
    signinFacebook,
    signinGoogle
} from '../../store/actions/auth'

const signupSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(30),
    confirmedPassword: yup.string().oneOf([yup.ref('password')], 'Password does not match.').required('required')
})

const Signup = () => {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.colors)
    return (
        <div 
            className="signup-screen"
            style={{ backgroundColor: colors.light }}    
        >
            <div className="signup-header">
                <div className="brand-top-left-svg">
                    <BrandTopLeft />
                </div>
                <div
                    className="signup-link"
                    onClick={() => dispatch({
                        type: SET_AUTH_NAV_NAME,
                        updatedAuthNavName: 'login'
                    })}
                >
                    <div className="signup-svg">
                        <SignupTitle />
                    </div>
                    <div className="signup-bot-text-container">
                        <h5>already have an account</h5>
                        <div className="circle-arrow-svg">
                            <CircleArrow />
                        </div>
                    </div>
                </div>
            </div>

            <div className="signup-text">
                <h3>In 10 easy steps you’ll be in contact with qualified docter onine, while helping subsidies a veterans access.</h3>
            </div>

            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={signupSchema}
                onSubmit={( values, actions ) =>  {
                    actions.resetForm()
                    console.log(values)
                    dispatch(signinEmail(values.email, values.password))
                }}
            >
                {(signupProps) => (
                    <Form>
                        <Field
                            id="email"
                            name="email"
                            placeholder="enter email"
                            className="signup-input"
                        />
                        <p className="error">{signupProps.touched.email && signupProps.errors.email}</p>
                        <Field
                            id="password"
                            name="password"
                            placeholder="enter password"
                            className="signup-input"
                        />
                        <p className="error">{signupProps.touched.password && signupProps.errors.password}</p>
                        <Field
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirm password"
                            className="signup-input"
                        />
                        <p className="error">{signupProps.touched.confirmPassword && signupProps.errors.confirmPassword}</p>
                        <button
                            type="submit"
                            className="submit-button-container"
                            disabled={false}
                            onClick={() => signupProps.handleSubmit()}
                        >
                            <SubmitButton/>
                        </button>
                    </Form>
                )}
            </Formik>
            <div className="signup-login-with">
                <h4>or login with</h4>
            </div>
            <div className="signup-socials-container">
                <div
                    className="signup-social"
                    onClick={() => dispatch(signinTwitter())}
                >
                    <TwitterLogo />
                </div>
                <div
                    className="signup-social"
                    onClick={() => dispatch(signinFacebook())}
                >
                    <FacebookLogo />
                </div>
                <div
                    className="signup-social"
                    onClick={() => dispatch(signinGoogle)}
                >
                    <GoogleLogo />
                </div>
            </div>

            <div className="signup-bottom-container">
                <Sponser />
                <Extracts />
            </div>
        </div>
    )
}

export default Signup