import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import {useRouter} from 'expo-router'

export default function App ()  {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/clbooks.png')} style={styles.imagem} />
        <Text style={styles.label}>Tela inicial leitor</Text>
        <Text style={styles.label2}>ASSINE AQUI!</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Text style={styles.cIcon}>C</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => {router.push('/AcervoEscritor')}}>
          <Feather name="book" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => {router.push('/ForumLeitor')}}>
          <FontAwesome5 name="users" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  imagem: {
    width: 350,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
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
