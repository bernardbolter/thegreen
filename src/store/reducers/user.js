import {
    SET_USER
} from '../actions/user'

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...action.updatedUser
            }
        default:
            return state
    }
}

export default userReducer