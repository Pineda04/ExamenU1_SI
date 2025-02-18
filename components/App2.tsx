import { View, Text } from "react-native";
import React, { useState } from "react";
import RandomColorButton from "@/components/RandomColorButtom";
import { globalStyles } from "@/styles/global-styles";

const RandomColorApp = () => {
  const [backgroundColor, setBackgroundColor] = useState(" ");

  return (
    <View style={[globalStyles.background2, { backgroundColor }]}>
      <Text style={globalStyles.colorText2}>Presionar para cambiar fondo</Text>
      <RandomColorButton onPress={setBackgroundColor} />
    </View>
  );
};

export default RandomColorApp;
