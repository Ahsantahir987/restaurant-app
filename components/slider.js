import React, { useState, useEffect, useRef } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    "https://www.mrcod.pk/wp-content/uploads/2023/07/bouncer-deal-banner-1.webp",
    "https://i0.wp.com/www.restaurantmenu.pk/wp-content/uploads/2022/07/burger-o-clock-1.jpg?resize=800%2C330&ssl=1",
    "https://images.deliveryhero.io/image/fd-pk/LH/omvy-hero.jpg",
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
        x: currentImageIndex * wp("100%"),
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
    width: wp("100%") - 30,
    height: wp("50%"),
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
