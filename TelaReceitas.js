import React from "react";
import { Appbar, PaperProvider, Text, } from 'react-native-paper';
import { View, FlatList } from "react-native";
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
                <Appbar.Header style={{ backgroundColor: '#F88B62', color: '#FFEFC1' }}>
                    <Appbar.Content title="Receita na Mão" />
                </Appbar.Header>
            </View>

            <View>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginLeft: 15,
                    marginTop: 20,
                    color: '#F88B62'

                }}>Destaques</Text>
            </View>
        </PaperProvider>

    )

    const RECEITAS = [
        { nome: Receita1, imagem: '' },
        { nome: Receita2, imagem: '' },
        { nome: Receita3, imagem: '' },
        { nome: Receita4, imagem: '' },
    ];


    const Receita = ({ nome, imagem }) => {
        return (
            <View>
                <Text>(nome.toUpperCase())</Text>
                <Text>{imagem}</Text>
            </View>

        );
    }

    const FlatListBasics = () => {
        return (
            <View>
                <FlatList
                    data={RECEITAS}
                    renderItem={({ item }) =>
                        <Receita nome={item.nome} imagem={item.imagem} />
                    }
                />
            </View>
        );
    };


}

export default Receitas;