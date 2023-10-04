import React from "react";
import { Appbar, PaperProvider, Text, } from 'react-native-paper';
import { View, FlatList, Image } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";


const Receitas = () => {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <PaperProvider>
            <View>
                <Appbar.Header style={{ backgroundColor: '#F88B62', }}>
                    <Appbar.Content color="#FFEFC1" title="Receita na Mão" titleStyle={{ fontFamily: 'Roboto_400Regular', }} />
                </Appbar.Header>
            </View>

            <View>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 16,
                    marginTop: 20,
                    color: '#F88B62',
                    fontFamily: 'Roboto_400Regular',

                }}>Destaques</Text>
            </View>
            <View>
                <FlatListBasics></FlatListBasics>
            </View>

        </PaperProvider>
    )
}
const Receita = ({ imagem, nome }) => {
    return (
        <View style={{ marginTop: 55, marginLeft: 45, }}>
            <Image style={{ width: 315, height: 195, }} source={{ uri: imagem }}></Image>
            <Text style={{ fontFamily: 'Roboto_400Regular', width: 315, height: 55, fontSize: 15, paddingTop: 12, paddingLeft: 5, backgroundColor: '#FDD6A9', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, color: '#F88B62' }}>{nome}</Text>
        </View>
    )
};

const RECEITAS = [
    { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa' },
    //  { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa' },
    // { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa' },
    // { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa' },
];

const FlatListBasics = () => {
    return (
        <View>
            <FlatList
                data={RECEITAS}
                renderItem={({ item }) =>
                    <Receita imagem={item.imagem} nome={item.nome} />
                }
            />
        </View>
    )
};

export default Receitas;

