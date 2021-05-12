import {
    SET_ERROR,
    RESET_ALL
} from '../actions/submit'

export const signinEmail = (values, submitName) => {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        await firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(userCredential => {
                dispatch({type: RESET_ALL})
                firebase.firestore().collection('users').doc(userCredential.user.uid).set({
                    userId: userCredential.user.uid,
                    email: values.email,
                    isRegistered: false,
                    isRenewal: false,
                    isRegisterWithoutDoctor: false,
                    registrationProgress: {
                        coupon: false,
                        id: false,
                        contact: false,
                        consent: false,
                        history: false,
                        medications: false,
                        scheduling: false,
                        payment: false
                    },
                    contactInfo: {
                        email: '',
                        fullname: '',
                        address: '',
                        zipcode: '',
                        state: '',
                        city: '',
                        telephone: '',
                        occupation: '',
                        careProvider: ''
                    },
                    coupons: [],
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                .catch(error => {
                    console.log("Error adding document: ", error)
                    dispatch({ type: SET_ERROR, updatedErrorMessage: error.message, submitName: submitName })
                })
            })
            .catch(error => {
                console.log("Error signing up: ", error.message, error.code);
                dispatch({type: SET_ERROR, updatedErrorMessage: error.message, submitName: submitName})
            })
    }
}

export const loginEmail = (values, submitName) => {
    return async (dispatch, getState, getFirebase) => {
        console.log(values, submitName)
        const firebase = getFirebase()
        await firebase
                .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                    dispatch({ type: RESET_ALL })
                })
                .catch(error => {
                    console.log("Error loggin in: ", error.message, error.code)
                    dispatch({ type: SET_ERROR, updatedErrorMessage: error.message, submitName: submitName })
                })
        console.log("auth action log in with email")
    }
}

export const signinTwitter = () => {
    return dispatch => {
        console.log("auth action signin with twitter")
    }
}

export const loginTwitter = () => {
    return dispatch => {
        console.log("auth action login with twitter")
    }
}

export const signinFacebook = () => {
    return dispatch => {
        console.log("auth action signin with facebook")
    }
}

export const loginFacebook = () => {
    return dispatch => {
        console.log("auth action login with facebook")
    }
}

export const signinGoogle = () => {
    return dispatch => {
        console.log("auth action signin with google")
    }
}

export const loginGoogle = () => {
    return dispatch => {
        console.log("auth action login with google")
    }
}

export const logout = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log(firebase);
    }
}