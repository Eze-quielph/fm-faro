import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const RedesButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} icon="facebook">
        Facebook
      </Button>
      <Button style={styles.button} icon="whatsapp">
        Whatsapp
      </Button>
      <Button style={styles.button} icon="instagram">
        Instagram
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 0.6,
    borderLeftWidth: 0.6,
    borderTopWidth: 0.6,
    borderRightWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: "#001",
    alignItems: "center",
    justifyContent: "center",
    width:120,
    height: 40,
    margin: 5,

  },
  buttonText: {
    color: "#fff",
  },
});