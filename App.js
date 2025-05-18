// App.js
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginForm from './screens/LoginForm';
import Activites from './screens/Activities';



export default function App() 
{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginForm />
      <Activites />
    </SafeAreaView>
  );
}