import { useState } from "react";
import { Modal, Button, ModalProps, Text, StyleSheet, View, SafeAreaView } from "react-native";

import { ModalContainer, ViewContainer, Title, ButtomC, TextButtom, ViewCodigo, TextCodigo } from "./modalCodigo.stye";

import VerLogicaF from "../../functions/VerLogica/verLogica";

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
                <SafeAreaView>
                    <ViewContainer>
                        <SafeAreaView>
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
                                    <Text style={{fontSize: 17}}>A operação pode ser facilmente resolvida a partir do seu conceito matemático:</Text>
                                    <Text style={{fontSize: 16, marginTop: 30}}>
                                        Sua operação é: {modalValue?.n1} {modalValue?.operacao} {modalValue?.n2} = {modalValue?.resultado}
                                    </Text>
                                    {/* <Text>No entanto, precisamos entender que o conceito envolvido na multiplicação se trata de uma adição sucessiva. Ou seja:</Text> */}

                                    {modalValue?.operacao === '+' ? (
                                        <View>
                                            <Text style={{fontSize: 17, marginTop: 30, marginBottom: 10}}>Adição</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{alignItems: 'center'}}>
                                                    <Text style={{fontSize: 17}}>{modalValue.n1}</Text>
                                                    <Text style={{fontSize: 17}}>N1</Text>
                                                </View>
                                                <View style={{alignItems: 'center', marginLeft: 15}}>
                                                    <Text style={{fontSize: 17}}>{modalValue.operacao}</Text>
                                                </View>
                                                <View style={{alignItems: 'center', marginLeft: 15}}>
                                                    <Text style={{fontSize: 17}}>{modalValue.n2}</Text>
                                                    <Text style={{fontSize: 17}}>N2</Text>
                                                </View>
                                                <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15}}>
                                                    <Text style={{fontSize: 17}}>=  {modalValue.resultado}</Text>
                                                </View>
                                            </View>
                                            <Text style={{marginTop: 15, fontSize: 16}}>Onde na adição é apenas somado o primeiro valor + o segundo valor.</Text>
                                            <Text style={{marginTop: 15, fontSize: 16}}>Nesse caso, o número: {modalValue?.n1}.</Text>
                                            <Text style={{marginTop: 15, fontSize: 16}}>É somado ao número {modalValue?.n2}.</Text>
                                            <Text style={{marginTop: 15, fontSize: 16}}>Gerando o resultado: {modalValue?.resultado}</Text>
                                        </View>
                                    ) : (modalValue?.operacao === '-') ? (
                                        <View>
                                            <Text style={{fontSize: 16, marginTop: 30, marginBottom: 10}}>Subtração</Text>
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
                                            <Text style={{marginTop: 15, fontSize: 16}}>Na subtração, o segundo valor é subtraído do primeiro.</Text>
                                            <Text style={{marginTop: 15, fontSize: 16}}>Nesse caso, o número: {modalValue?.n2}.</Text>
                                            <Text style={{marginTop: 15, fontSize: 16}}>É subtraído do número {modalValue?.n1}.</Text>
                                            <Text style={{marginTop: 15, fontSize: 16}}>Gerando o resultado: {modalValue?.resultado}</Text>
                                        </View>
                                    ) : (modalValue?.operacao === '*') ? (
                                        <View>
                                            <Text style={{fontSize: 18, marginTop: 30, marginBottom: 15}}>Multiplicação</Text>
                                            <Text style={{marginBottom: 15, fontSize: 16}}>No entanto, precisamos entender que o conceito envolvido na multiplicação se trata de uma adição sucessiva. Ou seja:</Text>
                                            <VerLogicaF n1={modalValue?.n1} n2={modalValue?.n2} operacao={modalValue?.operacao} resultado={modalValue?.resultado} />
                                            <Text style={{marginTop: 15, fontSize: 16}}>Observe que o maior número é somado à ele mesmo repetidas vezes. Essas repetições acontecem o número de vezes igual ao valor do menor número.</Text>
                                            <Text style={{marginTop: 15, marginBottom: 15, fontSize: 16}}>Neste caso, o número: {modalValue?.n1}</Text>
                                            <Text style={{marginTop: 15, marginBottom: 15, fontSize: 16}}>Foi somado à ele mesmo: {modalValue?.n2} vezes!</Text>
                                            <Text style={{marginTop: 15, marginBottom: 15, fontSize: 16}}>Gerando o mesmo resultado: {modalValue?.resultado}</Text>
                                        </View>
                                    ) : (modalValue?.operacao === '/') ? (
                                        <View>
                                            <Text style={{fontSize: 18, marginTop: 30, marginBottom: 15}}>Divisão</Text>
                                            <VerLogicaF n1={modalValue?.n1} n2={modalValue?.n2} operacao={modalValue?.operacao} resultado={modalValue?.resultado} />
                                        </View>
                                    ) : null}

                                </View>
                            )}

                        </SafeAreaView>
                        <ButtomC onPress={() => setModalVisible(false)}>
                            <TextButtom>Fechar</TextButtom>
                        </ButtomC>
                    </ViewContainer>
                </SafeAreaView>

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