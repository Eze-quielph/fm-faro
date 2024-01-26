import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CardProps {
  image: string | number;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={typeof image === "number" ? image : { uri: image as string }}
        style={styles.cardImage}
      />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    margin: 5,
    overflow: "hidden",
    elevation: 4,
    width: '100%',
    height: '100%',
  },
  cardImage: {
    paddingRight:5,
    width: "100%",
    height: "90%",
  },
  cardTextContainer: {
    padding: 5,
    color: "#007",
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#007",
  },
  cardDescription: {
    fontSize: 14,
    color: "#007",
  },
});

export default Card;
