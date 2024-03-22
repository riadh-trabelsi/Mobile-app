import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './HomeScreen';
import ProductDetails from './ProductDetails';



export default function HomeScreenStack() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator
        initialRouteName="homestackscreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homestackscreen" component={HomeScreen} />
        <Stack.Screen name="productdetails" component={ProductDetails} />
    
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})