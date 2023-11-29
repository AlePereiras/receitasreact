import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

function PerfilDaTela (){

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,

    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

return(

    <ScrollView>
        <View style={{
            flexDirection: 'row', 
            backgroundColor: '#F88B62', 
            justifyContent: 'space-around',
            
            }}>

            <IconButton  
            icon="arrow-left-thin-circle-outline"
            size={40}
            iconColor="#33241F">
            </IconButton>

        <Text style={{
            fontSize: 20, 
            color: '#33241F', 
            marginTop: 15, 
            fontFamily: 'Roboto_700Bold'
            
            }}>Receita na Mão</Text>

            <IconButton  
            icon="dots-vertical"
            size={40}
            iconColor="#33241F">
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
                uri: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-4/194/301194/dia9bUQT/0157b2206df740ccaaf4075c1d368ed9'}}>

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

        <View style={{flexDirection: 'row', justifyContent: 'center',
                alignItems: 'center',}}>
           <Pressable>
            <Text style={{
                borderBottomColor: '#33241F', 
                borderWidth: 1,
                fontSize: 16,
                fontFamily: 'Roboto_500Medium',
                color: '#33241F',
                width: 205, 
                height: 40,
                paddingLeft: 30,
                paddingTop: 5
                }}>Suas Receitas</Text>
           </Pressable>

           <Pressable>
            <Text style={{
                borderColor: '#33241F', 
                borderWidth: 1,
                fontSize: 16,
                fontFamily: 'Roboto_500Medium',
                color: '#33241F',
                width: 205, 
                height: 40,
                paddingLeft: 60,
                paddingTop: 5
                }}>Favoritos</Text>
           </Pressable>

        </View>
    
    </ScrollView>
)

}

{/* <View style ={{}}>
            <TouchableOpacity> 
                <Image />
            </TouchableOpacity>
    </View> */}

export default PerfilDaTela;