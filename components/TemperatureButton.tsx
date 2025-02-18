import { Text, Pressable } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  onPress: () => void;
}

const TemperatureButton = ({ label, onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.button,
        { opacity: pressed ? 0.8 : 1 },
      ]}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default TemperatureButton;
