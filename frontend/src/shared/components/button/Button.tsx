import { TouchableOpacityProps } from "react-native";
import { ButtomContainer, TextButtom } from "./button.style";

type ButtomFast = TouchableOpacityProps & {
    title: string,
    fontSize?: string,
    backgroundColor?: string,
    value?: number
}

const ButtomCustom = ({backgroundColor, title, fontSize, value, ...props}: ButtomFast) => {
    const handlePress = () => {
        console.log(value)
    }
    
    return (
        <ButtomContainer backgroundColor={backgroundColor} onPress={handlePress} {...props}>
            <TextButtom fontSize={fontSize}>{title}</TextButtom>
        </ButtomContainer>
    )
}

export default ButtomCustom;