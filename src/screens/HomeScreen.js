import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  
  return (
  <View>
    <Text style={styles.text}>Olá Mundo</Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to Components Demo"

    />
    <Button 
    onPress={() => navigation.navigate('List')}
    title="Go to List Demo"
    />
    <Button 
    onPress={() => navigation.navigate('Image')}
    title="Got to Images"
    />
    <Button 
    title="Go to Counter"
    onPress={() => navigation.navigate('Counter')}/>
    <Button 
    title="Go to Color Demo"
    onPress={() => navigation.navigate('Color')}/>
    <Button 
    title="Go to Square Demo"
    onPress={() => navigation.navigate('Square')}/>
    
  </View>
  
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
