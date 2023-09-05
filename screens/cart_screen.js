import React, { useState, useCallback, useEffect } from "react";
import { fetchCartData } from "../provider/fetch_cart";
import { deleteCartItem } from "../provider/delete_cart";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

export default function CartScreen() {
  const [cart, setCart] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCartData()
      .then((data) => {
        setCart(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            deleteCartItem(item.id);
            return null;
          }
        }
        return item;
      });

      return updatedCart.filter(Boolean);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onRefresh = useCallback(async () => {
    fetchCartData()
      .then((data) => {
        setCart(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.imageSource }} style={styles.itemImage} />
        <View style={styles.itemDetailsContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemPrice}>Rs.{item.price}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            <View style={styles.quantityButtons}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Grand Total: Rs.{calculateTotal().toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.placeOrder}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>Your Cart</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="seagreen" />
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  appBar: {
    flexDirection: "row",
    backgroundColor: "seagreen",
    height: 80,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemDetailsContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "500",
  },
  itemQuantity: {
    fontSize: 16,
    color: "#888",
  },
  itemPrice: {
    fontSize: 16,
    color: "green",
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  quantity: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
  totalContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  placeOrder: {
    backgroundColor: "seagreen",
    textAlign: "center",
    borderRadius: 10,
    marginVertical: 20,
    padding: 10,
    marginHorizontal: 80,
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});
