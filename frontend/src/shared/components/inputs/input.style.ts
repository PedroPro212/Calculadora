import styled from "styled-components/native";

export const Container = styled.View<{ width?: string }>`
    width: ${({ width }) => width || '119px'};
    height: 98px;
`

export const InputContainer = styled.TextInput<{ width?: string }>`
    width: ${({ width }) => width || '119px'};
    height: 70px;
    borderRadius: 5px;
    borderWidth: 1px;
    borderColor: #000000;
    backgroundColor: #D9D9D9
`

export const DescInput = styled.Text`
    fontSize: 20px;
    color: #000000;
    textAlign: center;
    marginTop: 5px;
`