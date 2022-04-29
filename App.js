import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ScreenForm from './src/screens/ScreenForm';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ForgotPasswordScreen /> 
      {/* <ScreenForm/> */}
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  root:{
    flex: 1,
    
  },
});
