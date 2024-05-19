import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './StackNavigation';
import Hamburguer from './Hambuguer/Hamburguer';
import Strogonoff from './Strogonoff/Strogonoff';
import Suco from './SucoDeLimon/Suco';
import Bife from './BifeWelligtion/Bife';

const Stack = createStackNavigator();

function NavegacaoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="Hamburguer" component={Hamburguer} />
        <Stack.Screen name="Strogonoff" component={Strogonoff}></Stack.Screen>
        <Stack.Screen name="Suco" component={Suco}></Stack.Screen>
        <Stack.Screen name="Bife" component={Bife}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavegacaoStack;
