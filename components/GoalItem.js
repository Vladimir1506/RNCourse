import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#FFF'}}
        onPress={props.deleteGoalHandler.bind(this, props.itemData.index)}>
        <Text style={styles.goalText}>
          {props.itemData.index + 1 + '. ' + props.itemData.item}
        </Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  goalText: {
    padding: 15,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
