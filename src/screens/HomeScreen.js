import React from 'react';
import { Text, StyleSheet,View, Button, TouchableOpacity} from 'react-native';
//touchable opacity can convert anything into a button

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
  
      <Text style={styles.text}> HI THERE</Text> 
      <View style={styles.button}>
      <Button 
      onPress={()=> navigation.navigate("Components")}
      title="go to components"/>
      </View>
  
      <View  style={styles.button}>
      <Button 
      onPress={()=> navigation.navigate("List")}
      title="go to list demo"/>
      </View>

      <View  style={styles.button}>
      <Button 
      onPress={()=> navigation.navigate("Images")}
      title="go to Images"/>
      </View>
       
      <View style={styles.button}>
        <Button 
        title="Counter Screen"
        onPress={()=> navigation.navigate("Counter")}/>
      </View>

      <View style={styles.button}>
        <Button 
        title="Color Screen"
        onPress={()=> navigation.navigate("Color")}/>
      </View>
  
      <TouchableOpacity onPress={()=>navigation.navigate("List")}> 
      <Text>Go to list demo</Text>
      </TouchableOpacity> 
  
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button : {
    marginBottom : 10 
  }
});

export default HomeScreen;
