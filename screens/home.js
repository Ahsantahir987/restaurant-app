import React, { useEffect, useState } from "react";
import FoodCard from "../components/food_card";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Fontisto";
import Slider from "../components/slider";
import Category from "../components/category";
import { fetchFoodData } from "../provider/fetch_food";

function HomeScreen({ navigation }) {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFoodData()
      .then((data) => {
        setFoodData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const groupedFoodItems = {};
  foodData.forEach((foodItem) => {
    if (!groupedFoodItems[foodItem.category]) {
      groupedFoodItems[foodItem.category] = [];
    }
    groupedFoodItems[foodItem.category].push(foodItem);
  });

  const selectedFoodCards = [];
  Object.keys(groupedFoodItems).forEach((category) => {
    const categoryItems = groupedFoodItems[category].slice(0, 2);
    selectedFoodCards.push(...categoryItems);
  });
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Icon reverse name="menu" size={30} color="black" />
        <Text style={styles.appBarTitle}>Restaurant App</Text>
        <Icons name="search" size={25} color="black" />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="seagreen" />
      ) : (
        <ScrollView>
          <Text style={styles.title}>Deals</Text>
          <Slider></Slider>
          <Category navigation={navigation} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Popular Item</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "green",
                  marginRight: 20,
                  marginTop: 13,
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          {selectedFoodCards.map((foodCard, index) => (
            <FoodCard
              key={index}
              id={foodCard.id}
              imageSource={foodCard.imageSource}
              title={foodCard.title}
              price={foodCard.price}
            />
          ))}
          <View style={{ margin: 40 }}></View>
        </ScrollView>
      )}
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
});

export default HomeScreen;
