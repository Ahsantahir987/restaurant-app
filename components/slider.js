import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

function Slider({ navigation }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    "https://i0.wp.com/www.restaurantmenu.pk/wp-content/uploads/2022/07/burger-o-clock-1.jpg?resize=800%2C330&ssl=1",
    "https://via.placeholder.com/400x200.png",
    "https://via.placeholder.com/400x200.png",
    // Add as many images as you'd like
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) return 0;
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentImageIndex * windowWidth,
        animated: true,
      });
    }
  }, [currentImageIndex]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: "contain",
    borderRadius: 20,
  },
  slide: {
    marginHorizontal: 15,
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 5,
  },
});

export default Slider;
