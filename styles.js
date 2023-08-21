import { StyleSheet } from "react-native"

export const styles = (props) => StyleSheet.create({
    textTitle: {
        fontSize: 32,
        fontWeight: 800,
        color: '#E1E1E1'
    },
    textDefault: {
        fontSize: 18,
        fontWeight: 400,
        color: '#E2E2E2'
    },
    divTopHalfRadius: {
        backgroundColor: '#7DB9B6',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flex: props.flex,
    }, 
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMediumText: {
        fontSize: 24,
        color: '#E2E2E2',
        fontWeight: '500'
    },
    lineSeparator: {
        width: 52,
        borderBottomWidth: 1,
        borderBottomColor: '#7C7C7C4D',
        borderStyle: 'solid'
    },
    viewGlassBgIcons: {
        width: 70,
        height: 65,
        borderWidth: 1,
        borderColor: '#FFFFFF54',
        backgroundColor: '#FFFFFF33',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})