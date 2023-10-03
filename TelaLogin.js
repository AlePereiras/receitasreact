import { Text, TextInput, Button, View, TouchableOpacity, } from "react-native";
import React, { useState } from "react";


const input = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [cliques, setCliques] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFEFC1' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <Text style={{ marginLeft: 105, fontWeight: 'bold', fontSize: 20, }}>Cadastrar Conta</Text>
                <Text style={{ marginTop: 30, marginLeft: 75 }}>Nome de Usuário:</Text>
                <TextInput onChangeText={(texto1) => setInput1(texto1)}
                    defaultValue={input1}
                    style={{

                        borderWidth: 1,
                        borderColor: '#000',
                        width: 250,
                        marginLeft: 75

                    }}

                />

                <Text style={{ marginTop: 10, marginLeft: 75, }}>Email:</Text>
                <TextInput onChangeText={(texto2) => setInput2(texto2)}
                    defaultValue={input2}
                    style={{

                        borderWidth: 1,
                        borderColor: '#000',
                        width: 250,
                        marginLeft: 75
                    }}
                />

                <Text style={{ marginTop: 10, marginLeft: 75, }}>Senha:</Text>
                <TextInput onChangeText={(texto3) => setInput3(texto3)}
                    defaultValue={input3}
                    style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        width: 250,
                        marginLeft: 75
                    }}
                />

                <View style={{
                    marginTop: 20,
                    width: 200,
                    marginLeft: 100,


                }}>
                    {/* <Button title="Acessar" onPress={() => {
                        setCliques();
                    }}
                    /> */}
                    <TouchableOpacity style={{ backgroundColor: 'green', borderWidth: 1, borderColor: 'black' }}>
                        <Text>Acessar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
}

export default input;