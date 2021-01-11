import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './src/components/Header.js';
import Content from './src/components/Content.js';
import Footer from './src/components/Footer.js'
import { view } from './src/styles/index.js';

export default function App() {
  return (
    <ScrollView>
      <View style = {view.alinharTexto}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </View>
    </ScrollView>
    
      
      
  );
}



