import {
    SET_APP_DOCTORS
} from '../actions/doctors'

const initialState = {
    currentDoctors: []
}

const doctorsReducer = (state = initialState, action) => {
    switch(action) {
        case SET_APP_DOCTORS:
            return {
                ...state,
                currentDoctors: action.updatedCurrentDoctors
            }
        default:
            return state
    }
}

export default doctorsReducer