import axios from "axios";
export default function addFood(foodData) {
  console.log(foodData);
  axios
    .post(
      "https://restaurant-2c77a-default-rtdb.firebaseio.com/food.json",
      foodData
    )
    .then((response) => {
      // console.log("Data saved successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
}
