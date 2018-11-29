/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';


export default class App extends Component<Props> {
  render() {
    days = () => {
      const daysItems = [];

      for(var i=0; i<7; i++){
        const day = Moment().add(i, 'days').format('dddd');
        console.log(i, day, Moment().add(2, 'days').format('dddd'), Moment().format('dddd'));
        daysItems.push(
          <DayItem key={i} day={day} daysUntil={i} />
        )
      }
      return daysItems;
      // return DAYS.map(day => <DayItem day={day} id={day} />);
    }
    return (
      <View style={styles.container}>
        {
          days()
        }
      </View>
    );
  }
}

//Style
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Width wise
    alignItems: 'center' // Height wise
  }
});

