import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router'

 export default function EscolhaCadastro  () {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/clbooks.png')} style={styles.logo} />
        <View style={styles.separator} />
      </View>


      <View style={styles.content}>
        <Text style={styles.label}>Que tipo de usuário você é?</Text>

        <TouchableOpacity style={styles.botao} onPress={() => {router.push('/CadastroLeitor')}}>
          <Text style={styles.botaoTexto}>CADASTRO ESCRITOR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={() => {router.push('/CadastroLeitor')}}>
          <Text style={styles.botaoTexto}>CADASTRO LEITOR</Text>
        </TouchableOpacity>
      </View>

   
      <View style={styles.footer}>
        <Text style={styles.footerText}>@clbooks | política de privacidade</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111F',
    justifyContent: 'space-between',
  },

  header: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#12111F',
  },

  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  label: {
    color: '#E8E8E8',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#6EB1DF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#575656',
    fontWeight: 'bold',
    fontSize: 14,
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
