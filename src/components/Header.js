import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { header } from '../styles/index.js';

class Header extends Component{
    render(){
        return(
            <View style={header.background}>
                <Text style={header.title}>Meu cronometro!</Text>
            </View>
        );
    }
}
export default Header;