import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function ListItem({position, guess}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> #{position} </Text>
        <Text style={styles.text}> {guess} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 40,
  },

  text: {
    color: '#ffffff',
    fontFamily: 'montserrat'
  },
})

export default ListItem;