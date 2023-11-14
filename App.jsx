import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from "./TelaLogin";
import TelaReceitas from "./TelaReceitas";
import TelaIngredientes from './TelaIngredientes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Receitas">
                <Stack.Screen name="Receitas" component={TelaReceitas} options={{headerShown: false}} />
                <Stack.Screen name="Receita" component={TelaIngredientes} options={{
                    title: "", 
                    headerShadowVisible: false, 
                    headerStyle: {backgroundColor: '#33241F',}, 
                    headerTintColor: '#F78B63'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;