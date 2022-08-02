import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };
  const onAddGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };
  const onCancelHandler = () => {
    props.onCancel();
    setEnteredGoalText('');
  };
  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior="height"
          style={{
            width: windowWidth,
            height: windowWidth,
            flex: 1,
            paddingTop: 10,
          }}>
          <Image
            source={require('../assets/images/avatar.png')}
            style={styles.image}
          />
        </KeyboardAvoidingView>

        <View style={styles.textInputView}>
          <TextInput
            value={enteredGoalText}
            style={styles.textInput}
            placeholder="Your Goal"
            placeholderTextColor={'white'}
            selectionColor="black"
            onChangeText={goalInputHandler}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                color="green"
                title="Add Goal"
                onPress={onAddGoalHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button color="green" title="Cancel" onPress={onCancelHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  textInputView: {
    width: '100%',
    height: windowHeight - windowWidth - 40,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    margin: 16,
    width: '40%',
    height: '60%',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth,
    height: windowWidth,
  },
});
