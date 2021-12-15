
console.disableYellowBox = true
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/views/Login';
import Cadastro from './src/views/Cadastro';
import Principal from './src/views/Principal';
import Rede from './src/views/Rede';



export default function App(){
  
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Principal'
      screenOptions={{headerShown: false}}
      >
        
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Principal' component={Principal}/>
        <Stack.Screen name='Rede' component={Rede}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

