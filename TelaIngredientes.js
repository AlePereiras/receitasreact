import { ActivityIndicator, Text, View, Image, ScrollView, SafeAreaView, } from "react-native";
import { IconButton, List } from "react-native-paper";
import { useState, useEffect } from "react";
import urlconfig from "./config.json";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_300Light} from "@expo-google-fonts/roboto";
import { SafeAreaViewBase } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
// import Receitas from "./TelaReceitas";

function IngredienteReceita({route}) {
    
    const { id } = route.params ;
    const [receita, setReceita] = useState(null);
    // console.log(receitas)
    const getReceita = async () => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas/${id}`);
            const json = await response.json()
            console.log(json)
            setReceita(json);
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        getReceita();
    }, []);
    
    function DadosReceita({imagem, nomeReceita, descricao, ingredientes, modoFazer}){

        let [fontsLoaded, fontError] = useFonts({
            Roboto_400Regular,
            Roboto_500Medium,
            Roboto_300Light,
           
        });
    
        if (!fontsLoaded && !fontError) {
            return null;
        }

        return ( 
        
        <ScrollView style={{marginLeft: 30}}>
        
        <View style={{flexDirection: 'row'}}>
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_400Regular', 
            color: '#33241F',
            marginTop: 10,
            width: 280,
            }}>{nomeReceita}</Text>

        <IconButton 
            icon="cards-heart-outline"
            size={40}
            iconColor="#33241F"
        />    
        </View>

        <Image style={{
            width:310, 
            height:250, 
            left: 20, 
            borderRadius: 4,
            marginTop: 20,
            }} source={{uri: imagem }}/>
        
        <Text style={{
            marginTop: 30,
            fontSize: 16, 
            fontFamily: 'Roboto_500Medium', 
            color: '#33241F'
            
            }}>Descrição:</Text>
        

        <Text style={{
            fontSize: 16, 
            color: '#33241F', 
            fontFamily: 'Roboto_300Light', 
            width: 330,
            
        }}>{descricao}</Text>
        
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_500Medium', 
            color: '#33241F',
            marginTop: 10,
        }}>Ingredientes:</Text>
        
        <Text style={{
            fontSize: 16, 
            color: '#33241F', 
            fontFamily: 'Roboto_300Light',
            width: 330,
        }}>{ingredientes}</Text>
        
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_500Medium', 
            color: '#33241F',
            marginTop: 10,
        }}>Modo de fazer:</Text>
        
        <Text style={{
            fontSize: 16, 
            color: '#33241F', 
            fontFamily: 'Roboto_300Light',
            width: 330,
        }}>{modoFazer}</Text>
    
    </ScrollView>
   
      )
    } 

    return receita ? (
        <DadosReceita 
        imagem={receita.imagem} 
        descricao={receita.descricao} 
        ingredientes={receita.ingredientes} 
        modoFazer={receita.modoFazer} 
        nomeReceita={receita.nomeReceita}
        />
        ):<View style={{
            flex:1, 
            justifyContent:'center', 
            alignItems:'center'
            }}> 
            <ActivityIndicator size={50}/> 
            </View>
}

export default IngredienteReceita;


// const IngredienteReceita = ({route}) => {

    // const { id } = route.params.id;
    
    //     return(
        //         <View  style={{flex:1, }}>
        //         <Text>Tudo da Receita</Text>
        //         <Image>{JSON.stringify(imagem)}</Image>
        //         </View>
        //     )
        // }

        {/* <List.Item 
        title="Descrição:"
        titleStyle={{
            fontFamily: 'Roboto_500Medium', 
            color: '#33241F', 
            top: 30,
            fontSize: 16,
        }}
        description={descricao}
        descriptionStyle={{
            top: 30, 
            fontFamily: 'Roboto_300Light', 
            color: '#33241F',
            fontSize: 16,
        }} 
        /> */}