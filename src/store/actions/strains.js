import { SET_APP_APPOINTMENTS } from "./appointments"

export const SET_APP_CURRENT_STRAIN = "SET_APP_CURRENT_STRAIN"

export const getAppCurrentStrain = strainID => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        firebase.firestore().collection('strains').doc(strainID).get()
            .then(strain => {
                dispatch({type: SET_APP_APPOINTMENTS, updatedAppCurrentStrain: strain.doc()})
            })
            .catch(error => console.log(error))
    }
}