import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from "./TelaLogin";
import TelaReceitas from "./TelaReceitas";
import TelaIngredientes from './TelaIngredientes';
import Receitas from './TelaReceitas';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Primeira() {
    return (
        <TelaReceitas></TelaReceitas>
    )
}

function Segunda() {
    return (
        <TelaIngredientes></TelaIngredientes>
    )
}



const Stack = createNativeStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Primeira">
                <Stack.Screen name="Primeiras" component={Primeira} options={{headerShown: false}} />
                <Stack.Screen name="Segundas" component={Segunda} options={{title: "", headerShadowVisible: false, headerStyle: {backgroundColor: '#33241F',}, headerTintColor: '#F78B63'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;