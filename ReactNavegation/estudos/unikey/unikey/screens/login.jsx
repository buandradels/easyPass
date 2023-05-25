import React, { useState } from 'react';
import { View, Text,  StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
       />
      <TextInput
        placeholder="Senha Mestra"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
       />
      <TextInput
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        style={styles.input}
       />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      <Button
        mode="contained"
        compact
        style={[styles.button, { marginLeft: 80, marginRight: 80 }]}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonText}
        onPress={handleCadastro}
      >Entrar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  placeholder: {
    color: 'red',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#ff8c00',
  },
  buttonContent: {
    height: 35,
  },
  buttonText: {
    fontSize: 12,
  },
});

export default Login;
