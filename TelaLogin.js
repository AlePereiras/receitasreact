import { Text, TextInput, Button, View, } from "react-native";
import React, { useState } from "react";


const input = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [cliques, setCliques] = useState(0);

    return (
        <View style={{ marginTop: 320, }}>
            <Text style={{ marginLeft: 103, fontWeight: 'bold', fontSize: 20,}}>Cadastrar Usuário</Text>

            <TextInput onChangeText={(texto1) => setInput1(texto1)}
                defaultValue={input1} placeholder="Coloque seu nome..."
                style={{
                    marginTop: 30,
                    borderWidth: 1,
                    borderColor: '#000',
                    width: 200,
                    marginLeft: 100

                }}

            />

            <TextInput onChangeText={(texto2) => setInput2(texto2)}
                defaultValue={input2} placeholder="Coloque seu Email..."
                style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: '#000',
                    width: 200,
                    marginLeft: 100
                }}
            />

            <TextInput onChangeText={(texto3) => setInput3(texto3)}
                defaultValue={input3} placeholder="Coloque sua Senha..."
                style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: '#000',
                    width: 200,
                    marginLeft: 100
                }}
            />

            <View style={{
                marginTop: 20, 
                width: 200,
                marginLeft: 100,
                

                }}>
                <Button title="Cadastrar" onPress={() => {
                    setCliques();
                }}
                    />

            </View>

        </View>
    );
}

export default input;