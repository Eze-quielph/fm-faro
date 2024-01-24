import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Linking } from "react-native";

export const RedesButtons: React.FC = () => {
   const openLink = async (url: string) => {
     try {
       await Linking.openURL(url);
     } catch (error) {
       console.error("Error al abrir el enlace:", error);
     }
   };
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon="facebook"
        onPress={() => openLink("https://www.facebook.com/fmfaro905")}
      >
        <Text style={styles.buttonText}>Facebook</Text>
      </Button>
      <Button
        style={styles.button}
        icon="whatsapp"
        onPress={() => openLink("https://wa.me/1155691228")}
      >
        <Text style={styles.buttonText}>Whatsapp</Text>
      </Button>
      <Button
        style={styles.button}
        icon="instagram"
        onPress={() => openLink("https://www.instagram.com/fmfaro905")}
      >
        <Text style={styles.buttonText}>Instagram</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Alinea los botones verticalmente en el centro
    height: 5,
    paddingHorizontal: 10, // Agrega un espaciado horizontal
  },
  button: {
    backgroundColor: "#007",
    borderWidth: 0.6,
    borderColor: "#001",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 30,
    margin: 5,
    height: 50,
    width: 120,
    elevation: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});
