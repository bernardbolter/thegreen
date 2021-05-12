import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFirebase } from 'react-redux-firebase'

import AppRegistrationNavigation from './AppRegistrationNavigation'
import UseAppContainer from '../../hooks/useAppContainer'
import SubmitButton from '../../components/SubmitButton'
import AppointmentDate from '../../components/AppointmentDate'

import { CSSTransition } from 'react-transition-group'

import { SET_APP_DOCTORS } from '../../store/actions/doctors'
import { SET_APP_APPOINTMENTS } from '../../store/actions/appointments'
import { bookAppointment } from '../../store/actions/appointments'

import './scheduling.scss'

const Scheduling = () => {
    const dispatch = useDispatch()
    const firebase = getFirebase()
    const { colors, users, submit, doctors, appointments } = useSelector(state => state)

    const [formattedAppointments, setFormatedAppointments] = useState([])
    const [selectedAppointment, setSelectedAppointment] = useState({})
    const [selectedAppointmentVisible, setSelectedAppointmentVisible] = useState(false)

    useEffect(() => {
        if (doctors.currentDoctors.length === 0) {
            firebase.firestore().collection('indexes').doc('doctors').get()
                .then(doc => {
                    dispatch({ type: SET_APP_DOCTORS, updatedCurrentDoctors: doc.data() })
                })
                .catch(error => console.log(error))
        }
    }, [doctors.currentDoctors])

    useEffect(() => {
        if (appointments.currentAppointments.length === 0) {
            firebase.firestore().collection('indexes').doc('appointments').get()
                .then(doc => {
                    dispatch({ type: SET_APP_APPOINTMENTS, updatedCurrentAppointments: doc.data() })
                })
                .catch(error => console.log(error))
        }
        if (appointments.currentAppointments.length !== 0) {
            appointments.currentAppointments.map(appointments => {
                const appointmentDoctor = doctors.find(doctor => doctor.doctorID === appointments.doctorID)
                console.log(appointmentDoctor)
            })
        }
    }, [appointments.currentAppointments, dispatch, doctors, firebase])

    return (
        <UseAppContainer
            xs={550}
            s={570}
            m={600}
            l={610}
            xl={630}
        >
            <AppRegistrationNavigation /> 
            <div className="scheduling-container">
                <div className="scheduling-header">
                    <h3 style={{ color: colors.dark }}>8. SELECT AN APPOINTMENT</h3>
                </div>
                <div className="scheduling-appointments-container">
                    <h3 style={{ color: colors.dark }}>Select an Appointment</h3>
                    <p style={{ color: colors.dark }}>select a date and then choose a time from the dropdown.</p>
                    {formattedAppointments.length === 0 ? (
                        <div className="scheduling-no-appointments-container">
                            <h4 style={{ color: colors.dark }}>No Appointments Avaiable</h4>
                        </div>
                    ) : (
                        formattedAppointments.map(appointment => (
                            <AppointmentDate
                                key={appointments.day + appointment.date}
                                appointment={appointment}
                                setSelectedAppointment={setSelectedAppointment}
                                setSelectedAppointmentVisible={setSelectedAppointmentVisible}
                            />
                        ))
                    )}
                </div>

                <CSSTransition
                    classNames="appointments-modal"
                    in={selectedAppointmentVisible}
                    timeout={{ enter: 300, exit: 300 }}
                    unmountOnExit
                    appear
                >
                    <div 
                        className="appointments-modal-container"
                        style={{ backgroundColor: colors.lightSecondary }}
                    >
                        <div className="appointments-bar" />
                        <div className="appointments-modal-content">
                            <p>Here is the appointment</p>
                        </div>

                        <SubmitButton
                            formProps={selectedAppointment}
                            isSubmit={submit.appointments.isSubmit}
                            submitAction={bookAppointment}
                            text={"BOOK THIS APPOINTMENT"}
                            submitName="appointments"
                        />

                        {(submit.appointments.errorMessage.length !== 0) 
                            ? <p className="submit-error">{submit.appointments.errorMessage}</p> 
                            : null 
                        }

                    </div>

                </CSSTransition>

            </div>
        </UseAppContainer>
    )
}


export default Scheduling