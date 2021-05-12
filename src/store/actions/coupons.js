export const SET_APP_CUrRENT_COUPON = "SET_APP_CURRENT_COUPON"

export const getAppCurrentCoupon = couponId => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        firebase.firestore().collection('Coupons').doc(couponId).get()
            .then(coupon => {
                dispatch({ type: SET_APP_CUrRENT_COUPON, updatedAppCurrentCoupon: coupon.doc()})
            })
            .catch(error => console.log(error))
    }
}