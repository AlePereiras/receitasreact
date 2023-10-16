import React, { useEffect, useState } from "react";
import { Appbar, PaperProvider, Text, Avatar } from 'react-native-paper';
import { View, FlatList, Image, ActivityIndicator } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";


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
                    <Appbar.Content color="#FFEFC1" title="Receita na Mão" titleStyle={{ fontFamily: 'Roboto_400Regular', }} />
                </Appbar.Header>
            </View>

            <View >
                <Text style={{
                    fontSize: 20,
                    marginLeft: 16,
                    marginTop: 20,
                    color: '#F88B62',
                    fontFamily: 'Roboto_500Medium',

                }}>Destaques</Text>
            </View>
            <View>
                <Receita></Receita>
            </View>

        </PaperProvider>
    )
}

const Receita = () => {
    const [isLoading, setLoading] = useState(true);
    const [receitas, setReceitas] = useState([]);

    const getReceitas = async () => {
        try {
            const response = await fetch('https://typescript-alessandra.onrender.com/cats');
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

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={receitas}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.nome}, {item.raca}, {item.corOlhos}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};





// const Receita = ({ imagem, nome, favorito }) => {
//     return (

//         <View style={{ marginTop: 45, marginLeft: 45, }}>

//             <Image style={{ width: 315, height: 195, }} source={{ uri: imagem }}></Image>

//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{

//                     fontFamily: 'Roboto_500Medium',
//                     width: 231,
//                     height: 85,
//                     fontSize: 20,
//                     paddingTop: 10,
//                     paddingLeft: 10,
//                     backgroundColor: '#FDD6A9',
//                     borderBottomLeftRadius: 10,
//                     // borderBottomRightRadius: 10,
//                     color: '#F88B62',


//                 }}>{nome}  </Text>

//                 <Image style={{ width: 84, height: 85, backgroundColor: '#FDD6A9', borderBottomRightRadius: 10, }} source={{ uri: favorito }}></Image>

//             </View>

//         </View>
//     )
// };

// const RECEITAS = [
//     { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa', favorito: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/heart.png' },
//     { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa', favorito: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/heart.png' },
//     { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa', favorito: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/heart.png' },
//     { imagem: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/imagem1.png', nome: 'Macarrão á Bolonhesa', favorito: 'https://raw.githubusercontent.com/AlePereiras/receitasreact/master/img/heart.png' },
// ];

// const FlatListBasics = () => {
//     return (
//         <View>
//             <FlatList
//                 data={RECEITAS}
//                 renderItem={({ item }) =>
//                     <Receita imagem={item.imagem} nome={item.nome} favorito={item.favorito} />
//                 }
//             />
//         </View>
//     )
// };


export default Receitas;

