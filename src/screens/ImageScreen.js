import React from 'react' ; //importing whole react library from react
import {Text,StyleSheet, View} from "react-native" ; //importing 2 components from react-native library
import ImageDetails from "../components/ImageDetails"
//props are used to passs properties from parent to child component
//state changes when some data change is to be shown in the app

const ImageScreen = () =>
{ return ( 
<View> 
    <ImageDetails name= "forest" imgsrc={require("../../assets/forest.jpg")}/>
    <ImageDetails name="beach" imgsrc={require("../../assets/beach.jpg")}  />
    <ImageDetails name="mountain" imgsrc={require("../../assets/mountain.jpg")}/>
    
    
</View>
    );
};

styles = StyleSheet.create({
    image :{
        fontSize: 30 
    }
})

export default ImageScreen ;