import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.container, 
      styles[`bg_${type}`],
      bgColor ? {backgroundColor: bgColor}: {},
      ]}>

      <Text 
        style={[
          styles[text], 
          styles[`text${type}`],
          fgColor ? {color :fgColor}: {},
          
          ]}>{text}</Text>
    </Pressable>

    //   <Pressable style={[styles.container, styles['bg_${type)']]}>
    //   <Text style={styles.text}>forgot pass</Text>
    // </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,

  },
  bg_PRIMARY: {
    backgroundColor: '#3B71F3',
   
  },
  container_TERTIARY: {

  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'grey'
  },
});

export default CustomButton