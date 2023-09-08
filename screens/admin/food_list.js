import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { fetchFoodData } from "../../provider/fetch_food";
import Icon from "react-native-vector-icons/FontAwesome";
import AppBar from "../../components/app_bar";

const FoodListScreen = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetchFoodData().then((data) => {
      setFoodData(data);
    });
  }, []);

  const handleEdit = (item) => {
    // Handle edit action here, e.g., navigate to an edit screen
    console.log(foodData);
    console.log(`Editing ${item.title}`);
  };

  const handleDelete = (item) => {
    // Handle delete action here, e.g., show a confirmation dialog
    console.log(`Deleting ${item.title}`);
  };

  return (
    <View style={styles.container}>
      <AppBar title="Food List" />
      <FlatList
        data={foodData}
        keyExtractor={(item) => item.id}
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
