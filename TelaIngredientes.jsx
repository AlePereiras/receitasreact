import { Text, View } from "react-native";
import { } from "react-native-paper";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Receitas from "./TelaReceitas";


function IngredienteReceita({route}) {
    const { id } = route.params ;
    const [receita, setReceita] = useState({});

      const getReceita = async () => {
        try {
            const response = await fetch(`https://receitas-pweb2.onrender.com/receitas/{id}`);
            const json = await response.json();
            setReceita(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getReceita();
    }, []);
    

    return(
        <View style={{flex:1, }}>
            <Text>{id}</Text>
            <Text>{receita.imagem}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
    )
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