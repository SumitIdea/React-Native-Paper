import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
       style ={styles.input}
       secureTextEntry={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:5,
  },
  input : {
    fontWeight:'bold',

      },
    
});
export default CustomInput