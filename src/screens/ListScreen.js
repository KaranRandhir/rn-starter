//Flat list is used to render a list,it is a primtive element
//when using flat list we have to use 2 props data and render item

import React from 'react' ; //importing whole react library from react
import {Text,StyleSheet, View, FlatList} from "react-native" ;

const ListScreen = () => {
   /* const friends= [
        {name:"Friend1",key: "1"}, //key has to be a string and not a number
        {name:"Friend2",key: "2"}, //another way is by using extract key property
        {name:"Friend3",key: "3"},
        {name:"Friend4",key: "4"},
        {name:"Friend5",key: "5"},
        {name:"Friend6",key: "6"},

    ] */
    const friends= [
        {name:"Friend1",age:"25"}, //key has to be a string and not a number
        {name:"Friend2",age:"19"}, //another way is by using extract key property
        {name:"Friend3",age:"26"},
        {name:"Friend4",age:"20"},
        {name:"Friend5",age:"23"},
        {name:"Friend6",age:"70"},
        {name:"Friend7",age:"14"},
        {name:"Friend8",age:"30"},

    ]
    return (
        <FlatList
        keyExtractor = {friend => friend.name } //defines key at the time of compilation
        data = {friends}
        showsVerticalScrollIndicator= {false}  //for hiding scroll bar
        renderItem= {({item})=> {return <Text style={styles.TextStyle}>{item.name} Age - {item.age}</Text>}} />
    );
};

styles = StyleSheet.create({
    List : {

    },
    TextStyle : {
        marginVertical : 50 
    }
})
export default ListScreen ;