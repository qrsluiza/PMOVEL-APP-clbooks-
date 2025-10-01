import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router'
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App  ()  {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

const router = useRouter();

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    router.replace('/InicialLeitor');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.error(errorMessage);
  }    
}

  return (
    <View style={styles.container}>

      <View style={styles.content}>
       <Image source={require('../assets/clbooks.png')} style={styles.imagem} />


        <Text style={styles.label}>Entrar:</Text>

        <TextInput
          style={styles.input}
          placeholder="Email ou usuário"
          placeholderTextColor="#2B2A2A"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder="Senha"
          placeholderTextColor="#2B2A2A"
          secureTextEntry
          onChangeText={(texto) => setSenha(texto)}
          defaultValue={senha}
        />
        <TouchableOpacity onPress={() => router.push('/senha')}>
        <Text style={[styles.label2, { marginTop: 10 }]}>Esqueci a senha</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            <Text style={styles.botaoTexto}>ENTRAR</Text>
          </TouchableOpacity>

            <TouchableOpacity  onPress={() => router.push('/EscolhaCadastro')}>
          <Text style={styles.footerText2}>Criar uma conta</Text>
           </TouchableOpacity>
          
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
    marginTop: 10,
  },
  label2: {
    color: '#E8E8E8',
    marginTop: 10,
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
  footerText2: {
    color: '#E8E8E8',
    fontSize: 14,
    marginLeft: 90,
    fontWeight: 'bold',
  },
});