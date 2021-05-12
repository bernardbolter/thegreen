import React,  { useState } from 'react'
import { useSelector } from 'react-redux'

import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import AppRegistrationNavigation from './AppRegistrationNavigation'
import UseAppContainer from '../../hooks/useAppContainer'
import SubmitButton from '../../components/SubmitButton'

import { saveMedications } from '../../store/actions/medications'

import './medications.scss'

const medicationsSchema = yup.object({
    medicationsList: yup.string(),
    sideEffects: yup.string()
})

const Medications = () => {
    const { colors, submit, user } = useSelector(state => state)

    const [medCameraOpen, setMedCameraOpen] = useState(false)
    const [readyToSaveMedications, setReadyToSaveMedications] = useState(false)

    return (
        <UseAppContainer
            xs={550}
            s={570}
            m={600}
            l={610}
            xl={630}
        >
           <AppRegistrationNavigation />
           <div className="medications-container">
               <div className="medications-header">
                   <h3>7. MEDICATIONS</h3>
               </div>
               <Formik
                initialState={{
                    medicationsList: '',
                    sideEffects: ''
                }}
                validationsSchema={medicationsSchema}
               >
                   {(medicationsProps) => {
                       var isSubmitReady = false
                       return (
                           <Form className="medications-form">
                                <div className="medications-inputs">
                                    <h3 style={{ color: colors.dark }}>Please list your medications.</h3>
                                    <p style={{ color: colors.dark}}>are any of these medications new?</p>
                                    <Field
                                        name="medicationsList"
                                        id="medicationsList"
                                        className="input-textarea"
                                    />
                                </div>

                                <div 
                                    className="medications-camrea-open-container"
                                    onClick={() => setMedCameraOpen(true)}
                                >
                                    <h4 style={{ color: colors.dark }}>Do you want to take a pic of your prescription and/or medical record of your diagnosis?</h4>
                                    <div className="medications-camera-svg-container">
                                        <svg width="100" height="125" viewBox="0 0 100 125">
                                            <path fill="white" d="M50 39.65C41.797 39.65 35.15 46.302 35.15 54.5C35.15 62.703 41.797 69.35 50 69.35C58.198 69.35 64.85 62.703 64.85 54.5C64.85 46.302 58.198 39.65 50 39.65Z" />
                                            <path fill="white" d="M86 27.5H75.198C73.713 27.5 72.113 26.349 71.648 24.938L68.854 16.561C68.383 15.151 66.787 14 65.302 14H34.698C33.213 14 31.613 15.151 31.147 16.562L28.353 24.939C27.883 26.35 26.288 27.501 24.802 27.501H14C9.052 27.501 5 31.553 5 36.501V77C5 81.948 9.052 86 14 86H86C90.948 86 95 81.948 95 77V36.5C95 31.552 90.948 27.5 86 27.5ZM50 77C37.572 77 27.5 66.928 27.5 54.5C27.5 42.077 37.572 32 50 32C62.423 32 72.5 42.077 72.5 54.5C72.5 66.928 62.423 77 50 77ZM82.849 43.108C80.94 43.108 79.383 41.556 79.383 39.642C79.383 37.732 80.94 36.181 82.849 36.181C84.763 36.181 86.315 37.733 86.315 39.642C86.315 41.556 84.763 43.108 82.849 43.108Z" fill="white" fill-opacity="0.6"/>
                                        </svg>
                                    </div>
                                    <p style={{ color: colors.dark }}>take a photo of medications or record</p>
                                </div>

                                <div className="medications-side-effects-container">
                                    <h3 style={{ color: colors.dark}}>Do you have any drug interactions/side effects with the use of cannabis?</h3>
                                    <p style={{ color: colors.dark }}>please describe any drug interactions/side effects.</p>
                                    <Field
                                        name="sideEffects"
                                        id="sideEffects"
                                        className="input-textarea"
                                    />
                                </div>

                                <SubmitButton
                                    formProps={medicationsProps}
                                    isSubmitReady={isSubmitReady}
                                    isSubmit={submit.medications.isSubmit}
                                    submitAction={saveMedications}
                                    text={isSubmitReady ? "SAVE AND CONTINUE" : "ENTER INFORMATION"}
                                    submitName="medications"
                                />

                                {(submit.medications.errorMessage.length !== 0) 
                                    ? <p className="submit-error">{submit.medications.errorMessage}</p> 
                                    : null 
                                }

                           </Form>
                       )
                   }}
               
               </Formik>
           </div>
        
        </UseAppContainer>
    )
}

export default Medications