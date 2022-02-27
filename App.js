import React from 'react';
import { LogBox } from 'react-native';

import Routes from './src/routes'

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Parece que você está usando uma API antiga com componentes de gestos, confira o novo sistema de gestos!",
  ])

  return (
    <Routes />
  );
}
