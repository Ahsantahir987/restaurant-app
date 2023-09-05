import axios from "axios";

export const fetchCartData = async () => {
  try {
    const response = await axios.get(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/cart.json"
    );
    const fetchedData = response.data;
    // console.log(Object.values(fetchedData));
    return Object.values(fetchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
