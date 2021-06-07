import { View, Text } from 'react-native';
import React from 'react';


const Button = () => {
  const container = {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'red',
  };

  return (
    <View style={container}>
      <Text>Soy un Boton</Text>
    </View>
  )
}

export default Button