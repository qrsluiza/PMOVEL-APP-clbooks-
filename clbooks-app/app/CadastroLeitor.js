import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const CadastroLeitor = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [endereco, setEndereco] = useState('');

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image source={require('./assets/clbooks.png')} style={styles.logo} />
        <View style={styles.separador} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {[
          { label: 'Usuário:', value: usuario, setter: setUsuario },
          { label: 'Email:', value: email, setter: setEmail },
          { label: 'Telefone:', value: telefone, setter: setTelefone },
          { label: 'Data de Nascimento:', value: nascimento, setter: setNascimento },
          { label: 'Senha:', value: senha, setter: setSenha, secure: true },
          { label: 'Repetir a senha:', value: confirmarSenha, setter: setConfirmarSenha, secure: true },
          { label: 'Endereço:', value: endereco, setter: setEndereco },
        ].map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <TextInput
              style={styles.input}
              value={item.value}
              onChangeText={item.setter}
              secureTextEntry={item.secure || false}
              placeholderTextColor="#2B2A2A"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.botao} onPress={() => {}}>
          <Text style={styles.botaoTexto}>Criar conta</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Rodapé */}
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
  },
  header: {
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#12111F',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  separador: {
    height: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 5,
  },
  content: {
    paddingHorizontal: 7,
    paddingVertical: 19,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: '#E8E8E8',
    fontWeight: 'bold',
    width: 130, // largura fixa para alinhar os campos
    fontSize: 13,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#6EB1DF',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 30,
  },
  botaoTexto: {
    color: '#626161',
    fontWeight: 'bold',
    fontSize: 16,
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

export default CadastroLeitor;
