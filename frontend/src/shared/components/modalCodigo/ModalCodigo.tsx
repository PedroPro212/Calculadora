import { useState } from "react";
import { Modal, Button, ModalProps } from "react-native";

import { ModalContainer, ViewContainer, Title } from "./modalCodigo.stye";

type ModalFast = ModalProps & {
    visible: boolean;         // Recebe a visibilidade como prop
    setModalVisible: (value: boolean) => void; // Função para controlar a visibilidade
    modalValue?: string;       // Valor do modal a ser exibido
}

const ModalCodigo = ({ visible, setModalVisible, ...props}: ModalFast) => {

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
                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                </ViewContainer>
            </ModalContainer>
        </Modal>
    )
}

export default ModalCodigo;