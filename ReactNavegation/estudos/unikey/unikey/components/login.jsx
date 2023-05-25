
import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput, Button, Image, TouchableOpacity} from 'react-native';

import { Input, Icon, LinearGradient, ThemedInput, ThemedButton} from '@rneui/themed';
const Login = ({ navigation }) => {
  const handleLogin = () => {
    // Implementar a lógica de autenticação aqui
    // Após a autenticação, redirecionar para a tela de lista de senhas

    navigation.navigate('Home');
  };

  const handleCadastro = () => {
    // Redirecionar para a tela de cadastro
    navigation.navigate('Cadastro');
  };

  const handleRecuperaSenha = () =>{
    // logica para reuperação de senha
    navigation.navigate('recuperaSenha');
  }
  return(
    
  <KeyboardAvoidingView style={styles.background}>
  <View style={styles.logo}>
    <Image 
    source={require("../assets/logo.jpg")}
  />
  </View>

  <View style={styles.container}>
      <Input  style={styles.Input}  placeholder="email" />
      <Input  style={styles.Input} placeholder="Senha"  />

      <TouchableOpacity style={styles.btnEntrar}>
        <Text onPress={handleLogin}> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastrar}>
        <Text onPress={handleCadastro}> Criar conta </Text>
      </TouchableOpacity>
     
    </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#223666',
    paddingTop: 50,
   
  },
  logo: {
    flex:1,
    justifyContent:'center'
  },
  container :{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '90%'
    
  },
  Input :{
    backgroundColor:'#fff',
    width:'90%',
    marginBottom: 15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding: 10
  },

  btnEntrar :{
      backgroundColor:"#35AAFF",
      width:'90%',
      height: 45,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:7


  },
  
 
  
  
 
});

export default Login;