import { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, TextInput, } from 'react-native';
import { Button } from 'react-native-paper';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import urlconfig from "./config.json"

const Editar = ({ route }) => {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
    });

    const { id } = route.params;

    const GetReceitaId = async () => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas/${id}`);
            const data = await response.json();

            setReceita(data.nomeReceita || '');
            setDescricao(data.descricao || '');
            setIngredientes(data.ingredientes || '');
            setModoFazer(data.modoFazer || '');
        } catch (error) {
            console.error('Erro ao obter dados da receita:', error);
        }
    }

    const AtualizarReceita = async () => {
        try {
            const response = await fetch(`${urlconfig.urlDesenvolvimento}/receitas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nomeReceita: receita,
                    descricao: descricao,
                    ingredientes: ingredientes,
                    modoFazer: modoFazer,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar a receita');
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        GetReceitaId();
    }, []);

    const [receita, setReceita] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoFazer, setModoFazer] = useState('');

    const [heightDescricao, setHeightDescricao] = useState(40);
    const [heightIngredientes, setHeightIngredientes] = useState(40);
    const [heightModoFazer, setHeightModoFazer] = useState(40);

    const onContentSizeChange = (conteudo, setHeigth) => (e) => {
        setHeigth(Math.max(40, e.nativeEvent.contentSize.height));
    }
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ScrollView>
            {/* IMAGEM */}
            <View View style={{ alignItems: 'center' }
            }>
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

                {/* NOME DA RECEITA */}
                <Text style={{
                    color: '#33241F',
                    fontSize: 14,
                    fontFamily: 'Roboto_400Regular',
                    marginTop: 10

                }}>Nome da receita*</Text>

                <TextInput value={receita}
                    onChangeText={(text) => {
                        setReceita(text)
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

                {/* DESCRIÇÃO */}
                <Text style={{
                    color: '#33241F',
                    fontSize: 14,
                    fontFamily: 'Roboto_400Regular',
                    marginTop: 10,
                }}>Descrição*</Text>

                <TextInput

                    multiline={true}
                    value={descricao}
                    onChangeText={(newText) => setDescricao(newText)} onContentSizeChange={onContentSizeChange(descricao, setHeightDescricao)}
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

                {/* INGREDIENTES */}
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

                {/* MODO DE FAZER */}
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

            {/* BUTTON ADICIONAR */}
            < View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>

                <Button onPress={AtualizarReceita}
                    mode="contained" buttonColor='#F88B62' textColor='#33241F' style={{ borderRadius: 6, marginBottom: 20 }} >
                    Atualizar Receita
                </Button>

            </View >
        </ScrollView>

    )
}

export default Editar;