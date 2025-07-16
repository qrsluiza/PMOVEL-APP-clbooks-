import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import Logo from './assets/clbooks.png';
import lektole from './assets/lektole';
import david from './assets/padrinho.png';

const TelaPostagem = () => {
  const [postagem, setPostagem] = useState('');

  const handleCancelar = () => {
    console.log('Cancelado');
  };

  const handlePostar = () => {
    console.log('Postando:', postagem);
  };

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image source={Logo} style={styles.imagem} />
      </View>

      <View style={styles.caixaTexto}>
     <View style={styles.logo}>   </View>

    
     <View style={styles.comentarioUser}>
      <Image source={lektole} style={styles.img} />
       <Text style={styles.footerText}>'@lektole curtiu o seu post no fórum.'</Text>

      </View>

      </View>


       <View style={styles.caixaTexto}>
     <View style={styles.logo}>   </View>

    
     <View style={styles.comentarioUser}>
      <Image source={david} style={styles.img} />
       <Text style={styles.footerText}>'@davidhlima adicionou o seu post aos favoritados.'</Text>

      </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText2}>SEM NOTIFICAÇÕES ANTERIORES</Text>
      </View>
    </View>
  );
};

export default TelaPostagem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111F',
    padding: 20,
    paddingTop: 50,
  },

  comentarioUser:{
    flexDirection:'row',
  alignItems:'center',
marginTop: -20,
gap: 20
  },

  img: {
    width:50,
    height: 60,
    resizeMode: 'contain',
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

  
  caixaTexto: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    padding: 15,
    minHeight: 54,
    height:70,
  marginTop: 20,
    justifyContent: 'space-between',
  },

  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#616162',
    fontSize: 12,
  },

   footerText2: {
    color: '#62B5E6',
    fontSize: 12,
  },
});
