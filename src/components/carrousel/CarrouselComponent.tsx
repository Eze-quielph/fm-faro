import React, { useState, useEffect, useRef } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, StyleSheet, Dimensions } from "react-native";
import Card from "./Carrousel";

interface CarouselComponentProps {
  data: { image: string; title: string; }[];
}

const { width: screenWidth } = Dimensions.get("window");

const CarouselComponent: React.FC<CarouselComponentProps> = ({ data }) => {
  const carouselRef =
    useRef<Carousel<{ image: string; title: string; description: string }>>(
      null
    );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % data.length;
      setActiveIndex(newIndex);
      carouselRef.current?.snapToItem(newIndex);
    }, 20000); // 20 segundos

    return () => clearInterval(interval);
  }, [activeIndex, data]);

  return (
    <Carousel
      ref={carouselRef}
      layout="default"
      data={data}
      renderItem={({ item }) => (
        <Card
          image={item.image}
          title={item.title}
        />
      )}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 60}
      loop
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
};

export default CarouselComponent;
