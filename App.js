import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './routes/RootDrawer'
import * as Font from 'expo-font';

export default function App() {
  let [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'lacquer-regular': require('./assets/fonts/Lacquer/Lacquer-Regular.ttf'),
    }).then(() => {
      setFontLoaded(true)
      console.log(true)
    }).catch((err) => {
      console.log(err)
    });
  }, [])
  if(fontLoaded) 
    return (
      { fontLoaded } ? <Navigator /> : null
    );
  else 
      return null
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})
