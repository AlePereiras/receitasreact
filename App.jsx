// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from "./TelaLogin";
import TelaReceitas from "./TelaReceitas";
import TelaIngredientes from './TelaIngredientes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaPesquisar from "./TelaPesquisar";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(){ //HomeStack
    return (
        <>
        <StatusBar/>
            <Stack.Navigator initialRouteName="Receitas">

                <Stack.Screen name="Receitas" component={TelaReceitas} options={{headerShown: false}} />

                <Stack.Screen name="Receita" component={TelaIngredientes} options={{
                    title: "Receita na Mão", 
                    headerShadowVisible: false, 
                    headerStyle: {backgroundColor: '#F78B63', }, 
                    headerTintColor: '#33241F'}} />
                    
                    {/* <Stack.Screen name="Login" component={TelaLogin} options={{
                        title: '', 
                        headerShadowVisible: false, 
                        headerStyle: {backgroundColor: '#33241F', }, 
                    headerTintColor: '#33241F'}} /> */}

            </Stack.Navigator>
        
        
</>
    )


}

function TabPrincipal () {
    return(
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Inicío" component={App} options={{headerShown: false}}/>
            <Tab.Screen name="Pesquisar" component={TelaPesquisar} options={{headerShown: false}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}


export default TabPrincipal;