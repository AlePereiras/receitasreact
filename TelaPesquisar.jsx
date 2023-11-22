import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { IconButton } from "react-native-paper";


function Pesquisar(){


    let [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold,
       
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return(
        <View style={{
            backgroundColor: '#F78B63', 
            height: 200, 
            alignItems: 'center'

            }}>

            <Text style={{
                color: '#33241F', 
                fontSize: 20, 
                fontFamily: 'Roboto_700Bold', 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 10
                
                }}>Explorar</Text>
            
            <View>

                <IconButton
                    icon="magnify"
                    size={35}
                    iconColor="#33241F"
                />

       <TextInput placeholder="Digite um ingrediente..." 
       
       style={{
        backgroundColor: '#FFFFFF', 
        color: '#33241F', 
        top: 21, 
        width: 297, 
        height: 47, 
        borderRadius: 4 
        
        }}/>

            </View>
       </View>

     

    );
};

export default Pesquisar;