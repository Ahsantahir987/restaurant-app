import axios from "axios";

export const fetchFoodData = async () => {
  try {
    const response = await axios.get(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/food.json"
    );
    const fetchedData = response.data;
    return Object.values(fetchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
