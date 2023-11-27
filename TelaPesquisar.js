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
            height: 140,
            width: 409, 
            alignItems: 'center',
            borderBottomColor: '#33241F',
            borderBottomWidth: 2,
            borderBottomEndRadius: 4,
            borderBottomLeftRadius: 4,
            }}>

            <Text style={{
                color: '#33241F', 
                fontSize: 20, 
                fontFamily: 'Roboto_700Bold', 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 10
                
                }}>Explorar</Text>
            
            <View style={{
                flexDirection: 'row', 
                backgroundColor: '#FFFFFF', 
                top: 21,  
                width: 297, 
                height: 60, 
                borderRadius: 4  
            }}>

                <IconButton
                    icon="magnify"
                    size={35}
                    iconColor="#33241F"
                    style={{
                    
                    }}
                />

       <TextInput placeholder="Digite um ingrediente..." 
       style={{
        color: '#33241F', 
        }}/>

            </View>
       </View>

     

    );
};

export default Pesquisar;