import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import KeepAwake from 'react-native-keep-awake';
import { Screen } from '../enums/Screen';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import Snackbar from './Snackbar';
import useUpdateRelease from '../hooks/useUpdateRelease';
import SettingsScreen from '../screens/Settings';
import { Appearance } from 'react-native';
import { Color } from '../enums/Color';

KeepAwake.activate();

const Stack = createStackNavigator();

const App = () => {
  useUpdateRelease();
  useEffect(() => {}, []);

  const appTheme =
    Appearance.getColorScheme() === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...appTheme,
    roundness: 2,
    colors: {
      ...appTheme.colors,
      primary: Color.primary,
      accent: Color.primary,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={Screen.Loading}>
          <Stack.Screen name={Screen.Loading} component={LoadingScreen} />
          <Stack.Screen name={Screen.Login} component={LoginScreen} />
          <Stack.Screen name={Screen.Home} component={HomeScreen} />
          <Stack.Screen name={Screen.Settings} component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Snackbar />
    </PaperProvider>
  );
};

export default App;
