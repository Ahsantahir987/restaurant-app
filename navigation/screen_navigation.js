import HomeScreen from "../screens/home";
import FoodItem from "../components/food_items";
import CartScreen from "../screens/cart_screen";
import Profile from "../screens/profile";
import FoodInputScreen from "../screens/food_input_screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodListScreen from "../screens/admin/food_list";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "seagreen",
        tabBarIcon: ({ color, size }) => {
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
        component={HomeScreen}
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
      <Tab.Screen
        name="Add Product"
        options={{ headerShown: false }}
        component={FoodInputScreen}
      />
      <Tab.Screen
        name="Food"
        options={{ headerShown: false }}
        component={FoodListScreen}
      />
    </Tab.Navigator>
  );
}

export default function ScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodItem"
          component={FoodItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
