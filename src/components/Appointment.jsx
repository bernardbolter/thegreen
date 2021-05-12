import React from 'react'

const Appointment = ({ time, setSelectedAppointment }) => {
    return (
        <div 
            className="appointment-container"
            onClick={() => setSelectedAppointment(time)}
        >
            <div className="appointment-left">
                <p>with</p>
                <h4>{time.name} {time.letters}</h4>
            </div>
            <div className="appointment-right">
                <h3>{time.hour}</h3>
                <h4>${time.price}</h4>
            </div>
        </div>
    )
}

export default Appointment