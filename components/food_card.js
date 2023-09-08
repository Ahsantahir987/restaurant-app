import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import addCart from "../provider/add_cart";
import { fetchCartData } from "../provider/fetch_cart";

const FoodCard = ({ id, imageSource, title, price }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartData().then((data) => {
      setCart(data);
    });
  }, []);

  const addToCartHandler = () => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      console.log(updatedCart);
    } else {
      const foodData = {
        id: id,
        title,
        price,
        imageSource,
        quantity: 1,
      };
      addCart(foodData);
    }
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
      <Text style={styles.price}>Rs.{price}</Text>
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
    height: hp("23%"),
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
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    marginVertical: 5,
  },
  price: {
    fontSize: hp("2%"),
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
