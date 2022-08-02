import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import {NativeModules} from 'react-native';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const deleteGoalHandler = ind => {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter((goal, index) => index !== ind),
    );
  };
  const addGoalHandler = enteredGoalText => {
    if (enteredGoalText.length) {
      setCourseGoals(currentCourseGoals => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
      endAddGoalHandler();
    }
  };
  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };
  return (
    <View style={styles.appContainer}>
      <Button
        onPress={startAddGoalHandler}
        title="Add New Goal"
        color={'darkgreen'}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isModalVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => index}
          renderItem={itemData => (
            <GoalItem
              deleteGoalHandler={deleteGoalHandler}
              itemData={itemData}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    flex: 1,
  },
  goalsContainer: {
    borderTopWidth: 2,
    borderColor: '#FFF',
    marginTop: 50,
    paddingTop: 40,
    flex: 4,
  },
});

export default App;
