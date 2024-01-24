import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-paper";

export const Presentation = () => {
  return (
    <View style={styles.containerImage}>
      <View style={styles.textContainer}>
        <Text variant="displayLarge" style={styles.title}>
          FM FARO
        </Text>
        <Text variant="displayMedium" style={styles.titleSeconds}>
          90.5
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Avatar.Image
          size={160}
          source={require("../../../assets/fm-faro-90-5-logo.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50, 
    marginBottom: 100,
  },
  logoContainer: {
    marginRight: 10,
    marginLeft: 10, 
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#00110",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#007",
    elevation: 8
  },
  titleSeconds: {
    fontSize: 36,
    color: "red",
    marginLeft: 100, 
    borderBottomColor: "#004",
    borderRadius: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: 5,

  },
});
