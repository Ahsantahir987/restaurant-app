import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";

const AppBar = ({ title }) => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  appBar: {
    flexDirection: "row",
    backgroundColor: "seagreen",
    height: 80,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default AppBar;
