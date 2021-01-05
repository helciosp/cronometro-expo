import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View>
    <Image style = {{width: 100, height: 100}} source = { require('./src/img/chronograph.png')}/>
    <Button title = "Pausar"/>
    <Button title = "Salvar e zear"/>
    </View>
  );
}



