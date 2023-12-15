import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Card, IconButton } from "react-native-paper";
import urlconfig from "./config.json";
import { useNavigation } from "@react-navigation/native";

{/* GET PUXANDO A RECEITA ATRAVÉS DO INGREDIENTE DELA */ }
const BarraPesquisar = () => {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold,
    });

    const [ingredientes, setIngredientes] = useState("");
    const [receitas, setReceitas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation()

    useEffect(() => {
        if (ingredientes) {
            setIsLoading(true);
            fetch(`${urlconfig.urlDesenvolvimento}/receitas?ingredientes=${ingredientes}`)
                .then((response) => response.json())
                .then((data) => {
                    setReceitas(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Erro ao buscar receitas:", error);
                    setIsLoading(false);
                });
        } else {
            setReceitas([]);
        }
    }, [ingredientes]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    {/* CARD DA RECEITA */ }
    function CardReceita({ imagem, nomeReceita, navigation, id }) {

        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Card onPress={() => navigation.navigate('Receita', { id: id })}
                    style={{
                        backgroundColor: '#33241F',
                        borderBottomLeftRadius: 4,
                        borderBottomEndRadius: 4,
                        marginVertical: 9,
                        width: 364,
                    }}>
                    <Card.Cover style={{
                        width: 364,
                        height: 260
                    }} source={{ uri: imagem }} />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5,
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{
                                color: '#F78B63',
                                fontSize: 19,
                                fontFamily: 'Roboto_400Regular',
                                width: 195,
                            }}>{nomeReceita}</Text>
                        </View>

                        <View>
                            <IconButton style={{}}
                                icon="cards-heart-outline"
                                size={40}
                                iconColor="#F78B63"
                            />
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
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
                }}>Explorar</Text>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFFFFF',
                    top: 21,
                    width: 300,
                    height: 60,
                    borderRadius: 4,
                }}>
                    <IconButton
                        icon="magnify"
                        size={35}
                        iconColor="#33241F"
                    />
                    <TextInput
                        placeholder="Digite um ingrediente..."
                        style={{
                            color: '#33241F',
                        }}
                        value={ingredientes}
                        onChangeText={(text) => setIngredientes(text)}
                    />
                </View>
            </View>

            {/* FLATLIST */}
            {isLoading ? (
                <Text style={{ color: '#33241F', fontSize: 20, fontFamily: 'Roboto_400Regular', }}>Carregando...</Text>
            ) : (
                <FlatList
                    data={receitas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <CardReceita navigation={navigation} id={item.id} key={index} imagem={item.imagem} nomeReceita={item.nomeReceita} />
                    )}
                />
            )}
        </View>
    );
}

export default BarraPesquisar;