import { useState } from "react";
import { Modal, Button, ModalProps, Text, StyleSheet } from "react-native";

import { ModalContainer, ViewContainer, Title, ButtomC, TextButtom, ViewCodigo, TextCodigo } from "./modalCodigo.stye";

type ModalFast = ModalProps & {
    visible: boolean;         // Recebe a visibilidade como prop
    setModalVisible: (value: boolean) => void; // Função para controlar a visibilidade
    modalValue?: { n1: string, operacao: string, n2: string, resultado: string };       // Valor do modal a ser exibido
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
                    <Title>Veja o código por trás</Title>
                    <Text style={{fontSize: 16, marginTop: 30}}>Sua operação é: {modalValue?.n1} {modalValue?.operacao} {modalValue?.n2} = {modalValue?.resultado}</Text>

                    <ViewCodigo>
                        <TextCodigo>n1 = {modalValue?.n1}</TextCodigo>
                        <TextCodigo>n2 = {modalValue?.n2}</TextCodigo>
                        <TextCodigo></TextCodigo>
                        <TextCodigo>resultado = n1 {modalValue?.operacao} n2</TextCodigo>
                        <TextCodigo></TextCodigo>
                        <TextCodigo>print({modalValue?.resultado})</TextCodigo>
                    </ViewCodigo>

                    <Text style={{fontSize: 19, marginTop: 30}}>Explicação:</Text>
                    <Text style={{fontSize: 16, marginTop: 10}}>n1 armazena o valor de {modalValue?.n1}</Text>
                    <Text style={{fontSize: 16, marginTop: 10}}>n2 armazena o valor de {modalValue?.n2}</Text>
                    <Text style={{fontSize: 16, marginTop: 10}}>Em seguinda fazemos o calculo conforme operação escolhida, nesse caso: {modalValue?.operacao}</Text>
                    <Text style={{fontSize: 16, marginTop: 10}}>E armazenamos o resultado da operação na variável resultado</Text>

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