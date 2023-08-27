import React from "react";
import { Touchable } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Fontisto";

import FoodItem from "./food_items";

const images = [
  {
    id: 1,
    url: "https://i0.wp.com/www.restaurantmenu.pk/wp-content/uploads/2022/07/burger-o-clock-1.jpg?resize=800%2C330&ssl=1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
  },
];

function renderCategory({ iconName, text, navigation }) {
  const handleCategoryPress = () => {
    navigation.push("FoodItem", { text });
  };

  return (
    <TouchableOpacity style={styles.category} onPress={handleCategoryPress}>
      <Icon name={iconName} size={35} color="chocolate" />
      {/* <Image source={require("../assets/pizza.png")}></Image> */}
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image
        source={{ uri: item.url }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Icon reverse name="menu" size={30} color="black" />
        <Text style={styles.appBarTitle}>Restaurant App</Text>
        <Icons name="search" size={25} color="black" />
      </View>
      <Text style={styles.title}>Deals</Text>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
      />
      <Text style={styles.title}>Category</Text>
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
    backgroundColor: "chocolate",
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
    marginVertical: 15,
    marginHorizontal: 20,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  category: {
    backgroundColor: "gainsboro",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // borderWidth: 1.5,
    height: 80,
    width: 80,
  },
  row: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default HomeScreen;
