import { useState } from "react";
import { Modal, Button, ModalProps, Text, StyleSheet, View } from "react-native";

import { ModalContainer, ViewContainer, Title, ButtomC, TextButtom, ViewCodigo, TextCodigo } from "./modalCodigo.stye";

type ModalFast = ModalProps & {
    visible: boolean;         // Recebe a visibilidade como prop
    setModalVisible: (value: boolean) => void; // Função para controlar a visibilidade
    modalValue?: { n1: string, operacao: string, n2: string, resultado: string, tipo?: string };       // Valor do modal a ser exibido
}

const ModalCodigo = ({ visible, setModalVisible, modalValue, ...props}: ModalFast) => {

    const handleModalPress = (value:any) => {
        setModalVisible(true);  // Abre o modal
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setModalVisible(false);  // Fechar o modal quando pressionar o botão de voltar no Android
            }}
            {...props}
        >
            <ModalContainer>
                <ViewContainer>
                    {modalValue?.tipo === 'Codigo' ? (
                        <View>
                            <Title>Veja o código por trás</Title>
                            <Text style={{fontSize: 16, marginTop: 30}}>
                                Sua operação é: {modalValue?.n1} {modalValue?.operacao} {modalValue?.n2} = {modalValue?.resultado}
                            </Text>

                            <ViewCodigo>
                                <TextCodigo>n1 = {modalValue?.n1}</TextCodigo>
                                <TextCodigo>n2 = {modalValue?.n2}</TextCodigo>
                                <TextCodigo></TextCodigo>
                                <TextCodigo>resultado = n1 {modalValue?.operacao} n2</TextCodigo>
                                <TextCodigo></TextCodigo>
                                <TextCodigo>print(resultado)</TextCodigo>
                                <TextCodigo></TextCodigo>
                                <TextCodigo>Saída: {modalValue?.resultado}</TextCodigo>
                            </ViewCodigo>

                            <Text style={{fontSize: 19, marginTop: 30}}>Explicação:</Text>
                            <Text style={{fontSize: 16, marginTop: 10}}>n1 armazena o valor de {modalValue?.n1}</Text>
                            <Text style={{fontSize: 16, marginTop: 10}}>n2 armazena o valor de {modalValue?.n2}</Text>
                            <Text style={{fontSize: 16, marginTop: 10}}>Em seguinda fazemos o calculo conforme operação escolhida, nesse caso: {modalValue?.operacao}</Text>
                            <Text style={{fontSize: 16, marginTop: 10}}>E armazenamos o resultado da operação na variável resultado</Text>
                        </View>
                    ) : (
                        <View>
                            <Title>Veja a lógica por trás</Title>
                            <Text style={{fontSize: 16, marginTop: 30}}>
                                Sua operação é: {modalValue?.n1} {modalValue?.operacao} {modalValue?.n2} = {modalValue?.resultado}
                            </Text>

                            {modalValue?.operacao === '+' ? (
                                <View>
                                    <Text style={{fontSize: 16, marginTop: 30, marginBottom: 10}}>Adição</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={{fontSize: 16}}>{modalValue.n1}</Text>
                                            <Text style={{fontSize: 16}}>N1</Text>
                                        </View>
                                        <View style={{alignItems: 'center', marginLeft: 15}}>
                                            <Text style={{fontSize: 16}}>{modalValue.operacao}</Text>
                                        </View>
                                        <View style={{alignItems: 'center', marginLeft: 15}}>
                                            <Text style={{fontSize: 16}}>{modalValue.n2}</Text>
                                            <Text style={{fontSize: 16}}>N2</Text>
                                        </View>
                                        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15}}>
                                            <Text style={{fontSize: 16}}>=  {modalValue.resultado}</Text>
                                        </View>
                                    </View>
                                </View>
                            ) : (modalValue?.operacao === '-') ? (
                                <View>
                                    <Text style={{fontSize: 16, marginTop: 30}}>Subtração</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={{fontSize: 16}}>{modalValue.n1}</Text>
                                            <Text style={{fontSize: 16}}>N1</Text>
                                        </View>
                                        <View style={{alignItems: 'center', marginLeft: 15}}>
                                            <Text style={{fontSize: 16}}>{modalValue.operacao}</Text>
                                        </View>
                                        <View style={{alignItems: 'center', marginLeft: 15}}>
                                            <Text style={{fontSize: 16}}>{modalValue.n2}</Text>
                                            <Text style={{fontSize: 16}}>N2</Text>
                                        </View>
                                        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15}}>
                                            <Text style={{fontSize: 16}}>=  {modalValue.resultado}</Text>
                                        </View>
                                    </View>
                                </View>
                            ) : (modalValue?.operacao === '*') ? (
                                <View>
                                    <Text style={{fontSize: 16, marginTop: 30}}>Multiplicação</Text>
                                </View>
                            ) : (modalValue?.operacao === '/') ? (
                                <View>
                                    <Text style={{fontSize: 16, marginTop: 30}}>Divisão</Text>
                                </View>
                            ) : null}

                        </View>
                    )}

                    <ButtomC onPress={() => setModalVisible(false)}>
                        <TextButtom>Fechar</TextButtom>
                    </ButtomC>
                </ViewContainer>
            </ModalContainer>
        </Modal>
    )
}

const styles = StyleSheet.create({
    var: {
        color: 'blue'
    }
})

export default ModalCodigo;