import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import addFood from "../provider/add_food";
import AppBar from "../components/app_bar";

function FoodInputScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = [
    { label: "Pizza", value: "Pizza" },
    { label: "Burger", value: "Burger" },
    { label: "Desi", value: "Desi" },
    { label: "Chinese", value: "Chinese" },
    { label: "Pasta", value: "Pasta" },
    { label: "Dessert", value: "Dessert" },
    { label: "Fries", value: "Fries" },
    { label: "Drinks", value: "Drinks" },
  ];

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  const handleSave = () => {
    const foodData = {
      id: new Date().getTime().toString(),
      title,
      price,
      imageUrl,
      category: selectedOption?.value,
    };
    console.log(foodData);
    addFood(foodData);
  };

  return (
    <View style={styles.container}>
      <AppBar title="Add Food" />
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />

      <Text style={styles.label}>Image URL:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
      />

      <Text style={styles.label}>Category:</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </Text>
      </TouchableOpacity>
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => selectOption(option)}
              style={styles.option}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      <TouchableOpacity onPress={handleSave}>
        <View style={styles.logout}>
          <Text style={styles.logtitle}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 15,
    color: "#333",
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  dropdownButton: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  logout: {
    alignItems: "center",
    backgroundColor: "seagreen",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    padding: 7,
    marginHorizontal: 100,
  },
  logtitle: {
    fontSize: 20,
    fontWeight: "500",
    marginRight: 10,
    color: "white",
  },
});

export default FoodInputScreen;
