import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import MainButton from "../components/ui/MainButton";
import MainInput from "../components/ui/MainInput";

const GameStart = props => {
  const [gameNumber, setGameNumber] = useState("");

  const gameNumberHandler = (text) => {
    setGameNumber(text);
  };

  const resetGameNumber = () => {
    setGameNumber("");
  };

  const confirmationInputHandler = () => {
    const chosenNumber = parseInt(gameNumber);
    const MINVALUE = 0;
    const MAXVALUE = 100;

    if(isNaN(chosenNumber))
      Alert.alert('Invalid Input!', `You enter " ${gameNumber} ", and this is not a number`, [{ text: "Ok", style:'destructive', onPress: resetGameNumber }]);
    else if(chosenNumber <= MINVALUE || chosenNumber >= MAXVALUE)
      Alert.alert('Invalid Number!', `You enter ${gameNumber}, this isn't a valid value, please enter a number between ${MINVALUE} and ${MAXVALUE}`, [{ text: "Ok", style:'destructive', onPress: resetGameNumber }])
    else{
      props.setUserNumber(chosenNumber);
      setGameNumber("");
    }
  };

  return (
    <View style={styles.gameStartContainer}>
      <View style={styles.inputArea}>
        <MainInput
          textColor="#ffffff"
          borderColor="#cccccc"
          maxLength={2}
          placeholder="Number..."
          type="number-pad"
          value={gameNumber}
          valueHandler={gameNumberHandler}
        />
      </View>

      <View style={styles.buttonArea}>
        <MainButton
          text="Confirm"
          color="#00cc30"
          textColor="#fff"
          width="45%"
          onPress={confirmationInputHandler}
        />
        <MainButton
          text="Reset"
          color="#990000"
          textColor="#fff"
          width="45%"
          onPress={resetGameNumber}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameStartContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 175,
    backgroundColor: "#202124",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  inputArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GameStart;
