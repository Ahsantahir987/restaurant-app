import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { fetchFoodData } from "../../provider/fetch_food";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Ionicons";
import { deleteFood } from "../../provider/delete_food";
import { RefreshControl } from "react-native";

const FoodListScreen = ({ navigation }) => {
  const [foodData, setFoodData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchFoodData().then((data) => {
      setFoodData(data);
    });
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true); // Start the refreshing animation

    // Fetch new data here (you can use your fetchFoodData function)
    fetchFoodData()
      .then((data) => {
        setFoodData(data);
        setIsRefreshing(false); // Stop the refreshing animation
      })
      .catch((error) => {
        console.error("Error refreshing data: ", error);
        setIsRefreshing(false); // Stop the refreshing animation on error
      });
  };

  const addHandle = () => {
    navigation.push("AddFood", { item: null });
  };

  const handleEdit = (item) => {
    navigation.push("AddFood", { item: item.id });
  };

  const handleDelete = (item) => {
    deleteFood(item.id);
    Alert.alert("Success", "Food data delete successfully!", [
      {
        text: "OK",
        onPress: () => {
          handleRefresh();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Admin Panel</Text>
        <TouchableOpacity onPress={addHandle}>
          <Icons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={foodData}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor="seagreen" // Customize the color of the refresh indicator
          />
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.foodTile}>
              <Image
                source={{ uri: item.imageSource }}
                style={styles.foodImage}
              />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.title}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => handleEdit(item)}
                  >
                    <Icon name="edit" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleDelete(item)}
                  >
                    <Icon name="trash" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginLeft: 10,
  },
  foodTile: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 10,
    padding: 10,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  foodInfo: {
    flex: 1,
    padding: 5,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  editButton: {
    padding: 8,
    backgroundColor: "grey",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  removeButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FoodListScreen;
