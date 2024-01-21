import { AVPlaybackStatusToSet, Audio } from "expo-av";
import { songUrl } from "../conf/constants/constants";

export class Player {
  _audio: Audio.Sound | null = null;
  _url: string = songUrl;

  constructor(url: string | URL = songUrl) {
    if (typeof url === "string") {
      this._url = url;
    } else {
      this._url = url.toString();
    }
  }

  async loadSound(): Promise<void> {
    try {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        interruptionModeAndroid: 2,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
      const { sound } = await Audio.Sound.createAsync(
        { uri: this._url },
        { shouldPlay: true }
      );
      this._audio = sound;
    } catch (error) {
      console.error("Error al cargar el sonido:", error);
    }
  }

  async play(): Promise<void> {
    console.info("Reproduciendo audio...");
    if (this._audio) {
      try {
        await this._audio.playAsync();
      } catch (error) {
        console.error("Error al reproducir el audio:", error);
      }
    } else {
      console.warn(
        "El objeto _audio es null. Asegúrate de cargar el sonido antes de intentar reproducirlo."
      );
    }
  }

  async stop(): Promise<void> {
    if (this._audio) {
      await this._audio.stopAsync();
    }
  }

  async pause(): Promise<void> {
    if (this._audio) {
      await this._audio.pauseAsync();
    }
  }

  // Clean resource dates
  async unload(): Promise<void> {
    try {
      if (this._audio) {
        await this._audio.unloadAsync();
      }
    } catch (error) {
      console.error("Error al descargar el sonido:", error);
    }
  }
}

export const PlayerInstance = new Player();
