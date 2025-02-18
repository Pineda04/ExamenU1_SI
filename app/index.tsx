import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import TemperatureButton from '@/components/TemperatureButton';
import { useTemperature } from '@/hooks/useTemperature';

const TemperatureControl = () => {
  const { temperature, increaseTemperature, decreaseTemperature, getTemperatureColor } = useTemperature();

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.temperatureText, { color: getTemperatureColor() }]}>
        {temperature}°C
      </Text>

      <View style={globalStyles.row}>
        <TemperatureButton label="-" onPress={decreaseTemperature} />
        <TemperatureButton label="+" onPress={increaseTemperature} />
      </View>
    </View>
  );
};

export default TemperatureControl;
