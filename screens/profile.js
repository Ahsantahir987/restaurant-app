import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { ThemeProvider } from "react-native-elements";
import { useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phoneNumber: "123-456-7890",
  profileImage: {
    uri: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=2000",
  },
};

export default function Profile() {
  const [useDarkMode, setUseDarkMode] = useState(useColorScheme() === "dark");

  const toggleDarkMode = () => {
    setUseDarkMode(!useDarkMode);
  };

  function profileTile({ title, icon }) {
    return (
      <View style={styles.tileRow}>
        <View style={{ flexDirection: "row" }}>
          <Icon name={icon} size={20} style={{ paddingTop: 3 }} />
          <Text style={styles.tileTitle}>{title}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="arrow-forward-ios" size={20} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ThemeProvider useDark={useDarkMode}>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.card}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <View style={styles.userdata}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.phoneNumber}>{user.phoneNumber}</Text>
            <TouchableOpacity>
              <Text style={styles.editButton}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {profileTile({ title: "Setting", icon: "settings" })}
        <View style={styles.tileRow}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="wb-sunny" size={20} style={{ paddingTop: 3 }} />
            <Text style={styles.tileTitle}>Dark Mode</Text>
          </View>
          <Switch
            style={{ height: 20 }}
            value={useDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={useDarkMode ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
        {profileTile({ title: "Language", icon: "language" })}
        {profileTile({ title: "History", icon: "history" })}
        {profileTile({ title: "Help & Support", icon: "contact-support" })}
      </View>
      <TouchableOpacity>
        <View style={styles.logout}>
          <Text style={styles.logtitle}>Log out</Text>
          <Icon
            name="exit-to-app"
            size={25}
            style={{ paddingTop: 3 }}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  appBar: {
    flexDirection: "row",
    backgroundColor: "seagreen",
    height: 80,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userdata: {
    marginLeft: 20,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#888888",
  },
  phoneNumber: {
    fontSize: 16,
    color: "#888888",
  },
  editButton: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    padding: 5,
  },
  tileRow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tileTitle: {
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 10,
  },
  logout: {
    flexDirection: "row",
    backgroundColor: "seagreen",
    marginTop: 40,
    borderRadius: 10,
    justifyContent: "center",
    padding: 7,
    marginHorizontal: 100,
  },
  logtitle: {
    fontSize: 20,
    fontWeight: "500",
    marginRight: 10,
    color: "white",
  },
});
