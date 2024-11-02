import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";

// Meus componentes
import styles from "../style/calculadora.style";
import Input from "../../../shared/components/inputs/Input";
import ButtomCustom from "../../../shared/components/button/Button";

// Minhas funções
import { deletarUltimoCaracter } from "../../../shared/functions/deleteCaracter";

const Calculadora = () => {
    
    const [inputValue1, setInputValue1] = useState("")  // n1
    const [inputValue2, setInputValue2] = useState("")  // n2
    const [inputValue3, setInputValue3] = useState("")  // operacao
    const [resultado, setResultado] = useState(""); // Estado para o resultado

    // Estado para controlar qual input está ativo
    const [activeInput, setActiveInput] = useState("n1");

    const operacao = ['+', '-', '*', '/'] // Array com todos os sinais de operações

    const handleButtonPress = (value:any) => {
        if (activeInput === "n1" && !operacao.includes(value)) {    // Verifica se o usuário não está digitando sinais de operações
            setInputValue1((prevValue) => prevValue + value.toString())
        }else if (activeInput === "n2" && !operacao.includes(value)) {      // Verifica se o usuário não está digitando sinais de operações
            setInputValue2((prevValue) => prevValue + value.toString())
        }else if (activeInput === 'operacao' && operacao.includes(value)) {     // Verifica se o usuário está digitando sinais de operações
            setInputValue3(value.toString())
        }
    }   

    const calcularResultado = async () => {
        const response = await fetch('http://10.0.2.2:5000/calcular', {     // Conexão com o backend Python através de HTTP
            method: 'POST',     // POST, pois estamos enviando uma requisição
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                n1: parseFloat(inputValue1),    // Enviamos os valore de n1
                n2: parseFloat(inputValue2),    // Enviamos os valore de n2    
                operacao: inputValue3,      // Enviamos a operação aritmética
            }),
        });

        const data = await response.json();     // Recebemos o valor
        console.log(data)       // Printa no terminal o resultado recebido do backend

        if (response.ok) {
            setResultado(data.resultado.toString());    // Converte o resultado recebido para string
        } else {
            Alert.alert(data.error);
        }
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora do conhecimento</Text>            

            <View style={styles.rowsOperacoes}>
                <Input 
                    title="n1" 
                    value={inputValue1}
                    onFocus={() => setActiveInput("n1")}
                    onChangeText={setInputValue1} 
                />
                <Input 
                    title="operacao" 
                    value={inputValue3}
                    onFocus={() => setActiveInput("operacao")}
                    onChangeText={setInputValue3} 
                />
                <Input 
                    title="n2" 
                    value={inputValue2} 
                    onFocus={() => setActiveInput("n2")} 
                    onChangeText={setInputValue2} 
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
                    <ButtomCustom title="Ver lógica" fontSize="20px" />
                    <ButtomCustom title="Ver código" fontSize="20px" />
                    <ButtomCustom title="+" backgroundColor="#D9830A" value={"+"} onPress={() => handleButtonPress('+')} />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="=" style={{width:299}} onPress={calcularResultado} />
                    <ButtomCustom title="DEL" fontSize="20px" onPress={() => deletarUltimoCaracter(activeInput, inputValue1, inputValue2, inputValue3, setInputValue1, setInputValue2, setInputValue3)} />
                </View>
            </View>
        </View>
    )
}

export default Calculadora;