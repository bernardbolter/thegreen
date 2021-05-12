import {
    SET_FRONT_ID,
    SET_BACK_ID
} from '../actions/id'

const initialState = {
    frontID: {},
    backID: {}
}

const idReducer = (state = initialState, action) => {
    switch (action) {
        case SET_FRONT_ID:
            return {
                ...state,
                frontID: action.updatedFrontID
            }
        case SET_BACK_ID:
            return {
                ...state,
                backID: action.updatedBackID
            }
        default:
            return state
    }
}

export default idReducer