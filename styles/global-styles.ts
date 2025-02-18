import { Colors } from '@/constants/Colors';
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
});
