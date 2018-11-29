// Import
import React, { Component } from 'react';
import {
  Text, StyleSheet,
} from 'react-native';


const fontSize = props => 60 - 6 * props.daysUntil;

const lineHeight = props => 70 - 4 * props.daysUntil;

const color = (props) =>  {
  const opacity = 1 / props.daysUntil;
  return 'rgba(0,0,0,'+opacity+')';
}

const fontWeight = (props) =>  {
  const weight = 7 - props.daysUntil;
  var val = weight * 100;
  return val.toString();
}

const style = (props) => {
  console.log(props, color(props), fontWeight(props));
   return {
    color: color(props),
    lineHeight: lineHeight(props),
    fontSize: fontSize(props),
    fontWeight: fontWeight(props),
  }
}

// Create compo
const DayItem = (props) => (
<Text style={style(props)}>
  {props.day}
</Text>
);




// Make this code available elsewhere
module.exports = DayItem;