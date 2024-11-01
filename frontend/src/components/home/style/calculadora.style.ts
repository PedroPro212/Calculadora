import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
    },
    title: {
        fontSize: 25,
        margin: 25
    },
    igual: {
        fontSize: 50,
        marginTop: 5
    },
    rowsOperacoes: {
        flexDirection: 'row', 
        gap: 15,
        marginTop: 45
    },
    rowsTeclas: {
        flexDirection: 'row', 
        gap: 5,
    }
})

export default styles;