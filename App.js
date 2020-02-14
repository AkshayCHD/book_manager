import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './routes/RootDrawer'

export default function App() {
  return (
    <Navigator />
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})
