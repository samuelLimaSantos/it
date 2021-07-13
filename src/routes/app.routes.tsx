import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Products } from '../screens/Products';
import { Cart } from '../screens/Cart';
import { ArrowRight } from '../assets/icons/ArrowRight';


export function AppRoutes() {
  const App = createStackNavigator();

  return (
    <App.Navigator>
        <App.Screen name="Products" component={Products} options={{ headerShown: false }}/>
        <App.Screen name="Cart" component={Cart} options={{
          headerTitle: '',
          headerBackImage: () => <ArrowRight />,
          headerStyle: { elevation: 0, backgroundColor: '#f3f3f3', height: 55 }
        }}/>
    </App.Navigator>
  )
}