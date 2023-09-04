import FoodCard from "./food_card";
import React, { useEffect, useState } from "react";

import axios from "axios";
// import fetchFoodData from "../provider/food";
import Icon from "react-native-vector-icons/AntDesign";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
// ... other imports ...

const FoodItem = ({ route, navigation }) => {
  const foods = route.params;
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-2c77a-default-rtdb.firebaseio.com/food.json"
        );
        const fetchedData = response.data;
        console.log(Object.values(fetchedData));
        setFoodData(Object.values(fetchedData));
        setIsLoading(false); // Data fetching is complete
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Data fetching failed
      }
    };

    fetchFoodData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={30} style={{ marginRight: 15 }}></Icon>
        </Pressable>
        <Text style={styles.appBarTitle}>{foods["text"]}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="seagreen"
          style={styles.loadingIndicator}
        />
      ) : (
        <ScrollView>
          {foodData.some(
            (foodCard) => foodCard.category === foods["text"].toLowerCase()
          ) ? (
            foodData.map(
              (foodCard, index) =>
                foodCard.category === foods["text"].toLowerCase() && (
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
            <Text style={styles.text}>
              No items available for this category.
            </Text>
          )}
        </ScrollView>
      )}
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
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FoodItem;
