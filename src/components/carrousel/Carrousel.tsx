import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardTextContainer: {
    padding: 10,
    color: "#007",
  },
  cardTitle: {
    fontSize: 18,
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
