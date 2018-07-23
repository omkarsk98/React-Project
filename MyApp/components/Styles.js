import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const mystyle = StyleSheet.create({
    bigblue: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor:'black',
    }
});

export default class PlayingWithStyles extends Component {
    render() {
        return (
            <View>
                <Text style={mystyle.bigblue}>Trying to play with styles.</Text>
            </View>
        );
    }
}