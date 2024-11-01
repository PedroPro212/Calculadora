import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from './components/home';

type RootStackParamList = {
    Calculadora: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Calculadora" component={Calculadora} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
});

export default App;