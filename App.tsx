import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import Reproductor from "./src/components/player/Player";
import { RedesButtons } from "./src/components/socials/Social";
import { Avatar, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselComponent from "./src/components/carrousel/CarrouselComponent";
import { LinearGradient } from "expo-linear-gradient";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

export default function App() {
  const cardsData = [
    {
      image: "url_imagen_1",
      title: "Título 1",
      description: "Descripción 1",
    },
    {
      image: "url_imagen_2",
      title: "Título 2",
      description: "Descripción 2",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineLarge" style={styles.headerText}>
            FM FARO{" "}
            <Text variant="headlineMedium" style={{ color: "#001" }}>
              90.5
            </Text>
          </Text>
        </View>

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
              size={190}
              source={require("./assets/fm-faro-90-5-logo.jpg")}
            />
          </View>
        </View>
        <View style={styles.containerPlayer}>
          <Reproductor />
        </View>
        <View style={{ flex: 1 }}>
          <CarouselComponent data={cardsData} />
        </View>
        <View
          style={{
            marginBottom: 1,
            bottom: 0,
            flex: 0.6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RedesButtons />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ballContainer: {
    width: "100%",
    height: 200,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  header: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#00090",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#00190",
  },
  containerImage: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  containerPlayer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#001",
    borderBottomWidth: 1,
  },
  logoContainer: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#001",
  },
  titleSeconds: {
    fontSize: 36,
    color: "#001",
    marginLeft: 100,
    borderBottomColor: "#001",
    borderRadius: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 1,
    left: 0,
    right: 0,
    marginBottom: 5,
    backgroundColor: "transparent",
    paddingVertical: 20, // Ajusta según sea necesario
    borderBlockColor: "#001",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 0.5,
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 15,
  },
});

/*
Use Image expo sdk 50
    <Image
            style={styles.image}
            source={require("./assets/fm-faro-90-5-logo.jpg")}
            placeholder={""}
            contentFit="cover"
            transition={1000}
          />
*/
