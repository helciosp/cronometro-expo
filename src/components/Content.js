import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { img, conteine } from '../styles/index.js';
import Container from './Container.js';

class Content extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            timer: null,
            number: 0,
            startStopText: 'Start',
        }
        
        this.clearButton = this.clearButton.bind(this);
        this.startStopButton = this.startStopButton.bind(this);
    }
    startStopButton(){
        // começa ou parar o cronômetro

        if (this.state.timer == null) {
            // Iniciar o cronômetro
            let  newS = this.state;
            newS.startStopText = 'Stop';
            this.setState(newS);

            this.state.timer = setInterval(() => {
                let newState = this.state;
                newState.number += 0.1;
                this.setState(newState);
            }, 100);
        } else {
            //Parar
            clearInterval(this.state.timer);
            let newState = this.state;
            newState.startStopText = 'Start';
            newState.timer = null;
            this.setState(newState);
        }
    }
    clearButton(){
        clearInterval(this.state.timer);
        let newState = this.state;
        newState.startStopText = 'Start';
        newState.timer = null;
        newState.number = 0;
        this.setState(newState);

    }
   
    render(){
        return(
            <View>
                <View style = {conteine.blocoA}>
                    <Image style = {img.formatacao} source = { require('../img/chronograph.png')}/>
                </View>
                <View style = {conteine.blocoB}>
                    <Text style = {conteine.center}>{this.state.number.toFixed(1)}</Text>
                </View>
                <View style = {conteine.blocoC}>
                    <Button  title='Pausa' onPress = {this.startStopButton}/>
                    <Button title = 'Salvar e zear' onPress = {this.clearButton}/>
                </View>
            </View>
        );
    }
}
export default Content;