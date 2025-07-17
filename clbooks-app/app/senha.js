import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router'

export default function App () {
  const [login, setLogin] = useState();

const router = useRouter()

  return (
    <View style={styles.container}>

      <View style={styles.content}>
       <Image source={require('../assets/clbooks.png')} style={styles.imagem} />


        <Text style={styles.label}>Email:</Text>

        <TextInput
          style={styles.input}
          placeholder="Inserir email"
          placeholderTextColor="#2B2A2A"
          onChangeText={(texto) => setLogin(texto)}
          defaultValue={login}
        />

         <TextInput
          style={styles.input}
          placeholder="Inserir senha"
          placeholderTextColor="#2B2A2A"
          onChangeText={(texto) => setLogin(texto)}
          defaultValue={login}
        />



        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.botao} onPress={() => router.push('/EsqueciSenha')}>
            <Text style={styles.botaoTexto}>Confirmar</Text>
          </TouchableOpacity>

         <View style={styles.voltarContainer}>
         <View style={styles.linha} />
         <TouchableOpacity style={styles.footerText2} onPress={() => router.push('/')}>
          <Text style={styles.footerText2}>VOLTAR</Text>
          </TouchableOpacity>
          <View style={styles.linha} />
        </View>

        </View>
      </View>


      <View style={styles.footer}>

        <Text style={styles.footerText}>clbooks | política de privacidade</Text>
      </View>
    </View>
  );
};



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
    fontSize: 13,
     fontWeight: 'bold'
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

  voltarContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
},

linha: {
  flex: 1,
  height: 1,
  backgroundColor: '#FFFF',
  marginHorizontal: 10,
},

  footerText2: {
    color: '#6EB1DF',
    fontSize: 14,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
