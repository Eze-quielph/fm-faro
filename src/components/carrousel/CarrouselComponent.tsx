import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, StyleSheet, Dimensions } from "react-native";
import Card from "./Carrousel";

interface CarouselComponentProps {
  data: { image: string; title: string; description: string }[];
}

const { width: screenWidth } = Dimensions.get("window");

const CarouselComponent: React.FC<CarouselComponentProps> = ({ data }) => {
  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={({ item }) => (
        <Card
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 60}
      loop
    />
  );
};

export default CarouselComponent;
