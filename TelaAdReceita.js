import { ScrollView, Text, View, TextInput, Image, Alert, } from 'react-native';
import { Appbar, PaperProvider, Button, } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useEffect, useState } from 'react';
import urlconfig from "./config.json";
import Formulario from './FormularioReceita';

const AdicionarReceita = () => {
    
    const CriarReceita = async() => {
        const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                imagem: 'https://raw.githubusercontent.com/AlePereiras/Imagens_de_receitas/main/panqueca.jpeg',
                nomeReceita: receita,
                descricao: descricao,
                ingredientes: ingredientes,
                modoFazer: modoFazer
            })
        });
        if(response.status==201){
          return Alert.alert('SUA RECEITA FOI CRIADA')
        }
    }

    return (

        <PaperProvider>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Appbar.Header style={{ backgroundColor: '#F88B62' }}>
                        <Appbar.Content color="#33241F" title="Receita na Mão"
                            titleStyle={{
                                fontFamily: 'Roboto_500Medium',
                                fontSize: 20,
                                marginLeft: 8

                            }} />
                    </Appbar.Header>
                    <Formulario setarteste={descricao}></Formulario>
</View>
            </ScrollView>
        </PaperProvider>
    )

  
}

export default AdicionarReceita;

