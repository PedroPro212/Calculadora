import { View, Text, StyleSheet } from "react-native";

import styles from "../style/calculadora.style";
import Input from "../../../shared/components/inputs/Input";
import ButtomCustom from "../../../shared/components/button/Button";

const Calculadora = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora do conhecimento</Text>

            <View style={styles.rowsOperacoes}>
                <Input title="n1" />
                <Input title="operacao" />
                <Input title="n2" />
            </View>
            <Text style={styles.igual}>=</Text>
            <Input title="result" width="95%" />


            <View style={{position: 'absolute', bottom: 15}}>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="7" value={7} />
                    <ButtomCustom title="8" value={8} />
                    <ButtomCustom title="9" value={9} />
                    <ButtomCustom title="/" backgroundColor="#D9830A" />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="4" value={4} />
                    <ButtomCustom title="5" value={5} />
                    <ButtomCustom title="6" value={6} />
                    <ButtomCustom title="*" backgroundColor="#D9830A" />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="1" value={1} />
                    <ButtomCustom title="2" value={2} />
                    <ButtomCustom title="3" value={3} />
                    <ButtomCustom title="-" backgroundColor="#D9830A" />
                </View>
                <View style={styles.rowsTeclas}>
                    <ButtomCustom title="0" value={0} />
                    <ButtomCustom title="Ver lógica" fontSize="20px" />
                    <ButtomCustom title="Ver código" fontSize="20px" />
                    <ButtomCustom title="+" backgroundColor="#D9830A" />
                </View>
            </View>
        </View>
    )
}

export default Calculadora;