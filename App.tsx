import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import Reproductor from "./src/components/player/Player";
import { RedesButtons } from "./src/components/socials/Social";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselComponent from "./src/components/carrousel/CarrouselComponent";
import { Header } from "./src/components/Header/Header";
import { Presentation } from "./src/components/presentation/Presentation";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

export default function App() {

  const cardsData = [
    {
      image: require("./assets/escrito-esta-adds.png"),
      title: "Escrito Esta",
      description: " ",
    },
    {
      image: require("./assets/turing-factory-adds.jpg"),
      title: "Turing Factory",
      description: "",
    },
    {
      image: require("./assets/ccdemf-adds.jpeg"),
      title: "CCDEMF",
      description: "",
    },
    {
      image: "",
      title: "FM FARO 90.5",
      description: "",
    },
  ];

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={styles.container}>
        <Box style={styles.container}>
          <Box style={{ flex: 1 }}>
            <Header />
            <Box style={{ flex: 1 }}>
              <Presentation />
            </Box>
            <Box style={styles.containerPlayer}>
              <Reproductor />
            </Box>
          </Box>
          <Box style={{flex:1}}>
            <Box style={{ flex: 0.9 }}>
              <CarouselComponent data={cardsData} />
            </Box>
            <Box
              style={{
                marginBottom: 0.5,
                bottom: 0,
                flex: 0.5,
                alignItems: "center",
                justifyContent: "center",
                left: 0,

                right: 0,
              }}
            >
              <RedesButtons />
            </Box>
          </Box>
          <StatusBar style="auto" />
        </Box>
      </SafeAreaView>
    </GluestackUIProvider>
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

  containerPlayer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",

  },
});
