import axios from "axios";

export const updateFoodData = async (foodId, updatedData) => {
  try {
    const getresponse = await axios.get(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/food.json"
    );
    const fetchedData = getresponse.data;

    let itemKey = null;
    // console.log(updatedData);
    for (const key in fetchedData) {
      if (fetchedData[key].id === foodId.item) {
        itemKey = key;
        break;
      }
    }
    // console.log(itemKey);
    if (itemKey !== null) {
      const response = await axios.put(
        `https://restaurant-2c77a-default-rtdb.firebaseio.com/food/${itemKey}.json`,
        updatedData
      );
      if (response.status === 200) {
        return "Food data updated successfully!";
      } else {
        throw new Error("Failed to update food data.");
      }
    }
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
