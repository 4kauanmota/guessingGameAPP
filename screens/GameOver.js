import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

import MainButton from "../components/ui/MainButton";
import Title from "../components/ui/Title";

const GameOver = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Title text="Game over" color="#ffffff" />
      </View>

      <View style={styles.sucessArea}>
        <Image
          source={require("../assets/img/success.png")}
          style={styles.sucessImage}
        />
        <Text style={styles.gameOverText}>
          Your phone needed <Text style={styles.highlight}> {props.tries.length} </Text> rounds to
          guess the number <Text style={styles.highlight}> {props.userNumber} </Text>
        </Text>
      </View>

      <View style={styles.newGameArea}>
        <MainButton text="New game" width="65%" textColor="#ffffff" onPress={props.reset}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  titleArea: {
    alignItems: "center",
  },

  sucessArea: {
    alignItems: "center",
  },

  sucessImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000000",
  },

  gameOverText: {
    width: "65%",
    fontFamily: "montserrat",
    marginTop: 20,
    color: "#ffffff",
    textAlign: 'center'
  },

  highlight: {
    fontWeight: "bold",
    color: "#000000",
    fontFamily: "montserrat",
  },

  newGameArea: {
    alignItems: "center",
  },
});

export default GameOver;
