import React, { useEffect, useState } from "react";
import FoodCard from "../components/food_card";
import axios from "axios";
// import FoodCardValues from "../provider/food";
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

function HomeScreen({ navigation }) {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data
    const fetchFoodData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-2c77a-default-rtdb.firebaseio.com/food.json"
        );
        const fetchedData = response.data;
        console.log(Object.values(fetchedData));
        // Update the state variable with the fetched data
        setFoodData(Object.values(fetchedData));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    fetchFoodData();
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
      {isLoading ? ( // Conditionally render loading indicator
        <ActivityIndicator
          size="large"
          color="seagreen"
          style={styles.loadingIndicator}
        />
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
