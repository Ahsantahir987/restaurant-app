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
// import { saveFoodToFirebase } from "../provider/food";
import addFood from "../provider/food";

function FoodInputScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = [
    { label: "Pizza", value: "pizza" },
    { label: "Burger", value: "burger" },
    { label: "Desi", value: "desi" },
    { label: "Chinese", value: "chinese" },
    { label: "Pasta", value: "pasta" },
    { label: "Dessert", value: "dessert" },
    { label: "Fries", value: "fries" },
    { label: "Drinks", value: "drinks" },
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
      title,
      price,
      imageUrl,
      category: selectedOption?.value,
    };
    console.log(foodData);
    // saveFoodToFirebase(foodData);
    addFood(foodData);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
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

      <Button title="Save" onPress={handleSave} style={styles.saveButton} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  dropdownButton: {
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
  saveButton: {
    backgroundColor: "#007AFF",
    color: "#fff",
    fontSize: 16,
  },
});

export default FoodInputScreen;