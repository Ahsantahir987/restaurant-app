import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { fetchFoodData } from "../../provider/fetch_food";
import { updateFoodData } from "../../provider/update_food";
import addFood from "../../provider/add_food";

function FoodInputScreen({ route }) {
  const isSet = route.params;

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [imageSourceError, setImageSourceError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [categoryError, setCategoryError] = useState("");

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

  useEffect(() => {
    if (isSet.item) {
      fetchFoodData().then((data) => {
        const item = data.find((item) => item.id === isSet.item);
        setTitle(item.title);
        setPrice(item.price);
        setImageSource(item.imageSource);
        setSelectedOption({ label: item.category, value: item.category });
      });
    }
  }, [isSet.item]);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  const handleSave = () => {
    // Input validation
    let isValid = true;

    if (!title.trim()) {
      setTitleError("Please enter a title.");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!price.trim() || isNaN(Number(price))) {
      setPriceError("Please enter a valid price.");
      isValid = false;
    } else {
      setPriceError("");
    }

    if (!imageSource.trim()) {
      setImageSourceError("Please enter an image URL.");
      isValid = false;
    } else {
      setImageSourceError("");
    }

    if (!selectedOption) {
      setCategoryError("Please select a category.");
      isValid = false;
    } else {
      setCategoryError("");
    }

    if (!isValid) {
      return;
    }

    // Continue with saving if input is valid

    if (isSet.item) {
      const updateData = {
        id: isSet.item,
        title,
        price,
        imageSource,
        category: selectedOption.value,
      };
      const response = updateFoodData(isSet, updateData);
      Alert.alert("Success", "Food data updated successfully!", [
        { text: "OK" },
      ]);
    } else {
      const foodData = {
        id: new Date().getTime().toString(),
        title,
        price,
        imageSource,
        category: selectedOption.value,
      };
      addFood(foodData);
      Alert.alert("Success", "Food data added successfully!", [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={[styles.input, titleError ? { borderColor: "red" } : null]}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={[styles.input, priceError ? { borderColor: "red" } : null]}
        placeholder="Enter price"
        value={`${price}`}
        onChangeText={(text) => setPrice(text)}
      />
      {priceError ? <Text style={styles.errorText}>{priceError}</Text> : null}

      <Text style={styles.label}>Image URL:</Text>
      <TextInput
        style={[styles.input, imageSourceError ? { borderColor: "red" } : null]}
        placeholder="Enter image URL"
        value={imageSource}
        onChangeText={(text) => setImageSource(text)}
      />
      {imageSourceError ? (
        <Text style={styles.errorText}>{imageSourceError}</Text>
      ) : null}

      <Text style={styles.label}>Category:</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </Text>
      </TouchableOpacity>
      {categoryError ? (
        <Text style={styles.errorText}>{categoryError}</Text>
      ) : null}
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
        <View style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    alignItems: "center",
    backgroundColor: "seagreen",
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
  },
  saveButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});

export default FoodInputScreen;
