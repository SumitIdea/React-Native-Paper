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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
 
  return (
    <SafeAreaView style={styles.root}>  
   <SignInScreen></SignInScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
  flex:1,
  backgroundColor:'#E7F8EE'
 },
});

export default App;
