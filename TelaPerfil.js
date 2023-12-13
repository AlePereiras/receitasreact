import { FlatList, Image, Alert, Text, View, } from 'react-native';
import { ActivityIndicator, Button, IconButton, Card } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect, useState } from 'react';
import urlconfig from "./config.json"
import { useNavigation } from '@react-navigation/native';


const PuxarReceita = () => {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,

    });

    const [receitas, setReceitas] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigation()

    const getReceitas = async () => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas`);
            const json = await response.json();
            setReceitas(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getReceitas();
    }, []);

    const HandleDeleteReceita = async (id) => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir a receita');
            }

            getReceitas();
        } catch (error) {
            console.error(error);
        }
    }

    if (!fontsLoaded && !fontError) {
        return null;
    }


    function PerfilDaTela({ imagem, nomeReceita, navigation, id, onDelete }) {

        const HandleDelete = () => {
            Alert.alert(
                'Excluir Receita',
                'Tem certeza de que deseja excluir está receita?',
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                    },
                    {
                        text: 'Excluir',
                        onPress: async () => {
                            await onDelete(id);
                            Alert.alert('RECEITA EXCLUIDA COM SUCESSO')
                        },
                    },
                ],
                { cancelable: false }
            );
        };

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

                        <View style={{flexDirection:'row'}}>

                        <IconButton style={{marginLeft:30}}
                                icon="pencil-outline"
                                size={40}
                                iconColor="#F78B63"
                                
                            />
                            
                            <IconButton style={{}}
                                icon="trash-can-outline"
                                size={40}
                                iconColor="#F78B63"
                                onPress={HandleDelete}
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
                flexDirection: 'row',
                backgroundColor: '#F88B62',
                justifyContent: 'space-around'

            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#33241F',
                    marginTop: 15,
                    fontFamily: 'Roboto_700Bold',
                    paddingLeft: 99,

                }}>Receita na Mão</Text>

                <IconButton
                    icon="dots-vertical"
                    size={40}
                    iconColor="#33241F"
                >
                </IconButton>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F88B62',
                height: 90,
                flexDirection: 'row',


            }}>

                <Image style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                    borderColor: '#C48B76',
                    borderWidth: 2,
                    marginLeft: 30,
                    position: 'absolute',
                }} source={{
                    uri: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-4/194/301194/dia9bUQT/0157b2206df740ccaaf4075c1d368ed9'
                }}>

                </Image>

                <IconButton
                    icon="camera-outline"
                    size={20}
                    iconColor="#33241F" style={{
                        borderColor: '#C48B76',
                        borderWidth: 2,
                        marginTop: 55,
                        marginLeft: 90
                    }}>
                </IconButton>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F88B62',
                height: 50,
                flexDirection: 'row'
            }}>

                <Text style={{
                    fontSize: 15,
                    fontFamily: 'Roboto_400Regular',
                    color: "#33241F",
                    marginLeft: 20,
                }}>Fulano de Tal

                </Text>

                <IconButton
                    icon="pencil-outline"
                    size={14}
                    iconColor="#33241F" style={{
                        borderColor: '#C48B76',
                        borderWidth: 2,

                    }}>
                </IconButton>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>

                <Button mode="text" textColor='#33241F' contentStyle={{
                    borderWidth: 1,
                    borderTopColor: '#FFFF',
                    borderBottomColor: '#33241F',
                    borderRightColor: '#33241F',

                }} style={{
                    borderRadius: 0,
                    width: 205,
                }}>Suas Receitas</Button>

                <Button mode="text" textColor='#33241F' contentStyle={{
                    borderWidth: 1,
                    borderTopColor: '#FFFF',
                    borderBottomColor: '#33241F',
                    borderRightColor: '#33241F',

                }} style={{
                    borderRadius: 0,
                    width: 205
                }}>Favoritos</Button>
            </View>

            {isLoading ? (
                <ActivityIndicator />
            ) : (

                <FlatList showsVerticalScrollIndicator={false}
                    data={receitas}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <PerfilDaTela navigation={navigation} id={item.id} key={index} imagem={item.imagem} nomeReceita={item.nomeReceita} onDelete={HandleDeleteReceita} />
                    )}
                />
            )}
        </View>
    );
};

export default PuxarReceita;

