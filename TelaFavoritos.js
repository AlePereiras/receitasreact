import React, { useEffect, useState } from "react";
import { Text, Card, IconButton } from 'react-native-paper';
import { View, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useNavigation, } from "@react-navigation/native";
import urlconfig from "./config.json"

{/* GET PARA PUXAR OS FAVORITOS */ }
const Favorito = () => {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,

    });

    const [isLoading, setLoading] = useState(false);
    const [favoritos, setFavoritos] = useState([])
    const navigation = useNavigation()

    const getReceitas = async () => {
        try {
            const response = await fetch(`${urlconfig.urlProducao}/favoritos`);
            // console.log(response)
            const json = await response.json();
            setFavoritos(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getReceitas();
    }, []);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    {/* CARD DA RECEITA */ }
    function CardReceita({ imagem, nomeReceita, navigation, id }) {

        const [isFavorito, setFavorito] = useState(false);

        const mudarFavorito = () => {
            setFavorito((prevFavorito) => !prevFavorito);
        };

        return (
            <ScrollView>
                <View>
                    <Card
                        onPress={() => navigation.navigate('FavIngredientes', { id: id })}
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
                                    icon={isFavorito ? 'cards-heart-outline' : 'cards-heart'}
                                    size={40}
                                    iconColor="#F78B63"
                                    onPress={() => {
                                        mudarFavorito();
                                    }}
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
                            }}>Favoritos
                            </Text></View>}

                    data={favoritos}
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

export default Favorito;







