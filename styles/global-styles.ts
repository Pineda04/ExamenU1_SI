import { Colors, Colors2 } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    alignItems: 'center',
  },

  temperatureText: {
    fontSize: 85,
    fontFamily: 'BebasNeue-Regular',
    marginBottom: 75,
  },

  row: {
    flexDirection: 'row',
    gap: 45,
  },

  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 40,
    color: Colors.textPrimary,
    fontFamily: 'BebasNeue-Regular',
  },

  // De aqui para adelante son todos estilos de la App2

  background2: {
    backgroundColor: Colors2.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorText2: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 55,
    color: Colors2.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button2: {
    height: 60,
    width: 200,
    backgroundColor: Colors2.darkGray,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});