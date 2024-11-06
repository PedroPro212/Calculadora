import { StyleSheet, Dimensions  } from "react-native"

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
    },
    title: {
        fontSize: 25,
        margin: width * 0.04,   // 6% da largura da tela
        color: '#000000'
    },
    igual: {
        fontSize: 50,
        marginTop: height * 0.0,
        color: '#000000'
    },
    rowsOperacoes: {
        flexDirection: 'row',   
        gap: width * 0.025,     // 2.5% da largura da tela
        marginTop: height * 0.015    // 1% da altura da tela
    },
    rowsTeclas: {
        flexDirection: 'row', 
        gap: width * 0.015, // 1.5% da largura da tela
    }
})

export default styles;