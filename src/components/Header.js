import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { view, img, conteine, header } from '../styles/index.js';

class Header extends Component{
    render(){
        return(
            <View style={header.background}>
                
                  <Text style={header.title}>Meu chronograph!</Text>
                
            </View>
        );
    }
}
export default Header;