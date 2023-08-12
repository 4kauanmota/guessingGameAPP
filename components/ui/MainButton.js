import { View } from "react-native";
import { StyleSheet, Pressable, Text } from "react-native";

const MainButton = (props) => {
  return (
    <View style={{ width: props.width }}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => [
          pressed
            ? { backgroundColor: props.color ?? '#1e90ff' }
            : { backgroundColor: props.color ?? '#1e90ff', opacity: 0.8 },
          styles.button,
        ]}
      >
        <Text style={[{ color: props.textColor }, styles.buttonText]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
  },

  buttonText: {
    height: '100%',
    textTransform: "uppercase",
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily: 'montserrat',
  },
});

export default MainButton;
