import React, { useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import Logo from '../assets/clbooks.png';
import lektole from '../assets/lektole.png';
import david from '../assets/padrinho.png';
import { useRouter} from 'expo-router';

export default function TelaPostagem  ()  {
  const [postagem] = useState('');

  const handleCancelar = () => {
    console.log('Cancelado');
  };

  const handlePostar = () => {
    console.log('Postando:', postagem);
  };

  const handleVoltar = () => {
    console.log('Voltar pressionado'); 
  };
  
const router = useRouter()

  return (
    <View style={styles.container}>

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

      <View style={styles.footer}>
        <Text style={styles.footerText2}>*SEM NOTIFICAÇÕES ANTERIORES</Text>
      </View>

       <View style={styles.voltarContainer}>
               <View style={styles.linha} />
                <Text style={styles.footerText2}>VOLTAR</Text>
                <View style={styles.linha} />
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

});
