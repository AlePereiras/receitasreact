import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { IconButton } from "react-native-paper";
import { ScrollView } from "react-native";


function Pesquisar() {


    let [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold,

    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ScrollView>
            <View style={{
                backgroundColor: '#F78B63',
                height: 140,
                alignItems: 'center',
                borderBottomColor: '#33241F',
                borderBottomWidth: 2,
                borderBottomEndRadius: 4,
                borderBottomLeftRadius: 4,
                position: 'relative'
            }}>

                <Text style={{
                    color: '#33241F',
                    fontSize: 20,
                    fontFamily: 'Roboto_700Bold',
                    top: 10,
                    // marginLeft: 155,
                }}>Explorar</Text>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFFFFF',
                    top: 21,
                    width: 300,
                    height: 60,
                    borderRadius: 4,
                    // marginLeft: 47,
                }}>

                    <IconButton
                        icon="magnify"
                        size={35}
                        iconColor="#33241F"
                    />

                    <TextInput placeholder="Digite um ingrediente..."
                        style={{
                            color: '#33241F',
                        }} />

                </View>
            </View>
        </ScrollView>


    );
};

export default Pesquisar;