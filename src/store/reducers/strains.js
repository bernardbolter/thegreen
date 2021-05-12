import {
    SET_APP_CURRENT_STRAIN
} from '../actions/strains'

const initialState = {
    appCurrentStrain: {}
}

const strainsReducer = (state = initialState, action) => {
    switch (action) {
        case SET_APP_CURRENT_STRAIN:
            return {
                ...state,
                appCurrentStrain: action.updatedAppCurrentStrain
            }
        default:
            return state
    }
}

export default strainsReducer