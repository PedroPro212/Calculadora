import { TextInputProps } from "react-native";
import { Container, InputContainer, DescInput } from "./input.style";

type TextInputFast = TextInputProps & {
    title: string,
    width?: string
}

const Input = ({title, width, ...props}: TextInputFast) => {
    return (
        <Container width={width}>
            <InputContainer width={width} {...props} />
            <DescInput>{title}</DescInput>
        </Container>
    )
}

export default Input;