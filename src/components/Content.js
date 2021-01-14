import React, { Component } from 'react';
import { Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import { img, conteine, header } from '../styles/index.js';

class Content extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            timer: null,
            seg: 0,
            min: 0,
            startStopText: 'Start',
            spents: [],
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
                newState.seg += 0.1;
                this.setState(newState);
            }, 100);         
        } else {
            //Parar
            clearInterval(this.state.timer);
            let newState = this.state;
            newState.startStopText = 'Resume';
            newState.timer = null;
            this.setState(newState);
        }
    }
    addSpent = newSpend => {
        const vspents = [...this.state.spents]
        let newState = this.state;
        clearInterval(this.state.timer);
        newState.startStopText = 'Start';
        newState.timer = null;
        vspents.unshift({
          id: Math.random(),
          segg: newState.seg.toFixed(1),
        });
        this.setState({
            spents: vspents
        })     
    }
    clearButton(){     
        clearInterval(this.state.timer);
        let newState = this.state;    
        newState.startStopText = 'Start';
        newState.timer = null;
        newState.seg = 0; 
        this.setState(newState);
    }
   
    render(){
        return(
            <View>
                <View>
                    <Image style = {img.formatacao} source = { require('../img/chronograph.png')}/>
                </View>
                <View>
                    <Text style = {conteine.crom}>{this.state.seg.toFixed(1)}</Text>
                </View>
                <View style = {conteine.blocoC}>
                    <Button  title={this.state.startStopText} onPress = {this.startStopButton}/>
                    <Button title = 'Salvar' onPress = {this.addSpent}/>
                    <Button title = 'Zear' onPress = {this.clearButton}/>              
                </View>
                <ScrollView>
                    <View>     
                        <FlatList data = {this.state.spents} 
                        keyExtractor = {item => {item.id}}
                        renderItem = {({ item }) => <Text style = {conteine.list}> {item.segg} segundos</Text> }/>  
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Content;