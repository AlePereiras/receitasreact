import { Text, View, TextInput, Pressable, } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, } from '@expo-google-fonts/roboto';
import { useNavigation } from "@react-navigation/native";


function LoginConta() {

    const navigation = useNavigation()

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,

    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (

        <View style={{
            backgroundColor: '#33241F',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,

        }}>

            <Text style={{
                fontSize: 20,
                color: '#F88B62',
                fontFamily: 'Roboto_500Medium',

            }}>Login

            </Text>

            <View style={{
                marginTop: 16,

            }}>

                <Text style={{
                    color: '#F88B62',
                    fontSize: 15,
                    fontFamily: 'Roboto_500Medium',

                }}>Nome de Usuário:</Text>

                <TextInput style={{
                    width: 250,
                    height: 34,
                    backgroundColor: '#C48B76',
                    borderRadius: 4,
                    paddingLeft: 10,
                    color: '#FFFF',

                }}></TextInput>

                <Text style={{
                    color: '#F88B62',
                    fontSize: 15,
                    fontFamily: 'Roboto_500Medium',
                    marginTop: 13,

                }}>Email:</Text>

                <TextInput style={{
                    width: 250,
                    height: 34,
                    backgroundColor: '#C48B76',
                    borderRadius: 4,
                    paddingLeft: 10,
                    color: '#FFFF'

                }}></TextInput>

                <Text style={{
                    color: '#F88B62',
                    fontSize: 15,
                    fontFamily: 'Roboto_500Medium',
                    marginTop: 13,

                }}>Senha:</Text>

                <TextInput secureTextEntry={true} style={{
                    width: 250,
                    height: 34,
                    backgroundColor: '#C48B76',
                    borderRadius: 4,
                    paddingLeft: 10,
                    color: '#FFFF',

                }}></TextInput>

            </View>

            <Pressable onPress={() => {
                navigation.navigate('Tabs')
            }} style={{
                backgroundColor: '#F88B62',
                width: 131,
                height: 38,
                marginTop: 26,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: '#33241F',
                    fontSize: 15,
                    fontFamily: 'Roboto_400Regular',

                }}>
                    Acessar
                </Text>
            </Pressable>

        </View>
    )
}


export default LoginConta;