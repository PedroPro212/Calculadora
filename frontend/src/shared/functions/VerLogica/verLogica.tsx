import React from "react";
import { View, Text } from "react-native";

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
    } else if (n2Number === 1) {
        return (
            <View>
                <Text>Todo número dividido por 1 é ele mesmo.</Text>
            </View>
        );
    } else if (n1Number <= 10) {
        return (
            <View>
                <Text>{n1} - {n2} = {n1Number - n2Number}</Text>
                <Text>{n1Number - n2Number} - {n2} = {n1Number - n2Number - n2Number}</Text>
                <Text>{n1Number - (n2Number * 2)} - {n2} = {n1Number - (n2Number * 3)}</Text>
                <Text>{n1Number - (n2Number * 3)} - {n2} = {n1Number - (n2Number * 4)}</Text>
                <Text>Subtrai o ({n2}) até chegar no 0 ou 1</Text>
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
  }

};

export default VerLogicaF;
