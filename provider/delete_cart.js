import axios from "axios";

export const deleteCartItem = async (itemId) => {
  try {
    const response = await axios.get(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/cart.json"
    );

    const cartData = response.data;

    let itemKey = null;
    for (const key in cartData) {
      if (cartData[key].id === itemId) {
        itemKey = key;
        break;
      }
    }

    if (itemKey !== null) {
      const deleteResponse = await axios.delete(
        `https://restaurant-2c77a-default-rtdb.firebaseio.com/cart/${itemKey}.json`
      );

      if (deleteResponse.status === 200) {
        console.log(`Item with ID ${itemId} has been deleted.`);
      } else {
        console.error(`Failed to delete item with ID ${itemId}.`);
      }
    } else {
      console.error(`Item with ID ${itemId} not found in the cart.`);
    }
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
