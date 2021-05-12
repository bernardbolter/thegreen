import {
    SET_APP_APPOINTMENTS
} from '../actions/appointments'

const initialState = {
    currentAppointments: []
}

const appointmentsReducer = (state = initialState, action) => {
    switch(action) {
        case SET_APP_APPOINTMENTS:
            return {
                ...state,
                currentAppointments: action.updatedCurrentAppointments
            }
            default:
                return state
    }
}

export default appointmentsReducer