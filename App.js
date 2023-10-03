import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from "./TelaLogin";
import TelaReceitas from "./TelaReceitas";

function App() {
  return (
    <PaperProvider>
          <TelaReceitas/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TelaLogin;