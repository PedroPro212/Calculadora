import { useState } from "react";
import { Modal, Button, ModalProps, Text } from "react-native";

import { ModalContainer, ViewContainer, Title, ButtomC, TextButtom } from "./modalCodigo.stye";

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
                    <Text>Sua operação é: {modalValue?.n1} {modalValue?.operacao} {modalValue?.n2} = {modalValue?.resultado}</Text>
                    <ButtomC onPress={() => setModalVisible(false)}>
                        <TextButtom>Fechar</TextButtom>
                    </ButtomC>
                </ViewContainer>
            </ModalContainer>
        </Modal>
    )
}

export default ModalCodigo;