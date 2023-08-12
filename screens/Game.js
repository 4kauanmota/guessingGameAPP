import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import GameNumber from "../components/game/GameNumber";
import MainButton from "../components/ui/MainButton";
import ListItem from "../components/ui/ListItem";

const generateRandomNumber = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) return generateRandomNumber(min, max, exclude);
  else return random;
};

let minValue = 1;
let maxValue = 100;

const Game = ({ userNumber, gameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [count, setCount] = useState([initialGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("You are lying", "Enter the correct instruction, please", [
        { text: "Ok", style: "destructive" },
      ]);
    } else {
      currentGuess > userNumber
        ? (maxValue = currentGuess)
        : (minValue = currentGuess + 1);

      const newRandomNumber = generateRandomNumber(minValue, maxValue, currentGuess);

      setCurrentGuess(newRandomNumber);
      setCount((prev) => [newRandomNumber, ...prev])
    }
  };

  useEffect(() => {
    minValue = 1;
    maxValue = 100;
  }, [])

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(count);
    }
  }, [currentGuess, userNumber, gameOver]);

  const countLength = count.length;

  return (
    <View style={styles.container}>
      <View style={styles.currentGuessArea}>
        <Title text="Opponent's Guess" color="#ffffff" />
        <GameNumber value={currentGuess} color="#ffffff" />
      </View>

      <View style={styles.plusMinusArea}>
        <MainButton
          text={<Ionicons name="add" size={40} color="#ffffff" />}
          width="30%"
          onPress={nextGuessHandler.bind(this, "greater")}
        />

        <MainButton
          text={<Ionicons name="remove" size={40} color="#ffffff" />}
          width="30%"
          onPress={nextGuessHandler.bind(this, "lower")}
        />
      </View>

      <View style={styles.guessListArea}>
        <FlatList 
        data={count}
        renderItem={(data) => <ListItem position={countLength - data.index} guess={data.item} /> }
        keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '75%'
  },

  currentGuessArea: {
    flex: 2,
    justifyContent: 'flex-end'
    
  },

  plusMinusArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#202124",
    marginTop: 15,
    padding: 10,
    borderRadius: 16,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  guessListArea: {
    flex: 5,
    marginTop: 15,
  },
});

export default Game;