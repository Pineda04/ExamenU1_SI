import { Pressable, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';
import { generateRandomHexColor } from '@/hooks/useRandomColor';

interface Props {
  onPress: (color: string) => void;
}

const RandomColorButton = ({ onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.button2,
        { opacity: pressed ? 0.8 : 1 },
      ]}
      onPress={() => {
        Haptics.selectionAsync();
        onPress(generateRandomHexColor());
      }}
    >
      <Text style={globalStyles.buttonText2}>Cambiar color</Text>
    </Pressable>
  );
};

export default RandomColorButton;
