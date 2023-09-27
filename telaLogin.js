import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import * as React from 'react-native-paper';

const input = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [cliques, setCliques] = useState(0);

    return (
        <View style={{marginTop: 340, }}>
            <Text style={{marginLeft: 140,}}>Cadastrar Usuário</Text>

            <TextInput onChangeText={(texto1) => setInput1(texto1)}
                defaultValue={input1} placeholder="Coloque seu nome..."
                style={{
                    marginTop: 10,
                }}
            />

            <TextInput onChangeText={(texto2) => setInput2(texto2)}
                defaultValue={input2} placeholder="Coloque seu Email..."
                style={{
                    marginTop: 10,
                }}
            />

            <TextInput onChangeText={(texto3) => setInput3(texto3)}
                defaultValue={input3} placeholder="Coloque sua Senha..."
                style={{
                    marginTop: 10,
                }}
            />

            <Button title="Cadastrar" onPress={() => {
                setCliques();
            }}
            />

        </View>
    );
}

export default input;