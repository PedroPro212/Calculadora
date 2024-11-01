import { TouchableOpacityProps } from "react-native";
import { ButtomContainer, TextButtom } from "./button.style";

type ButtomFast = TouchableOpacityProps & {
    title: string,
    fontSize?: string,
    backgroundColor?: string
}

const ButtomCustom = ({backgroundColor, title, fontSize, ...props}: ButtomFast) => {
    return (
        <ButtomContainer backgroundColor={backgroundColor} {...props}>
            <TextButtom fontSize={fontSize}>{title}</TextButtom>
        </ButtomContainer>
    )
}

export default ButtomCustom;