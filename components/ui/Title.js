import { StyleSheet, Text } from "react-native";

const Title = (props) => {
  return (
    <Text style={[{color: props.color, borderBottomColor: props.color} ,styles.title]}> { props.text } </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    paddingBottom: 5,
    borderBottomWidth: 3,
    fontFamily: 'montserrat',
    textAlign: 'center'
  }
})

export default Title;