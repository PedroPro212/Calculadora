import styled from "styled-components/native";

export const ButtomContainer = styled.TouchableOpacity<{ backgroundColor?: string }>`
    alignItems: center;
    justifyContent: center;
    width: 90px;
    height: 90px;
    marginTop: 5px;
    backgroundColor: ${({ backgroundColor }) => backgroundColor || '#D9D9D9'};
    borderRadius: 5px;
`

export const TextButtom = styled.Text<{ fontSize?: string }>`
    fontSize: ${({ fontSize }) => fontSize || '50px'};
    color: #000000;
    textAlign: center;
    width: 88px;
`