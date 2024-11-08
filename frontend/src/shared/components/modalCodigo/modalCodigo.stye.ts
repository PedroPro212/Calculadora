import styled from "styled-components/native";
import { Dimensions } from "react-native";

// Pegando as dimensões da tela
const { width, height } = Dimensions.get("window");

// Tamanho máximo para o modal
const modalWidth = width * 0.85; // Modal com 85% da largura da tela
const modalHeight = height * 0.8; // Modal com 50% da altura da tela

export const ModalContainer = styled.View`
  flex: 1; 
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay escuro */
  padding: 20px;  /* Adicionando padding */
`

export const ViewContainer = styled.View`
    width: ${modalWidth}px;
    height: ${modalHeight}px; 
    padding: 20px;
    backgroundColor: white; 
    borderRadius: 10px;
`

export const Title = styled.Text`
    fontSize: ${width * 0.05};  /* Ajustando o tamanho da fonte conforme a largura da tela */
    textAlign: center;
    textTransform: uppercase;
    marginBottom: 15px;
`

export const ButtomC = styled.TouchableOpacity`
  width: ${width * 0.7}px;
  height: ${height * 0.05}px;
  backgroundColor: #D9830A;
  borderRadius: 5px;
  alignItems: center;
  justifyContent: center;
  align-self: center;
  position: absolute; 
  bottom: 35px;
`

export const TextButtom = styled.Text`
  fontSize: ${width * 0.039}px;
  textAlign: center;
  textTransform: uppercase;
`