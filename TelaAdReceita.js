import { ScrollView, Text, View, Pressable, TextInput, Image, } from 'react-native';
import { Appbar, PaperProvider, Button, } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

function AdicionarReceita() {

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

            <ScrollView>

                <View style={{borderWidth: 2, borderColor: '#858585', width: 252, height: 156, marginLeft: 80, marginTop: 44}}>
                  <Image></Image>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30}}>

                    <Button mode="contained" buttonColor='#F88B62' textColor='#33241F' style={{ borderRadius: 6, }} >
                        Escolher uma imagem
                    </Button>

                </View>

                <View style={{ position: 'relative', alignItems: 'center' }}>

                    <Text style={{
                        color: '#33241F',
                        fontSize: 14,
                        fontFamily: 'Roboto_400Regular',
                        // marginLeft: 46,
                        marginTop: 35,
                    }}>Nome da receita*</Text>

                    <TextInput style={{
                        width: 290,
                        height: 35,
                        // backgroundColor: '#FFFFF',
                        borderColor: '#F88B62',
                        borderWidth: 1,
                        borderRadius: 6,
                        // marginLeft: 46,
                        marginTop: 10,
                        fontSize: 12,
                        fontFamily: 'Roboto_400Regular',
                        paddingLeft: 10
                    }}></TextInput>

                    <Text style={{
                        color: '#33241F',
                        fontSize: 14,
                        fontFamily: 'Roboto_400Regular',
                        // marginLeft: 46,
                        marginTop: 10,
                    }}>Descrição*</Text>

                    <TextInput style={{
                        width: 290,
                        height: 35,
                        // backgroundColor: '#FFFFF',
                        borderColor: '#F88B62',
                        borderWidth: 1,
                        borderRadius: 6,
                        // marginLeft: 46,
                        marginTop: 10,
                        fontSize: 12,
                        fontFamily: 'Roboto_400Regular',
                        paddingLeft: 10
                    }}></TextInput>

                    <Text style={{
                        color: '#33241F',
                        fontSize: 14,
                        fontFamily: 'Roboto_400Regular',
                        // marginLeft: 46,
                        marginTop: 10,
                    }}>Ingredientes*</Text>

                    <TextInput placeholder='Insira um ingrediente por linha' style={{
                        width: 290,
                        height: 35,
                        // backgroundColor: '#FFFFF',
                        borderColor: '#F88B62',
                        borderWidth: 1,
                        borderRadius: 6,
                        // marginLeft: 5,
                        marginTop: 10,
                        fontSize: 12,
                        fontFamily: 'Roboto_400Regular',
                        paddingLeft: 10
                    }}></TextInput>

                    <Text style={{
                        color: '#33241F',
                        fontSize: 14,
                        fontFamily: 'Roboto_400Regular',
                        // marginLeft: 46,
                        marginTop: 10,
                    }}>Modo de Fazer*</Text>

                    <TextInput style={{
                        width: 290,
                        height: 35,
                        // backgroundColor: '#FFFFF',
                        borderColor: '#F88B62',
                        borderWidth: 1,
                        borderRadius: 6,
                        // marginLeft: 46,
                        marginTop: 10,
                        fontSize: 12,
                        fontFamily: 'Roboto_400Regular',
                        paddingLeft: 10
                    }}></TextInput>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>

                    <Button mode="contained" buttonColor='#F88B62' textColor='#33241F' style={{ borderRadius: 6, }} >
                        Adicionar
                    </Button>

                </View>

            </ScrollView>
        </PaperProvider>
    )


}

export default AdicionarReceita;