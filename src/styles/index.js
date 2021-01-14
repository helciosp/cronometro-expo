import { StyleSheet } from 'react-native';
import {Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

const view = StyleSheet.create({
    alinharTexto : {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#139fc2',
    flex: 1,
    },
});

const header = StyleSheet.create({
  background: {
    backgroundColor: "#5e5e5e",
    width: width,
    opacity: 0.5, 
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
      height: 300,
      margin: 20
    },
});

const conteine = StyleSheet.create({
    blocoC : {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    crom : {
      textAlign : 'center',
      fontSize: 30,
      fontWeight: "bold",
      textAlign: 'center',
      color: "white",
    },
    list : {
      textAlign : 'center',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
      color: "white",
    }
});

export { view, img, conteine, header};