/*
1.import libraries for component
2.Create a component
3.Create a stylesheet for component
4.Export component for further use
*/
 // variable to be placed in {}
import React from 'react' ; //importing whole react library from react
import {Text,StyleSheet, View} from "react-native" ; //importing 2 components from react-native library

const ComponentsScreen = () => {
    const name = "Karan "
    return (
       <View>
            <Text style={styles.textstyle}>Getting started with react native !</Text>
            <Text style={styles.name}>My name is {name}</Text>  
    </View>  
   ); 
};
const styles = StyleSheet.create({
    textstyle : {
        fontSize : 45
    },
    name : {
        fontSize : 20
    }
})   

export default ComponentsScreen ;