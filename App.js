import React from 'react'
import Home from './src/pages/home'
import Fib from './src/pages/fibonacci/fibonacci.js'
import Clas from './src/pages/classificador/classificador.js'
import Fax from './src/pages/faxina/faxina.js'
import Val from './src/pages/validade/validade.js'
import Mold from './src/pages/molduras/molduras.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="Fibonacci"
          component={Fib}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="Classificador"
          component={Clas}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="Faxina"
          component={Fax}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="Validade"
          component={Val}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="Molduras"
          component={Mold}
          options={{ headerShown: false, title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
