import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {connect} from 'react-redux';


class CounterApp extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.increaseCouner()}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.decreaseCouner()}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    counter:state.counter
  }
}

function mapDispatchToProps(dispatch){
  return{
    increaseCouner:()=>dispatch({type:'INCREASE_COUNTER'}),
    decreaseCouner:()=>dispatch({type:'DECREASE_COUNTER'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)