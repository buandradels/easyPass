import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

const Home = () => {
  return(
    <View style={styles.container}>
      <Text>Até que enfim</Text>
      <Button
        mode="contained"
        icon={() => <Ionicons name="add" size={30} color="white" />}
        compact
        style={[styles.button, { marginLeft: 160, marginRight: 160 }]}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonText}
        onPress={() => {}}
      />

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
    height: 30,
  },

});

export default Home;
