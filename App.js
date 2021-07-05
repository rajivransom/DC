import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import AddChat from './screens/addChat'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import chatScreen from './screens/chatScreen';


import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Register from './screens/register';
import HomeScreen from './HomeScreen';
import News from './screens/news';
const globalScreenOptions={
  headerStyle: {backgroundColor:'#2C68Ed'},
  headerTitleStyle:{color:'white'},
  headerTintColor:"white",
  headerTitleAlign:'centre'
  
 
};
export default function App({ navigation}) {
   
const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
}
  const Stack = createStackNavigator();
  return (
    <NavigationContainer> 
       <Stack.Navigator screenOptions={globalScreenOptions}>
         <Stack.Screen options={{title:'Login' ,backgroundColor:'red',...MyTransition}} name="Login" component={Login}></Stack.Screen>
         <Stack.Screen options={{title:'Register' ,backgroundColor:'red',...MyTransition}} name="Register" component={Register}></Stack.Screen>
         <Stack.Screen options={{title:'Home' ,backgroundColor:'red',...MyTransition}} name="home" component={HomeScreen}></Stack.Screen>
         <Stack.Screen options={{title:'Chat' ,backgroundColor:'red',...MyTransition}} name="AddChat" component={AddChat}></Stack.Screen>
         <Stack.Screen options={{title:'Chat' ,backgroundColor:'red',...MyTransition}} name="chatscreen" component={chatScreen}></Stack.Screen>
         <Stack.Screen options={{title:'Chat' ,backgroundColor:'red',...MyTransition}} name="news" component={News}></Stack.Screen>
        
       
      </Stack.Navigator>
    </NavigationContainer>
    

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
