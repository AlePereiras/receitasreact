import { ActivityIndicator, Text, View, Image } from "react-native";
import { } from "react-native-paper";
import { useState, useEffect } from "react";
import urlconfig from "./config.json";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_300Light} from "@expo-google-fonts/roboto";
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
        
        <View style={{flex:1, top: 20, left: 30, }}>
        
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_400Regular', 
            fontWeight: 400, 
            color: '#33241F'
            
            }}>{nomeReceita}</Text>
        
        <Image style={{
            width:310, 
            height:250, 
            top: 26, 
            left: 20, 
            borderRadius: 4,
            
            }} source={{uri: imagem }}/>
        
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_500Medium', 
            top: 30, 
            color: '#33241F'
            
            }}>Descrição:</Text>
        
        <Text style={{
            top: 30, 
            fontSize: 16, 
            color: '#33241F', 
            fontFamily: 'Roboto_300Light', 
            
            }}>{descricao}</Text>
        
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_500Medium', 
            top: 30, 
            color: '#33241F'
            
            }}>Ingredientes:</Text>
        
        <Text style={{
            top: 30, 
            fontSize: 16, 
            color: '#33241F', 
            fontFamily: 'Roboto_300Light',
            
            }}>{ingredientes}</Text>
        
        <Text style={{
            fontSize: 16, 
            fontFamily: 'Roboto_500Medium', 
            top: 30, 
            color: '#33241F'
            
            }}>Modo de fazer:</Text>
        
        <Text style={{
            top: 30, 
            fontSize: 16, 
            color: '#33241F', 
            fontFamily: 'Roboto_300Light',
            
            }}>{modoFazer}</Text>
    
    </View>
      )
    } 

    return receita ? (
           <DadosReceita imagem={receita.imagem} descricao={receita.descricao} ingredientes={receita.ingredientes} modoFazer={receita.modoFazer} nomeReceita={receita.nomeReceita}/>
        ):<View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
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