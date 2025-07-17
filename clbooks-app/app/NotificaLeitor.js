import React, { useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../assets/clbooks.png';
import lektole from '../assets/lektole.png';
import david from '../assets/padrinho.png';
import { useRouter} from 'expo-router';

export default function TelaPostagem  ()  {
  const [postagem] = useState('');
  
const router = useRouter()

  return (

    <View style={styles.container}>

        <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {router.push('/InicialLeitor')}} >
          <Ionicons name="arrow-back" size={24} color="#62B5E6" />
        </TouchableOpacity>
    
      </View>

      <View style={styles.logo}>
        <Image source={Logo} style={styles.imagem} />
      </View>

      <View style={styles.caixaTexto}>
     <View style={styles.logo}>   </View>

    
     <View style={styles.comentarioUser}>
      <Image source={lektole} style={styles.img} />
       <Text style={styles.footerText}>@lektole curtiu o seu post no fórum.</Text>

      </View>

      </View>


       <View style={styles.caixaTexto}>
     <View style={styles.logo}>   </View>

    
     <View style={styles.comentarioUser}>
      <Image source={david} style={styles.img} />
       <Text style={styles.footerText}>@davidhlima adicionou o seu post aos favoritados.</Text>

      </View>

      </View>

      <View style={styles.notificacao}>
        <Text style={styles.footerText2}>*SEM NOTIFICAÇÕES ANTERIORES</Text>
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

   backButton: {
    marginRight: 10,
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

  notificacao: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    width:180,
    color: '#616162',
    fontSize: 12,
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
    color: '#62B5E6',
    fontSize: 12,
  },

 header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

 footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#0B0B16',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  iconWrapper: {
    borderWidth: 2,
    borderColor: '#62B5E6',
    borderRadius: 50,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cIcon: {
    color: '#62B5E6',
    fontWeight: 'bold',
    fontSize: 20,
  },

});
