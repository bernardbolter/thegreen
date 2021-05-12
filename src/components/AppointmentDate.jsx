import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { CSSTransition } from 'react-transition-group'

import Appointment from './Appointment'

const AppointmentDate = ({ appointment, setSelectedAppointment }) => {
    const colors = useSelector(state => state.colors)
    const [showHours, setSHowHours] = useState(false)

    return (
        <div className="appointment-date-container">
            <div 
                className="appointment-date-day"
                onClick={() => setSHowHours(!showHours)}
            >
                <h3
                    className="appointment-date-day"
                    style={{ color: colors.dark }}
                >{appointment.day}</h3>
                <h4
                    className="appointment-date-date"
                    style={{ color: colors.dark }}
                >{appointment.date}</h4>
                <h5
                    className="appointment-date-year"
                    style={{ color: colors.dark }}
                >{appointment.year}</h5>
            </div>
            <CSSTransition
                classNames="appointments-date-hours-container"
                in={showHours}
                timeout={{ enter: 300, exit: 300 }}
                unmountOnExit
                appear
            >
                {appointment.times.map(time => (
                    <Appointment
                        time={time}
                        key={appointment.day + time}
                        setSelectedAppointment={setSelectedAppointment}
                    />
                ))}
            </CSSTransition>
            
        </div>
    )
}

export default AppointmentDate