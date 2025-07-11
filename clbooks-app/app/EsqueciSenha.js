import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  return (
    <View style={styles.container}>

      <View style={styles.content}>
       <Image source={require('./assets/clbooks.png')} style={styles.imagem} />


        <Text style={styles.label}>Link confirmado pelo usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          placeholderTextColor="#2B2A2A"
          onChangeText={(texto) => setLogin(texto)}
          defaultValue={login}
        />

        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder="Repetir nova senha"
          placeholderTextColor="#2B2A2A"
          secureTextEntry
          onChangeText={(texto) => setSenha(texto)}
          defaultValue={senha}
        />


        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.botao} onPress={() => { }}>
            <Text style={styles.botaoTexto}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.footer}>

        <Text style={styles.footerText}>clbooks | política de privacidade</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111F',
    padding: 40,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // centraliza verticalmente
  },

  imagem: {
  width: 350, 
  height: 150, 
  alignSelf: 'center', 
  marginBottom: 20, 
  resizeMode: 'contain', 
},

label:{
   color: '#E8E8E8',
  fontSize: 12,
  fontWeight: 'bold',
  textAlign: 'center', 

},

  botao: {
    backgroundColor: '#6EB1DF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#626161',
    fontWeight: 'bold',
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerText: {
    color: '#E8E8E8',
    fontSize: 12,
    fontWeight: 'bold',
  },

});