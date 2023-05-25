import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const Perfil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Aqui é o perfil</Text>
      <Button
        mode="contained"
        compact
        style={[styles.button, { marginLeft: 80, marginRight: 80 }]}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonText}
        onPress={() => navigation.navigate('Login')}
      >Fazer Login</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
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

export default Perfil;
