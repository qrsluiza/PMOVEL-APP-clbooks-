import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router'

export default  function App  ()  {

  const router = useRouter()

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {router.push('/InicialLeitor')}} >
          <Ionicons name="arrow-back" size={24} color="#62B5E6" />
        </TouchableOpacity>
    
      </View>

  <View style={styles.logoPai}>
  <Image source={require('../assets/forum.png')} style={styles.logo} />
  </View>

      <View style={styles.content}>
        <Text style={styles.label}>Tela forum leitor</Text>
         <TouchableOpacity  style={styles.label2} onPress={() => {router.push('/ComentarForum')}}>
        <Text style={styles.label2}>Comentar</Text>
        </TouchableOpacity>
      </View>

        
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.iconWrapper}>
            <TouchableOpacity style={styles.cIcon} onPress={() => {router.push('/InicialLeitor')}}>
            <Text style={styles.cIcon}>C</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => {router.push('/AcervoEscritor')}}>
          <Feather name="book" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome5 name="users" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => {router.push('/NotificaLeitor')}}>
          <Feather name="bell" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="account-circle-outline" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111F',
    paddingTop: 40,
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },

logoPai: {
  flexDirection: 'row',
  justifyContent:'center',
  alignItems:'center',
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: '#E8E8E8',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label2: {
    color: '#62B5E6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
