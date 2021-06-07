import { View, Text } from 'react-native';
import React from 'react';

const Card = () => {
  const container = {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'orange',
  };

  return (
    <View style={container}>
      <Text>Soy una Card</Text>
    </View>
  )
}

export default Card