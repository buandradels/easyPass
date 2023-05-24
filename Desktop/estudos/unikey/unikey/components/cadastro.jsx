import React, { useState } from 'react';


import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput, Button, Image, TouchableOpacity} from 'react-native';

import { Input, Icon, LinearGradient, ThemedInput, ThemedButton} from '@rneui/themed';

const Cadastro = ({navigator}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleCadastro = () => {
    // Validação dos campos antes de realizar o cadastro
    if (!email) {
      setErro('Preencha o campo de email.');
      return;
    }

    if (!senha) {
      setErro('Preencha o campo de senha mestra.');
      return;
    }

    if (senha.length !== 9 || !/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
      setErro('A senha mestra deve ter 9 caracteres e conter um caractere especial.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('A senha mestra e a confirmação de senha não correspondem.');
      return;
    }

    // Lógica de cadastro aqui
    console.log('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="Senha Mestra"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Input
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        style={styles.input}
      />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#223666',
    paddingTop: 50,
  },
  input: {
    backgroundColor:'#fff',
    width:'90%',
    marginBottom: 15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding: 10
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  placeholder: {
    color: 'red',
  },
});

export default Cadastro;
