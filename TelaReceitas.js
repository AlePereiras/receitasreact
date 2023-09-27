import React from "react";
import { Appbar, PaperProvider, Text, } from 'react-native-paper';
import { View, FlatList } from "react-native";


const Receitas = () => {
    return (
        <PaperProvider>
            <View>
                <Appbar.Header style={{ backgroundColor: '#F88B62' }}>
                    <Appbar.Content title="Receita na Mão" />
                </Appbar.Header>
            </View>

            <View>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginLeft: 20,
                    marginTop: 20,

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