import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import Reproductor from "./src/components/player/Player";
import { RedesButtons } from "./src/components/socials/Social";

import { SafeAreaView } from "react-native-safe-area-context";
import CarouselComponent from "./src/components/carrousel/CarrouselComponent";

import { Header } from "./src/components/Header/Header";
import { Presentation } from "./src/components/presentation/Presentation";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

export default function App() {
  const cardsData = [
    {
      image: "",
      title: "Escrito Esta",
      description: "Periódico de la Iglesia",
    },
    {
      image: "",
      title: "Turing Factory",
      description: "Desarrollo de software a medida y productos digitales",
    },
    {
      image: "",
      title: "CCDEMF",
      description: "Iglesia",
    },
    {
      image: "",
      title: "FM FARO 90.5",
      description: "Radio",
    },
  ];

  return (
    <SafeAreaView style={styles.container }>
      <View style={styles.container}>
        <Header/>
        <Presentation/>
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "#F1F1F1",
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
    paddingVertical: 20,
    borderBlockColor: "#001",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 0.5,
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  containerPlayer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
});
