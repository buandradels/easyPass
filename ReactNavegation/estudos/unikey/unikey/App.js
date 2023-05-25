import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Input, Icon,LinearGradient, ThemedInput, ThemedButton } from '@rneui/themed';
import Home from './screens/home.jsx';
import Sobre from './screens/sobre.jsx';
import Perfil from './screens/perfil.jsx';
import Login from './screens/login.jsx';

const Tab = createBottomTabNavigator();

const PerfilStack = createStackNavigator();

function PerfilStackScreen() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}/>
      <PerfilStack.Screen name="Login" component={Login}/>
    </PerfilStack.Navigator>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Perfil" component={PerfilStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
