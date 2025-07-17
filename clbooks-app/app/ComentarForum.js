import React, { useState } from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, Image,} from 'react-native';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import Logo from '../assets/clbooks.png';
import {useRouter} from 'expo-router'

export default function TelaPostagem () {
  const [postagem, setPostagem] = useState('');

  const handleCancelar = () => {
    console.log('Cancelado');
  };

  const handlePostar = () => {
    console.log('Postando:', postagem);
  };

const router = useRouter()

  return (
    <View style={styles.container}>
 
      <View style={styles.logo}>
        <Image source={Logo} style={styles.imagem} />
      </View>

    
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleCancelar}>
          <Text style={styles.cancelar}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPostar} onPress={() => { router.push('/ForumLeitor') }}>
          <Text style={styles.textoPostar}>Postar</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.caixaTexto}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="O que está acontecendo?"
          placeholderTextColor="#023047"
          value={postagem}
          onChangeText={setPostagem}
        />

        <View style={styles.icones}>
          <Feather name="image" size={20} color="#62B5E6" />
          <Entypo name="location-pin" size={20} color="#62B5E6" />
          <MaterialIcons name="insert-drive-file" size={20} color="#62B5E6" />
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
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imagem: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelar: {
    color: '#E8E8E8',
    fontSize: 14,
  },
  botaoPostar: {
    backgroundColor: '#62B5E6',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  textoPostar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  caixaTexto: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    padding: 15,
    minHeight: 180,
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 15,
    color: '#023047',
    textAlignVertical: 'top',
  },
  icones: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 15,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#999999',
    fontSize: 12,
  },
});
