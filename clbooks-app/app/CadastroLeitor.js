import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {router.push('/')}}>
          <Ionicons name="arrow-back" size={24} color="#62B5E6" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image source={require('../assets/clbooks.png')} style={styles.imagem} />

      
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
            />
          </View>


          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            />
          </View>

      
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Telefone:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPhone}
              value={phone}
            />
          </View>

   
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data de Nascimento:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDob}
              value={dob}
            />
          </View>

      
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </View>

  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Repetir a senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </View>

   
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Endereço:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setAddress}
              value={address}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={styles.botao} onPress={() => { router.push('/InicialLeitor') }}>
              <Text style={styles.botaoTexto}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>


      <View style={styles.priva}>
        <Text style={styles.privaText}>clbooks | política de privacidade</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111F',
    padding: 40,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // centralize vertically
  },
  imagem: {
    width: 350,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  botao: {
    backgroundColor: '#6EB1DF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    color: '#E8E8E8',
    fontSize: 16,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex:1,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  priva: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  privaText: {
    color: '#E8E8E8',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
