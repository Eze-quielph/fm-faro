import React, { useState, useRef } from "react";
import { LogBox, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PlayerInstance, Player } from "../../services/audio.services";
import { Button } from "react-native-paper";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignorar notificaciones de registro por mensaje
LogBox.ignoreAllLogs(); // Ignorar todas las notificaciones de registro

export const Reproductor: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef<Player | null>(null);

  const initializeAudioPlayer = async () => {
    if (!audioPlayer.current) {
      audioPlayer.current = PlayerInstance;
      audioPlayer.current.loadSound();
    }
  };

  const playAudio = async () => {
    try {
      initializeAudioPlayer(); // Cargar el sonido solo si no se ha cargado antes
      await audioPlayer.current?.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error al iniciar la reproducción:", error);
      setIsPlaying(false);
    }
  };

  const pauseAudio = async () => {
    try {
      await audioPlayer.current?.pause();
      setIsPlaying(false);
    } catch (error) {
      console.error("Error al pausar la reproducción:", error);
    }
  };

  const stopAudio = async () => {
    try {
      await audioPlayer.current?.stop();
      setIsPlaying(false);
      await audioPlayer.current?.loadSound();
    } catch (error) {
      console.error("Error al detener la reproducción:", error);
    }
  };

  return (
    <View>
      {isPlaying ? (
        <View style={styles.container}>
          <View style={styles.button}>
            <Button style={styles.button} icon="pause" onPress={pauseAudio}>
              <Text style={styles.buttonText}>Pause</Text>
            </Button>
            <Button style={styles.button} icon="stop" onPress={stopAudio}>
              <Text style={styles.buttonText}>Stop</Text>
            </Button>
          </View>
        </View>
      ) : (
        <View style={styles.button}>
          <Button icon="play" onPress={playAudio}>
            <Text style={styles.buttonText}>Play</Text>
          </Button>
        </View>
      )}
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
    borderRadius: 30,
    width: 120,
    height: 50,
    margin: 5,
    padding: 5,
  },
  buttonText: {
    color: "#001",
    fontFamily: "Roboto",
    fontSize: 14,
  },
});

export default Reproductor;
