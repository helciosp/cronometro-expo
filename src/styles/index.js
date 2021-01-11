import { StyleSheet } from 'react-native';
import {Dimensions } from 'react-native';
var width = Dimensions.get('window').width; // Altura
var height = Dimensions.get('window').height; // Largura

const view = StyleSheet.create({
    // Criamos o grupo de estilo alinharTexto
    alinharTexto : {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center'
    },
});

const header = StyleSheet.create({
  background: {
    backgroundColor: "blue",
    width: width,
    flex: 1,
  },
  
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: 'center'
  },
});

const img = StyleSheet.create({
    formatacao : {  
      width: 250,
      height: 250,
      flex: 2,
      margin: 20
    },
});

const conteine = StyleSheet.create({
    Button : {
    },
    blocoA : {
     flex: 2
    },
    blocoB : {
      flex: 1
    },
    blocoC : {
      flex: 3,
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    center : {
      textAlign : 'center'
    }
});

export { view, img, conteine, header};