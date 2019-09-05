import React,{useState} from "react" ;
import {View,Button,StyleSheet,FlatList} from "react-native";

const ColorScreen = () => { 
    const[colors,setColor] = useState([]) 
    return (
        <View>
        <Button
        title="color"
        onPress={() => setColor(...colors,randomRgb( ))}
        />
        
        
        <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem= {({item}) => <View style={{height:100,width:100,backgroundColor:randomRgb()}}/>}
        />
        </View>



    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)

    return (`rgb(${red},${blue},${green})`)
}
const styles = StyleSheet.create({}) ;

export default ColorScreen ;