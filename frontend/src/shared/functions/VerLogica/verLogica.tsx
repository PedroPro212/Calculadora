import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

type Props = {
  n1: string;
  n2: string;
  operacao: string;
  resultado: string;
};

const VerLogicaF: React.FC<Props> = ({ n1, n2, operacao, resultado }) => {
  const n1Number = Number(n1);
  const n2Number = Number(n2);

  if (operacao === '*') {
    if (n2Number === 0) {
        return (
            <View>
                <Text>Todo número multiplicado por 0 é 0.</Text>
            </View>
        );
    } else if (n2Number === 1) {
        return (
            <View>
                <Text>Todo número multiplicado por 1 é ele mesmo.</Text>
            </View>
        );
    } else if (n2Number === 2) {
        return (
            <View>
                <Text>{n1} + {n1} = {n1Number + n1Number}</Text>
            </View>
        );
    } else if (n2Number === 3) {
        return (
            <View>
                <Text>{n1} + {n1} = {n1Number + n1Number}</Text>
                <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 3}</Text>
            </View>
        );
    } else if (n2Number === 4) {
        return (
            <View>
                <Text style={{fontSize: 20}}>{n1} + {n1} = {n1Number + n1Number}</Text>
                <Text style={{fontSize: 20}}>{n1Number + n1Number} + {n1Number} = {n1Number * 3}</Text>
                <Text style={{fontSize: 20}}>{n1Number + n1Number} + {n1Number} = {n1Number * 4}</Text>
            </View>
        );
    }
    else {
        return (
            <SafeAreaView>
                <View>
                    <Text>{n1} + {n1} = {n1Number + n1Number}</Text>
                    <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 3}</Text>
                    <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 4}</Text>
                    <Text>...</Text>
                    <Text>Irá somar mais {n2Number - (4)} vezes até chegar no resulado.</Text>
                </View>
            </SafeAreaView>
        );
    }
  } 
  else {
    if (n2Number === 0) {
        return (
            <View>
                <Text>Não é possível dividir por zero.</Text>
            </View>
        );
    }

    if (n2Number === 1) {
        return (
            <View>
                <Text>Todo número dividido por 1 é ele mesmo.</Text>
            </View>
        );
    }

    if (n1Number <= 0) {
        return (
            <View>
                <Text>O número inicial deve ser maior que zero.</Text>
            </View>
        );
    }

    const subtracoes = [];
    let resultado = n1Number;
    let count = 0;

    // Calcula o total de repetições necessárias para atingir 0
    const totalRepeticoes = Math.floor(n1Number / n2Number) + (n1Number % n2Number !== 0 ? 1 : 0);

    // Loop para realizar a subtração sequencial, limitado a 4 iterações
    while (resultado > 0 && count < 4) {
        const novoResultado = resultado - n2Number;

        if (novoResultado >= 0) {
            subtracoes.push(`${resultado} - ${n2Number} = ${novoResultado}`);
            resultado = novoResultado;
            count++;
        } else {
            break; // Sai do loop se o resultado for menor que zero
        }
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.textoExplicacoes}>
                    Subtraindo {n2Number} de {n1Number} até atingir 0:
                </Text>
                {subtracoes.map((subtracao, index) => (
                    <Text key={index} style={styles.textoExplicacoes}>
                        {subtracao}
                    </Text>
                ))}

                <Text style={{ marginTop: 15, fontSize: 15 }}>
                    Total de repetições necessárias para chegar a 0 ou resto = {totalRepeticoes} vezes
                </Text>

                <Text style={{ marginTop: 15, fontSize: 15 }}>
                    Total de repetições realizadas nesta simulação: {count}
                </Text>
            </View>
        </SafeAreaView>
    );
}




};

const styles = StyleSheet.create({
    textoExplicacoes: {
        fontSize: 15
    }
})

export default VerLogicaF;
