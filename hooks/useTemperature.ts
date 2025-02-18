import { Colors } from "@/constants/Colors";
import { useState } from "react";

export const useTemperature = () => {
  const [temperature, setTemperature] = useState(20)
  
  const increaseTemperature = () => setTemperature(prev => prev + 1)
  const decreaseTemperature = () => setTemperature(prev => prev - 1)

  const getTemperatureColor = () => {
    if(temperature < 15){
      return Colors.blue
    }

    if(temperature <= 25){
      return Colors.green
    }

    return Colors.red
  }

  return {
    temperature,
    increaseTemperature,
    decreaseTemperature,
    getTemperatureColor
  }
};
