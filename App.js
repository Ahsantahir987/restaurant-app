import { StyleSheet, View, Text, Button } from "react-native";

import LoginScreen from "./components/login";
import SignUpScreen from "./components/signup";
import HomeScreen from "./components/home";
import FoodItem from "./components/food_items";
import CartScreen from "./components/cart_screen";
import Profile from "./components/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home2" component={HomeScreen} />
      <HomeStack.Screen name="FoodItem" component={FoodItem} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "coral",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Cart") {
              iconName = "shopping-cart";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="Cart"
          options={{ headerShown: false }}
          component={CartScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
