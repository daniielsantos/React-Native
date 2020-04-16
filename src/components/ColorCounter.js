import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const ColorCounter = ({color, onIncrease, onDecrease}) => {
    

    return (
        <View>
            <Text style={styles.titleStyles}>{color}</Text>
            <Button onPress={() => onIncrease() } title={`More ${color}`}/>
            <Button onPress={() => onDecrease() } title={`Less ${color}`}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyles: {
        fontSize: 20,
        textAlign: "center"
    }
})

export default ColorCounter