import {
    SET_COLORS
} from '../actions/colors'

const initialState = {
    light: '',
    lightName: '',
    lightSecondary: '',
    lightSecondaryName: '',
    dark: '',
    darkName: '',
    darkSecondary: '',
    darkSecondaryName: ''
}

const colorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return {
                ...state,
                light: action.lightColor.color,
                lightName: action.lightColor.name,
                lightSecondary: action.lightColorSecondary.color,
                lightSecondaryName: action.lightColorSecondary.name,
                dark: action.darkColor.color,
                darkName: action.darkColor.name,
                darkSecondary: action.darkColorSecondary.color,
                darkSecondaryName: action.darkColorSecondary.name
            }
        default:
            return state
    }
}

export default colorsReducer