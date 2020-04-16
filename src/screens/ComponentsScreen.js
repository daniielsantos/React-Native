import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = <Text>Hi there</Text>
    const name = 'Daniel Souza'
    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native   </Text>
            <Text style={styles.subHeaderStyle}>{name}</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize:20
    }
});

export default ComponentsScreen
