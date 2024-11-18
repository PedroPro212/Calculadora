import { Alert } from "react-native";


export default async function calcularResultado(inputValue1:any, inputValue2:any, inputValue3:any, setResultado:any) {
    try {

        console.log('1')

        // Verificar se a rede está disponível antes de tentar a requisição
        const isConnected = await checkNetworkConnectivity();
        if (!isConnected) {
            Alert.alert('Erro de conexão', 'Verifique sua conexão com a internet.');
            return;
        }

        const response = await fetch('http//:15.229.5.232/calcular', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                n1: parseFloat(inputValue1),
                n2: parseFloat(inputValue2),
                operacao: inputValue3,
            }),
        });
        console.log('2')

        console.log(response)

        const data = await response.json();  // Recebe a resposta do backend
        console.log('Resposta do servidor:', data);  // Verifique o que está sendo retornado

        if (response.ok) {
            console.log('Resultado do calculo:', data.resultado)
            setResultado(data.resultado.toString());  // Atualiza o estado com o resultado
        } else {
            console.log("Erro: ", data.resultado.toString())
            Alert.alert(data.error);  // Exibe um erro se houver
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            Alert.alert('Requisição demorou demais e foi cancelada.');
            console.log("Requisição demorou demais e foi cancelada.")
        } else {
            Alert.alert("Erro ao processar a resposta do servidor.");
            console.error(error);
        }
    }
}

// Função para verificar a conectividade com a internet
async function checkNetworkConnectivity() {
    try {
        const response = await fetch('https://www.google.com', { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}