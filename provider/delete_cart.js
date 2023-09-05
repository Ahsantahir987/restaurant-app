import axios from "axios";

export const deleteCartItem = async (itemId) => {
  try {
    const firebaseUrl = `https://your-firebase-project.firebaseio.com/cart/${itemId}.json`;
    console.log(firebaseUrl);
    const response = await axios.delete(firebaseUrl);

    if (response.status === 200) {
      console.log(`Item with ID ${itemId} deleted successfully`);
    } else {
      console.error(`Failed to delete item with ID ${itemId}`);
    }
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
