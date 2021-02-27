/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {addition} from './src/Reducers/storeReducer'
import HomeScreen from './src/Component/HomeComponent'
import AboutScreen from './src/Component/AboutScreen'
import LastScreen from './src/Component/LastScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import {screensName} from './src/Constants/screenName'
import thunk from "redux-thunk"
const store=createStore(addition,applyMiddleware(thunk))
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
   <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name={screensName.HomeScreen} component={HomeScreen} options={{headerShown:false}}/>
           <Stack.Screen name={screensName.AboutScre} component={AboutScreen} options={{headerShown:false}}/>
           <Stack.Screen name={screensName.LastScre} component={LastScreen} options={{headerShown:false}}/>
       </Stack.Navigator>
   </NavigationContainer>
</Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
