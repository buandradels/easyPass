import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Sobre = () => {
  return(
    <View style={styles.container}>
    <Text>Tentando fazer a atividade</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

export default Sobre;
