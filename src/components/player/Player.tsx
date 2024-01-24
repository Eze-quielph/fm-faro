import React, { useState, useRef } from "react";
import { LogBox, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PlayerInstance, Player } from "../../services/audio.services";
import { Button } from "react-native-paper";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

type OnPress = () => Promise<void>;

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
      initializeAudioPlayer();
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

  const renderButton = (label: string, onPress: OnPress) => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.7} 
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isPlaying ? (
        <View style={styles.buttonsContainer}>
          {renderButton("Pause", pauseAudio)}
        </View>
      ) : (
        renderButton("Play", playAudio)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    backgroundColor: "#007",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    margin: 5,
    height: 50,
    width: 100,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

export default Reproductor;
