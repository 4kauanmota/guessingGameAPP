import { TextInput } from "react-native";
import { StyleSheet, Pressable, Text } from "react-native";

const MainInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={props.textColor + '88'}
      keyboardType={props.type}
      style={[
        { color: props.textColor, borderColor: props.borderColor },
        styles.input,
      ]}
      maxLength={props.maxLength}
      value={props.value}
      onChangeText={props.valueHandler}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    height: 60,
    padding: 4,
    paddingLeft: 15,
    marginBottom: 20,
    fontSize: 18,
  },
});

export default MainInput;
