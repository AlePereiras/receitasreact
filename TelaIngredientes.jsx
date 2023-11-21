import { ActivityIndicator, Text, View, Image } from "react-native";
import { } from "react-native-paper";
import { useState, useEffect } from "react";
import urlconfig from "./config.json";
import { useFonts, Roboto_400Regular, Roboto_500Medium} from "@expo-google-fonts/roboto";
// import { useRoute } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
// import Receitas from "./TelaReceitas";

function IngredienteReceita({route}) {
    const { id } = route.params ;
    const [receita, setReceita] = useState(null);
// console.log(receitas)
      const getReceita = async () => {

        // let [fontsLoaded, fontError] = useFonts({
        //     Roboto_400Regular,
        //     Roboto_500Medium,
           
        // });
    
        // if (!fontsLoaded && !fontError) {
        //     return null;
        // }

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

        return  <View style={{flex:1, }}>
        <Image style={{width:50, height:50}} source={{uri: imagem }}/>
        <Text>{nomeReceita}</Text>
        <Text>{descricao}</Text>
        <Text>{ingredientes}</Text>
        <Text>{modoFazer}</Text>
    </View>
      
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