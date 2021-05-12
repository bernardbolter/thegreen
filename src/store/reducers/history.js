import {
    SET_HOSPITAL_SURGERY_DESCRIPTION
} from '../actions/history'

const initialState = {
    hospitalSurgeryDescription: ''
}

const historyReducer = (state = initialState, action) => {
    switch (action) {
        case SET_HOSPITAL_SURGERY_DESCRIPTION:
            return {
                ...state,
                hospitalSurgeryDescription: action.updatedHistorySurgeryDescription
            }
        default:
            return state
    }
}

export default historyReducer