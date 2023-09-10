import axios from "axios";

export const deleteFood = async (foodId) => {
  try {
    const getresponse = await axios.get(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/food.json"
    );
    const fetchedData = getresponse.data;
    let itemKey = null;
    for (const key in fetchedData) {
      if (fetchedData[key].id === foodId) {
        itemKey = key;
        break;
      }
    }
    // console.log(itemKey);
    if (itemKey !== null) {
      const response = await axios.delete(
        `https://restaurant-2c77a-default-rtdb.firebaseio.com/food/${itemKey}.json`
      );
      if (response.status === 200) {
        return "Food data updated successfully!";
      } else {
        throw new Error("Failed to update food data.");
      }
    }
  } catch (error) {
    console.error("Error deleting food item:", error);
    throw error;
  }
};
