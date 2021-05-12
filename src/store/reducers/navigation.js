import {
    SET_AUTH_NAV_NAME,
    SET_REGISTRATION_COMPONENT
} from '../actions/navigation'

const initialState = {
    authNavName: 'signup',
    registrationNavName: '',
    mainNavName: 'main'
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_NAV_NAME:
            return {
                ...state,
                authNavName: action.updatedAuthNavName
            }
        case SET_REGISTRATION_COMPONENT:
            return {
                ...state,
                registrationNavName: action.updatedRegistrationNavName
            }
        default:
            return state
    }
}

export default navigationReducer