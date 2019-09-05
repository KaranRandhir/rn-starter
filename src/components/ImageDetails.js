import React from "react" ;
import {Text,StyleSheet,View,Image} from "react-native" ;

const ImageDetails = ({imgsrc,name}) => { 
    
    return ( 
    <View>
        <Image source={imgsrc}/>
    <Text>image is of {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        
    }
});

export default ImageDetails ;