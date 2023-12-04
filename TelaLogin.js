import { Text, View, TextInput, Pressable, } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, } from '@expo-google-fonts/roboto';

function LoginConta () {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,

    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return(

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

                <TextInput style={{
                    width: 250,
                    height: 34,
                    backgroundColor: '#C48B76',
                    borderRadius: 4,
                    paddingLeft: 10,
                    color: '#FFFF',
                    
                }}></TextInput>

            </View>

            <Pressable style={{
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

            <View style={{
                borderWidth: 1,
                borderColor: '#C48B76',
                marginTop: 20,
                width: 340,
                height: 68,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-around',

            }}>

                <Text style={{
                    fontSize: 15,
                    color: '#F88B62',
                    marginTop: 20,

                }}>Ainda não tem conta?</Text>

                <Pressable style={{
                    backgroundColor: '#F88B62',
                    width: 120,
                    height: 47,
                    borderRadius: 4,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#33241F',
                        fontSize: 15,
                        fontFamily: 'Roboto_400Regular',

                    }}>
                        Cadastre-se
                    </Text>
                </Pressable>

            </View>

        </View>
    )
}


export default LoginConta;