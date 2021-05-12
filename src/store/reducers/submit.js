import {
    SUBMIT,
    SET_ERROR,
    RESET_ALL
} from '../actions/submit'

const initialState = {
    signup: {
        isSubmit: false,
        errorMessage: ''
    },
    login: {
        isSubmit: false,
        errorMessage: ''
    },
    submitCoupon: {
        isSubmit: false,
        errorMessage: ''
    },
    saveCoupon: {
        isSubmit: false,
        errorMessage: ''
    },
    id: {
        isSubmit: false,
        errorMessage: ''
    },
    contact: {
        isSubmit: false,
        errorMessage: ''
    },
    consent: {
        isSubmit: false,
        errorMessage: ''
    },
    history: {
        isSubmit: false,
        errorMessage: ''
    },
    medications: {
        isSubmit: false,
        errorMessage: ''
    },
    appointments: {
        isSubmit: false,
        errorMessage: ''
    }
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return {
                ...state,
                [action.submitName]: {
                    isSubmit: true,
                    errorMessage: ''
                }
            }
        case SET_ERROR:
            return {
                ...state,
                [action.submitName]: {
                    isSubmit: false,
                    errorMessage: action.updatedErrorMessage
                }
            }
        case RESET_ALL:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default submitReducer