import { View, Text, StyleSheet } from "react-native";

const GameNumber = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[{color: props.color}, styles.value]}> {props.value} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
  },

  value: {
    fontSize: 36,
    fontWeight: "bold"
  }
})

export default GameNumber;