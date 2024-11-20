import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
                <Text>{n1} + {n1} = {n1Number + n1Number}</Text>
                <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 3}</Text>
                <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 4}</Text>
            </View>
        );
    }
    else {
        return (
            <View>
                <Text>{n1} + {n1} = {n1Number + n1Number}</Text>
                <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 3}</Text>
                <Text>{n1Number + n1Number} + {n1Number} = {n1Number * 4}</Text>
                <Text>...</Text>
                <Text>Irá somar mais {n2Number - (4)} vezes até chegar no resulado.</Text>
            </View>
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

    // Simulação para contar quantas vezes o loop total seria necessário
    let totalRepeticoes = 0;
    let tempResultado = n1Number;
    while (tempResultado > 1) {
        tempResultado -= n2Number;
        totalRepeticoes++;
    }

    // Execução limitada a 4 iterações
    while (resultado > 1 && count < 4) {
        resultado -= n2Number;
        count++;
        subtracoes.push(`${n1Number} - (${n2Number} x ${count}) = ${resultado}`);
    }

    return (
        <View>
            <Text style={styles.textoExplicacoes}>Subtraindo {n2} de {n1} até atingir 0 ou 1:</Text>
            {subtracoes.map((subtracao, index) => (
                <Text key={index} style={styles.textoExplicacoes}>{subtracao}</Text>
            ))}
            <Text style={{marginTop: 15, fontSize: 15}}>Total de repetições de subtração necessárias: {totalRepeticoes}</Text>

            <Text style={{marginTop: 15, marginBottom: 15, fontSize: 18}}>Explicação:</Text>
            <Text style={styles.textoExplicacoes}>O número {n2Number} será subtraído {totalRepeticoes} vezes do número {n1Number} até chegar no 0 ou 1.</Text>

            <Text style={{marginTop: 15, marginBottom: 15, fontSize: 15}}>OBS: O que está dentro do () será a quantidade de repetições que o número {n2Number} está subtraindo.</Text>
        </View>
    );
  }

};

const styles = StyleSheet.create({
    textoExplicacoes: {
        fontSize: 15
    }
})

export default VerLogicaF;
