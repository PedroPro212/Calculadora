import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, Modal, Button } from "react-native";
import { Dimensions } from 'react-native';

// Meus componentes
import styles from "../style/calculadora.style";
import Input from "../../../shared/components/inputs/Input";
import ButtomCustom from "../../../shared/components/button/Button";
import ModalCodigo from "../../../shared/components/modalCodigo/ModalCodigo";

// Minhas funções
import { deletarUltimoCaracter } from "../../../shared/functions/deleteCaracter";
import calcularResultado from "../../../shared/functions/calcularResultado/calcularResultado";

const Calculadora = () => {
    const screenWidth = Dimensions.get('window').width;
    
    const [inputValue1, setInputValue1] = useState("")  // n1
    const [inputValue2, setInputValue2] = useState("")  // n2
    const [inputValue3, setInputValue3] = useState("")  // operacao
    const [resultado, setResultado] = useState(""); // Estado para o resultado

    // Estado para controlar qual input está ativo
    const [activeInput, setActiveInput] = useState("n1");

    const operacao = ['+', '-', '*', '/'] // Array com todos os sinais de operações

    // Estado para controlar a visibilidade do modal
    const [modalVisible, setModalVisible] = useState(false);
    const [modalValue, setModalValue] = useState({ n1: "", operacao: "", n2: "", resultado: "" }); // Adicionando modalValue

    const handleOpenModalCodigo  = () => {
        // Construa a string com os valores dos inputs para exibir no modal
        const modalContent = {n1: inputValue1, operacao: inputValue3, n2: inputValue2, resultado, tipo: 'Codigo'};
        setModalValue(modalContent);  // Configura o valor do modal
        setModalVisible(true);
    }

    const handleOpenModalLogica  = () => {
        // Construa a string com os valores dos inputs para exibir no modal
        const modalContent = {n1: inputValue1, operacao: inputValue3, n2: inputValue2, resultado, tipo: 'Logica'};
        setModalValue(modalContent);  // Configura o valor do modal
        setModalVisible(true);
    }

    const handleButtonPress = (value:any) => {
        if (activeInput === "n1" && !operacao.includes(value)) {    // Verifica se o usuário não está digitando sinais de operações
            setInputValue1((prevValue) => prevValue + value.toString())
        }else if (activeInput === "n2" && !operacao.includes(value)) {      // Verifica se o usuário não está digitando sinais de operações
            setInputValue2((prevValue) => prevValue + value.toString())
        }else if (activeInput === 'operacao' && operacao.includes(value)) {     // Verifica se o usuário está digitando sinais de operações
            setInputValue3(value.toString())
        }
    }   
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CALCULADORA PEDAGÓGICA</Text>           

            <ModalCodigo 
                visible={modalVisible}
                setModalVisible={setModalVisible}
                //modalValue={modalValue} // Passando a prop modalValue
                modalValue={modalValue} // Passando modalValue como prop
            />

            <View style={styles.rowsOperacoes}>
                <Input 
                    title="n1" 
                    value={inputValue1}
                    onFocus={() => setActiveInput("n1")}
                    onChangeText={setInputValue1}
                    showSoftInputOnFocus={false}
                />
                <Input 
                    title="operacao" 
                    value={inputValue3}
                    onFocus={() => setActiveInput("operacao")}
                    onChangeText={setInputValue3} 
                    showSoftInputOnFocus={false}
                />
                <Input 
                    title="n2" 
                    value={inputValue2} 
                    onFocus={() => setActiveInput("n2")} 
                    onChangeText={setInputValue2} 
                    showSoftInputOnFocus={false}    // Esconde o teclado
                />
            </View>
            <Text style={styles.igual}>=</Text>
            <Input
                title="result" 
                width="350px"
                value={resultado} // Exibe o resultado aqui
                editable={false} // Para que o usuário não possa editar
            />

            <View style={{position: 'absolute', bottom: 15}}>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="7" value={'7'} onPress={() => handleButtonPress(7)} />
                    <ButtomCustom title="8" value={'8'} onPress={() => handleButtonPress(8)} />
                    <ButtomCustom title="9" value={'9'} onPress={() => handleButtonPress(9)} />
                    <ButtomCustom title="/" backgroundColor="#D9830A" value={"/"} onPress={() => handleButtonPress('/')} />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="4" value={'4'} onPress={() => handleButtonPress(4)} />
                    <ButtomCustom title="5" value={'5'} onPress={() => handleButtonPress(5)} />
                    <ButtomCustom title="6" value={'6'} onPress={() => handleButtonPress(6)} />
                    <ButtomCustom title="*" backgroundColor="#D9830A" value={"*"} onPress={() => handleButtonPress('*')} />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="1" value={'1'} onPress={() => handleButtonPress(1)} />
                    <ButtomCustom title="2" value={'2'} onPress={() => handleButtonPress(2)} />
                    <ButtomCustom title="3" value={'3'} onPress={() => handleButtonPress(3)} />
                    <ButtomCustom title="-" backgroundColor="#D9830A" value={"-"} onPress={() => handleButtonPress('-')} />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="0" value={'0'} onPress={() => handleButtonPress(0)} />
                    <ButtomCustom title="Ver lógica" fontSize="20px" onPress={() => handleOpenModalLogica()} />
                    <ButtomCustom title="Ver código" fontSize="20px" onPress={() => handleOpenModalCodigo()} />
                    <ButtomCustom title="+" backgroundColor="#D9830A" value={"+"} onPress={() => handleButtonPress('+')} />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="=" style={{ width: screenWidth * 0.73 }} onPress={() => calcularResultado(inputValue1, inputValue2, inputValue3, setResultado)} />
                    <ButtomCustom title="DEL" fontSize="20px" onPress={() => deletarUltimoCaracter(activeInput, inputValue1, inputValue2, inputValue3, setInputValue1, setInputValue2, setInputValue3)} />
                </View>
            </View>
        </View>
    )
}

export default Calculadora;