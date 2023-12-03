import TelaCadastramento from "./TelaCadastramento";
import TelaReceitas from "./TelaReceitas";
import TelaIngredientes from './TelaIngredientes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaPesquisar from "./TelaPesquisar";
import { StatusBar, } from "react-native";
import TelaAdReceita from "./TelaAdReceita";
import PerfilDaTela from "./TelaPerfil";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() { //HomeStack
    return (
        <>
            <StatusBar />
            <Stack.Navigator screenOptions={{

            }} initialRouteName="Receitas">

                <Stack.Screen name="Receitas" component={TelaReceitas} options={{ headerShown: false }} />

                <Stack.Screen name="Receita" component={TelaIngredientes} options={{
                    headerShown: false
                    // title: "Receita na Mão",
                    // headerShadowVisible: false,
                    // headerStyle: { backgroundColor: '#F78B63', },
                    // headerTintColor: '#33241F',

                }} />

            </Stack.Navigator>

        </>
    )


}

function TabPrincipal() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarStyle: { backgroundColor: '#F78B63', height: 65, paddingBottom: 5, },
                tabBarActiveTintColor: '#33241F',
                tabBarInactiveTintColor: '#C48B76',
            }}>
                <Tab.Screen name="Inicío" component={App} options={{
                    headerShown: false, tabBarIcon: ({ }) => (
                        <MaterialIcons name="home-filled" size={35} color="#33241F" />
                    ),
                }} />

                <Tab.Screen name="Pesquisar" component={TelaPesquisar} options={{
                    headerShown: false, tabBarIcon: ({ }) => (
                        <FontAwesome name="search" size={35} color="#33241F" />
                    ),
                }} />

                <Tab.Screen name="Adicionar" component={TelaAdReceita} options={{
                    headerShown: false, tabBarIcon: ({ }) => (
                        <Feather name="plus-square" size={35} color="#33241F" />
                    ),
                }} />

                <Tab.Screen name="Perfil" component={PerfilDaTela} options={{
                    headerShown: false, tabBarIcon: ({ }) => (
                        <FontAwesome5 name="user-circle" size={35} color="#33241F" />
                    ),
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TelaCadastramento;

// export default TabPrincipal;

{/* <Stack.Screen name="Login" component={TelaLogin} options={{
                        title: '', 
                        headerShadowVisible: false, 
                        headerStyle: {backgroundColor: '#33241F', }, 
                    headerTintColor: '#33241F'}} /> */}