import Colors from '../../constants/Colors'

export const SET_COLORS = "SET_COLORS"

export const setColors = () => {
    const lightColor = Colors.light[Math.floor(Math.random() * Colors.light.length)]
    const lightColorSecondary = Colors.light[Math.floor(Math.random() * Colors.light.length)]
    const darkColor = Colors.dark[Math.floor(Math.random() * Colors.dark.length)]
    const darkColorSecondary = Colors.dark[Math.floor(Math.random() * Colors.dark.length)]

    return {
        type: SET_COLORS,
        lightColor,
        lightColorSecondary,
        darkColor,
        darkColorSecondary
    }
}