import { useState } from 'react'
import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from './constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {

  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText){
      setEnteredNumber(enteredText)
  }

  function resetInputHandler(){
     setEnteredNumber('')
  }

  function confirmInputHandler(){
       const chosenNumber = parseInt(enteredNumber);

       if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
          Alert.alert('Invalid number!',
            'Number has to be a number between 1 and 99',
            [{text: 'Okay', style:'destructive', onPress: resetInputHandler}]
          )
          return
       }

       onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card >
      <InstructionText>Enter a number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
