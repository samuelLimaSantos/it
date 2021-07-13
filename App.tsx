import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { AppProvider } from './src/hooks';
import { 
  OpenSans_600SemiBold_Italic,
  OpenSans_400Regular,
  OpenSans_300Light_Italic,
  OpenSans_700Bold,
  useFonts
} from '@expo-google-fonts/open-sans';
import { Routes } from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold_Italic,
    OpenSans_400Regular,
    OpenSans_300Light_Italic,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <StatusBar translucent backgroundColor="#f3f3f3"/>
      <Routes />
    </AppProvider>
  );
}
