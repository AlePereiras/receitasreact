// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
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
                    title: "Receita na Mão", 
                    headerShadowVisible: false, 
                    headerStyle: {backgroundColor: '#F78B63', }, 
                    headerTintColor: '#33241F'}} />
                    
                    <Stack.Screen name="Login" component={TelaLogin} options={{
                            title: '', 
                            headerShadowVisible: false, 
                            headerStyle: {backgroundColor: '#33241F', }, 
                            headerTintColor: '#33241F'}} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}


export default App;