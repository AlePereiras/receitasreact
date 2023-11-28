import { ScrollView, Text, View, Button, Pressable, TextInput, } from 'react-native';
import { Appbar, PaperProvider, } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium} from "@expo-google-fonts/roboto";

function AdicionarReceita (){

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
       
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

return(
    <PaperProvider>
    <View>
        <Appbar.Header style={{ backgroundColor: '#F88B62', }}>
            <Appbar.Content color="#33241F" title="Receita na Mão" titleStyle={{ fontFamily: 'Roboto_500Medium', fontSize: 20, marginLeft: 8 }} />
        </Appbar.Header>
    </View>

    <ScrollView>

        <View style={{alignItems:'center', justifyContent: 'center'}}>

        <Pressable style={{
            backgroundColor: '#F88B62', 
            width: 240, 
            height: 44,
            borderRadius: 6,
            marginTop: 200,
            }}>
            <Text style={{
                color: '#33241F',
                marginLeft: 15,
                marginTop: 6,
                fontSize: 16,
                fontFamily: 'Roboto_400Regular',
                }}>Escolher uma imagem</Text>
        </Pressable>
        </View>

        <View>

        <Text style={{
            color: '#33241F', 
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginLeft: 46,
            marginTop: 35,
    }}>Nome da receita*</Text>

        <TextInput style={{
            width: 310,
            height: 35,
            backgroundColor: '#FFFFF',
            borderColor: '#F88B62',
            borderWidth: 1,
            borderRadius: 6,
            marginLeft: 46,
            marginTop: 10,
            fontSize: 12,
            fontFamily: 'Roboto_400Regular',
        }}></TextInput>

    <Text style={{
            color: '#33241F', 
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginLeft: 46,
            marginTop: 10,
    }}>Descrição*</Text>

        <TextInput style={{
            width: 310,
            height: 35,
            backgroundColor: '#FFFFF',
            borderColor: '#F88B62',
            borderWidth: 1,
            borderRadius: 6,
            marginLeft: 46,
            marginTop: 10,
            fontSize: 12,
            fontFamily: 'Roboto_400Regular',
        }}></TextInput>

    <Text style={{
            color: '#33241F', 
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginLeft: 46,
            marginTop: 10,
    }}>Ingredientes*</Text>

        <TextInput placeholder='Insira um ingrediente por linha' style={{
            width: 310,
            height: 35,
            backgroundColor: '#FFFFF',
            borderColor: '#F88B62',
            borderWidth: 1,
            borderRadius: 6,
            marginLeft: 46,
            marginTop: 10,
            fontSize: 12,
            fontFamily: 'Roboto_400Regular',
        }}></TextInput>

    <Text style={{
            color: '#33241F', 
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginLeft: 46,
            marginTop: 10,
    }}>Modo de Fazer*</Text>

        <TextInput style={{
            width: 310,
            height: 35,
            backgroundColor: '#FFFFF',
            borderColor: '#F88B62',
            borderWidth: 1,
            borderRadius: 6,
            marginLeft: 46,
            marginTop: 10,
            fontSize: 12,
            fontFamily: 'Roboto_400Regular',
        }}></TextInput>

        </View>
    </ScrollView>
</PaperProvider>
)


} 

















export default AdicionarReceita;