import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading";

import colors from "./constants/colors";
import GameStart from "./screens/GameStart";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState([]);

  const [fontsLoaded] = useFonts({
    'montserrat': require('./assets/font/Montserrat-Medium.ttf')
  })

  if(!fontsLoaded) 
    return <AppLoading />

  function gameReset() {
    setUserNumber(undefined);
    setGameOver(false);
    setCount([]);
  }

  function gameOverHandler(count) {
    setGameOver(true);
    setCount(count);
  }

  let screen = <GameStart setUserNumber={setUserNumber} />

  if(userNumber) 
    screen = <Game userNumber={userNumber} gameOver={gameOverHandler} />

  if(gameOver && userNumber)
   screen = <GameOver tries={count} userNumber={userNumber} reset={gameReset} /> 

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.gradientContainer}>
        <ImageBackground
          source={require("./assets/img/background.png")}
          style={styles.imageContainer}
          resizeMode="cover"
          imageStyle={{ opacity: 0.15 }}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
