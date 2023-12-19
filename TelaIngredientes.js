import { ActivityIndicator, Text, View, Image, ScrollView, } from "react-native";
import { useState, useEffect } from "react";
import urlconfig from "./config.json";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_300Light } from "@expo-google-fonts/roboto";

{/* GET DA RECEITA PUXANDO OS DADOS DELA */ }
function IngredienteReceita({ route }) {

    const { id } = route.params;
    const [receita, setReceita] = useState(null);
    const getReceita = async () => {
        try {
            const response = await fetch(`${urlconfig.urlProducao}/receitas/${id}`);
            const json = await response.json()
            console.log(json)
            setReceita(json);
            // setDescricao(json.descricao)
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        getReceita();
    }, []);

    function DadosReceita({ imagem, nomeReceita, descricao, ingredientes, modoFazer }) {

        let [fontsLoaded, fontError] = useFonts({
            Roboto_400Regular,
            Roboto_500Medium,
            Roboto_300Light,

        });

        if (!fontsLoaded && !fontError) {
            return null;
        }

        {/* STYLE */ }
        return (

            <ScrollView style={{}}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Roboto_400Regular',
                        color: '#33241F',
                        marginTop: 10,
                        width: 310,
                    }}>{nomeReceita}</Text>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{
                        width: 310,
                        height: 250,
                        borderRadius: 4,
                        marginTop: 20,
                    }} source={{ uri: imagem }} />
                </View>

                <View style={{ marginLeft: 30 }}>
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
                </View>
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
    ) : <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <ActivityIndicator size={50} />
    </View>
}

export default IngredienteReceita;


