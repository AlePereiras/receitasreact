import { FlatList, Image, Alert, Text, View, ScrollView, } from 'react-native';
import { ActivityIndicator, Button, IconButton, Card } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import urlconfig from "./config.json"

const Favoritos = () => {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,

    });

    const [isLoading, setLoading] = useState(false);
    const [favoritos, setFavoritos] = useState([]);
    const navigation = useNavigation();

    const getFavoritos = async () => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/favoritos`);
            const json = await response.json();
            setFavoritos(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFavoritos();
    }, [])

    if (!fontsLoaded && !fontError) {
        return null;
    }

    function CardReceita({ imagem, nomeReceita, navigation, id }) {

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

                        </View>

                    </Card>

                </View>
            </ScrollView>
        )
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <View style={{ paddingTop: 24 }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#33241F',
                                    fontFamily: 'Roboto_400Regular',
                                }}
                            >
                                Favoritos
                            </Text>
                        </View>
                    )}
                    data={favoritos}
                    keyExtractor={(id) => id.toString()}
                    renderItem={({ item }) => (
                        <CardReceita
                            key={index}
                            id={item.id}
                            imagem={item.imagem}
                            nomeReceita={item.nomeReceita}
                            navigation={navigation}
                        />
                    )}
                />
            )}
        </View>
    );
};


export default Favoritos;