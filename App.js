import React from 'react';
import { ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import LoginScreen from './src/screen/LoginScreen';

const App = () => {
  return (
    <ImageBackground source = {require('./assets/fundo.png')}>
      <LoginScreen />
    </ImageBackground>
    );
};

export default App; 