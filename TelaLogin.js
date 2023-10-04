import { Text, TextInput, View, TouchableOpacity, } from "react-native";
import React, { useState } from "react";
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Avatar } from 'react-native-paper';


const input = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    let [fontsLoaded, fontError] = useFonts({
        Roboto_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (

        <View style={{ flex: 1, backgroundColor: '#FFEFC1' }}>

            <Avatar.Image size={40} style={{ marginTop: 50, marginLeft: 25, backgroundColor: '#FFEFC1', }} source={{ uri: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/seta.png', }} />

            <View style={{ flex: 1, paddingTop: 200, }}>

                <Text style={{ marginLeft: 105, fontSize: 20, color: '#F88B62', fontFamily: 'Roboto_500Medium' }}>Cadastrar Conta</Text>
                <Text style={{ marginTop: 30, marginLeft: 75, color: '#F88B62', fontFamily: 'Roboto_500Medium', fontSize: 10, }}>Nome de Usuário:</Text>
                <TextInput onChangeText={(texto1) => setInput1(texto1)}
                    defaultValue={input1}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 6,
                        width: 250,
                        marginLeft: 75
                    }}

                />

                <Text style={{ marginTop: 10, marginLeft: 75, color: '#F88B62', fontFamily: 'Roboto_500Medium', fontSize: 10, }}>Email:</Text>
                <TextInput onChangeText={(texto2) => setInput2(texto2)}
                    defaultValue={input2}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 6,
                        width: 250,
                        marginLeft: 75
                    }}
                />

                <Text style={{ marginTop: 10, marginLeft: 75, color: '#F88B62', fontFamily: 'Roboto_500Medium', fontSize: 10, }}>Senha:</Text>
                <TextInput onChangeText={(texto3) => setInput3(texto3)}
                    defaultValue={input3}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 6,
                        width: 250,
                        marginLeft: 75
                    }}
                />

                {/* Bottom */}
                <View style={{
                    marginTop: 20,
                    width: 200,
                    marginLeft: 100,
                }}>
                    <TouchableOpacity style={{ backgroundColor: '#F88B62', borderRadius: 4 }}>
                        <Text style={{ textAlign: 'center', color: '#FFEFC1', paddingBottom: 10, paddingTop: 10, fontFamily: 'Roboto_500Medium' }}>Acessar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

export default input;