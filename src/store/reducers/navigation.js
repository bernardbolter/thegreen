import {
    SET_AUTH_NAV_NAME
} from '../actions/navigation'

const initialState = {
    authNavName: 'signup',
    signupNavName: 'coupon',
    mainNavName: 'main'
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_NAV_NAME:
            return {
                ...state,
                authNavName: action.updatedAuthNavName
            }
        default:
            return state
    }
}

export default navigationReducer