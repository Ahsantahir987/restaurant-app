const FoodCardValues = [
  {
    id: "1",
    imageSource:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    title: " Burger",
    price: 12.99,
    category: "Burger",
  },
  {
    id: "2",
    imageSource:
      "https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: " Burger",
    price: 9.99,
    category: "Burger",
  },
  {
    id: "3",
    imageSource:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    title: "Zinger Burger with Fries",
    price: 599,
    category: "Burger",
  },
  {
    id: "4",
    imageSource:
      "https://images.unsplash.com/photo-1625683257212-116d74981941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Burger",
    price: 12.99,
    category: "Burger",
  },
  {
    id: "5",
    imageSource:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
    title: "Burger",
    price: 12.99,
    category: "Burger",
  },
  {
    id: "6",
    imageSource:
      "https://images.unsplash.com/photo-1541592391523-5ae8c2c88d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Fries",
    price: 200,
    category: "Fries",
  },
  {
    id: "7",
    imageSource:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Masala Fries",
    price: 300,
    category: "Fries",
  },
  {
    id: "8",
    imageSource:
      "https://images.unsplash.com/photo-1577715694662-6bcf16c06e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    title: "Loaded Fries",
    price: 400,
    category: "Fries",
  },
  {
    id: "9",
    imageSource:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1384&q=80",
    title: "Chowmein",
    price: 500,
    category: "Pasta",
  },
  {
    id: "10",
    imageSource:
      "https://images.unsplash.com/photo-1614277786110-1a64e457c4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Steak",
    price: 1200,
    category: "Chinese",
  },
  {
    id: "11",
    imageSource:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Momos",
    price: 600,
    category: "Chinese",
  },
  {
    id: "12",
    imageSource:
      "https://photos.smugmug.com/Pakistan/i-V8LQdZd/0/33a83314/X3/pakistan-trip-42-X3.jpg",
    title: "Sajji",
    price: 1200,
    category: "Desi",
  },
  {
    id: "13",
    imageSource:
      "https://images.unsplash.com/photo-1456404823214-a69ef7a1fae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Sajji",
    price: 1200,
    category: "Desi",
  },
  {
    id: "14",
    imageSource:
      "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Biryani",
    price: 500,
    category: "Desi",
  },
  {
    id: "15",
    imageSource:
      "https://images.unsplash.com/photo-1597131628347-c769fc631754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Pasta",
    price: 400,
    category: "Pasta",
  },
  {
    id: "16",
    imageSource:
      "https://images.unsplash.com/photo-1604382353954-7d61d1db1f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    title: "Chicken Tikka",
    price: 1500,
    category: "Pizza",
  },
  {
    id: "17",
    imageSource:
      "https://images.unsplash.com/photo-1609159085964-e47ec0804449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Chicken Tikka",
    price: 1500,
    category: "Pizza",
  },
  {
    id: "18",
    imageSource:
      "https://images.unsplash.com/photo-1609159086308-e8de8a538e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
    title: "Chicken Tikka",
    price: 1500,
    category: "Pizza",
  },
  {
    id: "19",
    imageSource:
      "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Chicken Tikka",
    price: 1500,
    category: "Pizza",
  },
  {
    id: "20",
    imageSource:
      "https://images.unsplash.com/photo-1551782450-3939704166fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    title: "Blue Lime",
    price: 300,
    category: "Drinks",
  },
  {
    id: "21",
    imageSource:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1037&q=80",
    title: "Coffee",
    price: 300,
    category: "Drinks",
  },
  {
    id: "22",
    imageSource:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Cheese Cake",
    price: 300,
    category: "Dessert",
  },
  {
    id: "23",
    imageSource:
      "https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Cone",
    price: 300,
    category: "Dessert",
  },
];

export default FoodCardValues;
