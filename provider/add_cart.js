import axios from "axios";
export default function addCart(cartData) {
  axios
    .post(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/cart.json",
      cartData
    )
    .then((response) => {
      // console.log("Data saved successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
}
