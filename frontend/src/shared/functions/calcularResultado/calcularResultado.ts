import { Alert } from "react-native";

export default async function calcularResultado(inputValue1:any, inputValue2:any, inputValue3:any, setResultado:any) {
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
}