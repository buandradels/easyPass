import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, Icon,LinearGradient, ThemedInput, ThemedButton } from '@rneui/themed';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Cadastro from './components/cadastro.jsx';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
         
        })}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home}   />
        
         <Stack.Screen name="Cadastro" component={Cadastro} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
