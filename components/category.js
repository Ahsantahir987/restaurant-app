import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

function renderCategory({ text, navigation }) {
  const handleCategoryPress = () => {
    navigation.navigate("FoodItem", { text });
  };

  const categoryImages = {
    Pizza: require("../assets/pizza.png"),
    Burger: require("../assets/burger.png"),
    Desi: require("../assets/desi.png"),
    Chinese: require("../assets/chinese.png"),
    Pasta: require("../assets/pasta.png"),
    Dessert: require("../assets/dessert.png"),
    Fries: require("../assets/fries.png"),
    Drinks: require("../assets/drink.png"),
  };

  return (
    <TouchableOpacity style={styles.category} onPress={handleCategoryPress}>
      <Image source={categoryImages[text]} style={{ height: 30, width: 37 }} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default function Category({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Category</Text>
      <View style={styles.row}>
        {renderCategory({
          text: "Pizza",
          navigation: navigation,
        })}
        {renderCategory({
          text: "Burger",
          navigation: navigation,
        })}
        {renderCategory({
          text: "Desi",
          navigation: navigation,
        })}
        {renderCategory({
          text: "Chinese",
          navigation: navigation,
        })}
      </View>
      <View style={styles.row}>
        {renderCategory({
          text: "Pasta",
          navigation: navigation,
        })}
        {renderCategory({
          text: "Dessert",
          navigation: navigation,
        })}
        {renderCategory({
          text: "Fries",
          navigation: navigation,
        })}
        {renderCategory({
          text: "Drinks",
          navigation: navigation,
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginHorizontal: 20,
  },
  category: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 80,
    width: "22%",
  },
  row: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
