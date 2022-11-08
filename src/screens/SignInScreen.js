import { View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png'
import CustomInput from '../components/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
const SignInScreen = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  }
  const onForgotPassword = () => {
    console.warn("Forgot Password");
  }
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  }
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  }
  const onSignInApple = () => {
    console.warn("onSignInApple");
  }
  const onSignUp = () => {
    console.warn("onSignUp");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>    
        <Image source={Logo}
        style={[styles.logo, { height: height * 0.2 }]}
        resizeMode="contain" />

      <CustomInput
        placeholder='username'
        value={username}
        setValue={setUsername} ></CustomInput>

      <CustomInput
        placeholder='password'
        value={password}
        setValue={setPassword}
        secureTextEntry></CustomInput>

      <CustomButton 
        text="Sign In" 
        onPress={onSignInPressed} />

      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPassword}
        type="TERTIARY" />

      <CustomButton 
        text="Sign In with Facebook" 
        onPress={onSignInFacebook} 
        bgColor="#E7EAF4"
        fgColor="#4765A9"/>

      <CustomButton 
        text="Sign In with Google" 
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44" />

      <CustomButton 
        text="Sign In with Apple" 
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636" />

      <CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUp}
        type="TERTIARY" />
        </SafeAreaView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
  },
});
export default SignInScreen