import { Text } from "react-native";
import { } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

const IngredienteReceita = () => {

const router = useRoute()
const id = router.params.id
console.log(id)
    return(
        <Text>Tudo da Receita</Text>
    )
}


export default IngredienteReceita;