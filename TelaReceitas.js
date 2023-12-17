import React, { useEffect, useState } from "react";
import { Appbar, PaperProvider, Text, Card, IconButton } from 'react-native-paper';
import { View, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useNavigation, } from "@react-navigation/native";
import urlconfig from "./config.json"

const Receitas = () => {
    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,

    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <PaperProvider>
            <View>
                <Appbar.Header style={{ backgroundColor: '#F88B62', }}>
                    <Appbar.Content color="#33241F" title="Receita na Mão" titleStyle={{ fontFamily: 'Roboto_500Medium', fontSize: 20, marginLeft: 8 }} />
                </Appbar.Header>
            </View>

            <Receita></Receita>

        </PaperProvider>
    )
}

{/* GET DA RECEITA */ }
const Receita = () => {

    const [isLoading, setLoading] = useState(false);
    const [receitas, setReceitas] = useState([]);
    const [favoritos, setFavoritos] = useState([])
    const navigation = useNavigation()

    const getReceitas = async () => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas`);
            // console.log(response)
            const json = await response.json();
            setReceitas(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const mudarFavorito = (id) => {
        const isFavorito = favoritos.includes(id);
        if (isFavorito) {
            setFavoritos((prevFavoritos) => prevFavoritos.filter((favId) => favId !== id));
        } else {
            setFavoritos((prevFavoritos) => [...prevFavoritos, id]);
        }
    }

    // const toggleFavorito = (id) => {
    //     mudarFavorito(id); // Usa a função que já estava definida
    //     navigation.navigate('Favorito'); // Navega para a tela de Favoritos após marcar/desmarcar como favorito
    // };

    useEffect(() => {
        getReceitas();
    }, []);

    {/* CARD DA RECEITA */ }
    function CardReceita({ imagem, nomeReceita, navigation, id }) {

        const isFavorito = favoritos.includes(id);

        return (
            <ScrollView>
                <View>
                    <Card
                        onPress={() => navigation.navigate('Receita', { id: id })}
                        style={{
                            backgroundColor: '#33241F',
                            borderBottomLeftRadius: 4,
                            borderBottomEndRadius: 4,
                            marginVertical: 9,
                        }}>

                        <Card.Cover source={{ uri: imagem }}
                            style={{
                                width: 364,
                                height: 260,
                            }} />

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 5,
                            alignItems: 'center'
                        }}>

                            <View>
                                <Text
                                    style={{
                                        color: '#F78B63',
                                        fontSize: 19,
                                        fontFamily: 'Roboto_400Regular',
                                        width: 195,
                                    }} >{nomeReceita}</Text>
                            </View>

                            <View>
                                <IconButton
                                    icon={isFavorito ? 'cards-heart' : 'cards-heart-outline'}
                                    size={40}
                                    iconColor="#F78B63"
                                    onPress={() => mudarFavorito(id)}
                                />
                            </View>

                        </View>

                    </Card>

                </View>
            </ScrollView>
        )
    }

    {/* FLATLIST */ }
    return (
        <View style={{ flex: 1, paddingHorizontal: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (


                <FlatList showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() =>
                        <View style={{ paddingTop: 24 }}>
                            <Text style={{
                                fontSize: 20,
                                color: '#33241F',
                                fontFamily: 'Roboto_400Regular',
                            }}>Destaques
                            </Text></View>}

                    data={receitas}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <CardReceita
                            navigation={navigation}
                            id={item.id}
                            key={index}
                            imagem={item.imagem}
                            nomeReceita={item.nomeReceita} />
                    )} />
            )}
        </View>
    );
};

export default Receitas;







