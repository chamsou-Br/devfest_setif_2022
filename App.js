import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './src/Navigation/AuthNavigation';
import MainNavigator from './src/Navigation/MainNavigator';
import LoginScreen from './src/screens/LoginScreen';


export default function App() {
  const [isLogin , setIsLogin] = useState(false)

  if(!isLogin) {
    return (
      <AuthNavigation  setIsLogin={setIsLogin} />
    );
  }else {
    return (
      <MainNavigator/>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
