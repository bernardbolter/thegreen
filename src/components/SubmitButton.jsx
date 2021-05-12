import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import '../styles/forms.scss'

const SubmitButton = ({
    formProps,
    isSubmitReady,
    isSubmit,
    submitAction,
    text,
    submitName
}) => {
    console.log("ready: ", isSubmitReady)
    const dispatch = useDispatch()
    const colors = useSelector(state => state.colors)
    return (
        <>
            {isSubmit ? (
                <Loader
                    type="ThreeDots"
                    color="rgba(27,47,31,.8)"
                    height={44}
                    width={44}
                />
            ) : (
                <button 
                    className="button-container"
                    style={{ opacity: isSubmitReady ? .8 : .3}}
                    onClick={() => {
                        formProps.resetForm()
                        dispatch(submitAction(formProps.values, submitName))
                    }}
                    disabled={!isSubmitReady}
                >
                    <h3
                        style={{ color: colors.dark}}
                    >{text}</h3>
                </button>
            )}
        </>
    )
}

export default SubmitButton