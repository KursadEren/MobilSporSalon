import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Doğru içe aktarma
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import LoginScreen from './src/Screen/LoginScreen';
import RegisterScreen from './src/Screen/RegisterScreen';
import ChatScreen from './src/Screen/ChatScreen';
import ProfileScreen from './src/Screen/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator > 
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        {(props) => <CustomNavbar {...props} />}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Messages" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
