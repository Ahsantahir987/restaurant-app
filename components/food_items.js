import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import FoodCard from "./food_card";
import FoodCardValues from "./food";
import Icon from "react-native-vector-icons/AntDesign";

const FoodItem = ({ route, navigation }) => {
  const foods = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={30} style={{ marginRight: 15 }}></Icon>
        </Pressable>
        <Text style={styles.appBarTitle}>{foods["text"]}</Text>
      </View>
      <ScrollView>
        {FoodCardValues.some(
          (foodCard) => foodCard.category === foods["text"]
        ) ? (
          FoodCardValues.map(
            (foodCard, index) =>
              foodCard.category === foods["text"] && (
                <FoodCard
                  key={index}
                  id={foodCard.id}
                  imageSource={foodCard.imageSource}
                  title={foodCard.title}
                  price={foodCard.price}
                />
              )
          )
        ) : (
          <Text style={styles.text}>No items available for this category.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 15,
    textAlign: "center",
    marginTop: 300,
  },
  appBar: {
    flexDirection: "row",
    backgroundColor: "seagreen",
    height: 80,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  appBarTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FoodItem;
