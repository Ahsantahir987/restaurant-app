import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { addToCart } from "./cart";
import Icon from "react-native-vector-icons/Ionicons";

const FoodCard = ({ id, imageSource, title, price }) => {
  const addToCartHandler = () => {
    addToCart({
      id: id,
      name: title,
      price: price,
      image: imageSource,
    });
  };
  const star = 4;
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: imageSource,
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.cartButton} onPress={addToCartHandler}>
        <Icon name="cart" size={25} color="white" />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.starContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              key={index}
              name={index < star ? "star" : "star-outline"}
              size={18}
              color="gold"
              style={styles.icon}
            />
          ))}
        </View>
      </View>
      <Text style={styles.price}>Rs.{price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "contain",
  },
  cartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginLeft: 15,
    marginBottom: 10,
  },
  row: {
    marginHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starContainer: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    margin: 1,
  },
});

export default FoodCard;
