import { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

const Formulario = ({receitaPost, receitaPut, setarteste}) => {
 

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
    });

    //const [receita, setReceita] = useState('');
   // const [descricao, setDescricao] = useState('');
    //const [ingredientes, setIngredientes] = useState('');
    //const [modoFazer, setModoFazer] = useState('');

    const [heightDescricao, setHeightDescricao] = useState(40);
    const [heightIngredientes, setHeightIngredientes] = useState(40);
    const [heightModoFazer, setHeightModoFazer] = useState(40);

    const onContentSizeChange = (conteudo, setHeigth) => (e) => {
        setHeigth(Math.max(40, e.nativeEvent.contentSize.height));
    }

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return(
        <ScrollView>
        <View style={{ alignItems: 'center' }}>
        <View style={{
            borderWidth: 2,
            borderColor: '#858585',
            justifyContent: 'center',
            alignItems: 'center',
            width: 224,
            height: 160,
            marginTop: 30
        }}>

            <Image source={{ uri: 'URL_DA_IMAGEM' }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
        </View>

        <Button mode="contained" labelStyle={{ color: '#33241F' }} style={{
            borderRadius: 6,
            marginTop: 10,
            backgroundColor: "#F88B62",

        }}>
            Escolher uma imagem
        </Button>

        <Text style={{
            color: '#33241F',
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginTop: 10

        }}>Nome da receita*</Text>

        <TextInput label="Receita" value={receitaPost}
         onChangeText={(text) =>{
            receitaPut(text) 
        }} style={{
            width: 290,
            height: 35,
            borderColor: '#F88B62',
            borderWidth: 1,
            borderRadius: 6,
            marginTop: 10,
            fontSize: 12,
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 10,

        }} />

        <Text style={{
            color: '#33241F',
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginTop: 10,
        }}>Descrição*</Text>

        <TextInput 
            
            multiline={true}
            value={setarteste}
            onChangeText={(newText) => setDescricao(newText)} onContentSizeChange={onContentSizeChange(setarteste, setHeightDescricao)}
            style={{
                width: 290,
                height: heightDescricao,
                borderColor: '#F88B62',
                borderWidth: 1,
                borderRadius: 6,
                marginTop: 10,
                fontSize: 12,
                fontFamily: 'Roboto_400Regular',
                paddingLeft: 10
            }}></TextInput>

        <Text style={{
            color: '#33241F',
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginTop: 10,
        }}>Ingredientes*</Text>

        <TextInput placeholder='Insira um ingrediente por linha'
            multiline={true}
            value={ingredientes}
            onChangeText={(newText) => setIngredientes(newText)} onContentSizeChange={onContentSizeChange(ingredientes, setHeightIngredientes)}
            style={{
                width: 290,
                height: heightIngredientes,
                borderColor: '#F88B62',
                borderWidth: 1,
                borderRadius: 6,
                marginTop: 10,
                fontSize: 12,
                fontFamily: 'Roboto_400Regular',
                paddingLeft: 10,
            }}></TextInput>

        <Text style={{
            color: '#33241F',
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            marginTop: 10,
        }}>Modo de Fazer*</Text>

        <TextInput
            multiline={true}
            value={modoFazer}
            onChangeText={(newText) => setModoFazer(newText)} onContentSizeChange={onContentSizeChange(modoFazer, setHeightModoFazer)}
            style={{
                width: 290,
                height: heightModoFazer,
                borderColor: '#F88B62',
                borderWidth: 1,
                borderRadius: 6,
                marginTop: 10,
                fontSize: 12,
                fontFamily: 'Roboto_400Regular',
                paddingLeft: 10
            }}></TextInput>

    </View>
        {/* <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <AdicionarReceita receitaPost={receita} receitaPut={setReceita}/>
        <Button onPress={() =>{
        CriarReceita()
    }} 
        mode="contained" buttonColor='#F88B62' textColor='#33241F' style={{ borderRadius: 6, marginBottom:20}} >
        Adicionar
        </Button>
    
        </View> */}
    </ScrollView>
    )
}

export default Formulario;