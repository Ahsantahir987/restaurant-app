const cartItems = [
  {
    id: "1",
    name: "Pizza",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    quantity: 2,
  },
  {
    id: "2",
    name: "Burger",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    quantity: 3,
  },
];

export function addToCart(item) {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  return [...cartItems];
}

export function fetchUpdatedCartData() {
  return cartItems;
}

export default cartItems;
