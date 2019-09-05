import React,{useState} from "react" ;
import {View,StyleSheet,Text,Button} from "react-native" ;
//dont modify a satate variable directly


const CounterScreen = () => {
const[Counter,SetCounter]= useState(0) 

return  (  <View>
            <View style={styles.button}>
            <Button
            onPress={() => SetCounter(Counter+1)}
            title="Increase"/>
            </View>
            
            <View style={styles.button}>
              <Button //dont do counter++
            onPress={() => SetCounter(Counter-1)}
            title="Decrease"/>
            </View>

            <Text>Current Value is {Counter}</Text>     
        
        </View>
);
};

const styles = StyleSheet.create({
    button : {
        marginBottom : 10 
    }
});

export default CounterScreen
//once setcounter runs then counter doenst initialize again
//react rerenders the screen everytime the the counter value is changed
//we are currntly using function based components
//class based components can also be used but state change syntax is a little different.
//whenever a component gets re rendered then all children components are also re rendered.
// a state variable can be passed into child component.
//is a screen has multiple copies then it would have saperate and independent state variables.
/* whenever dealing with state 
1.What piece of data is changing in the app
2.What type it is
3.What is the starting value */