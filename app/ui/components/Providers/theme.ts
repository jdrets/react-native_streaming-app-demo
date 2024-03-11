import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    outline: 'rgba(255, 255, 255, 0.15)',
    background: 'black',
    primary: "rgb(29, 155, 240)",
    primaryContainer: "rgba(29, 155, 240, 0.8)",
    onPrimary: 'white'
    
    // error: '#E11900',
    // primary: '#C42A26',
    // primaryContainer: '#7D1517',
    // secondary: '#E7A19C',
    // secondaryText: '#1A1B1C',
    // backgroundColor: '#262728',
  },
  
};
