import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Fontisto";
import Slider from "./slider";

function renderCategory({ iconName, text, navigation }) {
  const handleCategoryPress = () => {
    navigation.push("FoodItem", { text });
  };

  return (
    <TouchableOpacity style={styles.category} onPress={handleCategoryPress}>
      <Icon name={iconName} size={35} color="darkolivegreen" />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Icon reverse name="menu" size={30} color="black" />
        <Text style={styles.appBarTitle}>Restaurant App</Text>
        <Icons name="search" size={25} color="black" />
      </View>
      <Text style={styles.title}>Deals</Text>
      <Slider></Slider>
      <Text style={styles.title2}>Category</Text>
      <View style={styles.row}>
        {renderCategory({
          iconName: "pizza",
          text: "Pizza",
          navigation: navigation,
        })}
        {renderCategory({
          iconName: "hamburger",
          text: "Burger",
          navigation: navigation,
        })}
        {renderCategory({
          iconName: "food-variant",
          text: "Desi",
          navigation: navigation,
        })}
        {renderCategory({
          iconName: "noodles",
          text: "Chinese",
          navigation: navigation,
        })}
      </View>
      <View style={styles.row}>
        {renderCategory({
          iconName: "pasta",
          text: "Pasta",
          navigation: navigation,
        })}
        {renderCategory({
          iconName: "ice-cream",
          text: "Dessert",
          navigation: navigation,
        })}
        {renderCategory({
          iconName: "french-fries",
          text: "Fries",
          navigation: navigation,
        })}
        {renderCategory({
          iconName: "food-fork-drink",
          text: "Drinks",
          navigation: navigation,
        })}
      </View>
      <Text style={styles.title}>Popular Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    backgroundColor: "seagreen",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  appBarTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: "500",
    marginHorizontal: 20,
  },
  category: {
    backgroundColor: "gainsboro",
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

export default HomeScreen;
