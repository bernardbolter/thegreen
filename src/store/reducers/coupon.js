import {
    SET_COUPON,
    RESET_COUPON
} from '../actions/coupon'

const initialState = {
    url: '',
    excerpt: 'the excerpt'
}

const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUPON:
            return {
                ...state,
                url: action.updatedCouponUrl
            }
        case RESET_COUPON:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default couponReducer