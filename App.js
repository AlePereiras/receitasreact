import TelaReceitas from "./TelaReceitas";
import TelaIngredientes from './TelaIngredientes';
import TelaPesquisar from "./TelaPesquisar";
import TelaAdReceita from "./TelaAdReceita";
import PerfilDaTela from "./TelaPerfil";
import TelaCadastro from "./TelaCadastro";
import TelaFavoritos from "./TelaFavoritos";
import TelaEditarReceita from "./TelaEditarReceita";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() { //HomeStack
    return (
        <>
            <NavigationContainer>
                <StatusBar />
                <Stack.Navigator screenOptions={{

                }} initialRouteName="Cadastro">

                    <Stack.Screen name="Cadastro" component={TelaCadastro}
                        options={{
                            headerShown: false,

                        }} />

                    <Stack.Screen name="Tabs" component={TabPrincipal}
                        options={{
                            headerShown: false,

                        }} />


                    <Stack.Screen name="Receita" component={TelaIngredientes}
                        options={{
                            title: "Receita na Mão",
                            headerShadowVisible: false,
                            headerStyle: { backgroundColor: '#F78B63' },
                            headerTintColor: '#33241F'
                        }} />

                    <Stack.Screen name="EditarReceita" component={TelaEditarReceita}
                        options={{
                            title: "Receita na Mão",
                            headerShadowVisible: false,
                            headerStyle: { backgroundColor: '#F78B63' },
                            headerTintColor: '#33241F'
                        }} />

                    <Stack.Screen name="Favorito" component={TelaFavoritos}
                        options={{
                            title: "Receita na Mão",
                            headerShadowVisible: false,
                            headerStyle: { backgroundColor: '#F78B63' },
                            headerTintColor: '#33241F'
                        }} />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )


}

function TabPrincipal() {
    return (

        <Tab.Navigator screenOptions={{

            tabBarStyle: {
                backgroundColor: '#F78B63',
                height: 65,
                paddingBottom: 5,
                borderTopWidth: 2,
                borderTopColor: '#33241F',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8

            },
            tabBarActiveTintColor: '#33241F',
            tabBarInactiveTintColor: '#C48B76',
        }}>
            <Tab.Screen name="Inicío" component={TelaReceitas} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <MaterialIcons name="home-filled" size={35} color="#33241F" />
                    }
                    return <MaterialIcons name="home-filled" size={35} color="#C48B76" />
                },
            }} />

            <Tab.Screen name="Pesquisar" component={TelaPesquisar} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {

                    if (focused) {
                        return <FontAwesome name="search" size={35} color="#33241F" />
                    }
                    return <FontAwesome name="search" size={35} color="#C48B76" />
                },
            }} />

            <Tab.Screen name="Adicionar" component={TelaAdReceita} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <Feather name="plus-square" size={35} color="#33241F" />
                    }
                    return <Feather name="plus-square" size={35} color="#C48B76" />
                },
            }} />

            <Tab.Screen name="Perfil" component={PerfilDaTela} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <FontAwesome5 name="user-circle" size={35} color="#33241F" />
                    }
                    return <FontAwesome5 name="user-circle" size={35} color="#C48B76" />
                },
            }} />

        </Tab.Navigator>


    )
}

export default App;

