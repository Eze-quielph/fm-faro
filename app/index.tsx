import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { setting } from "../src/Style/Setting";
import { ButtonPrimary } from "../src/components/ui/buttons/button-primary";
import { Title } from "../src/components/ui/text/title";
import { Card_Home } from "../src/components/ui/card/card_home";

export default function Page() {
  const [counter, setCounter] = useState<number>(0);

  const press = () => {
    setCounter(counter + 1);
  };
  return (
    <SafeAreaView>
      <View style={setting.background_dark}>
        <StatusBar />
        <View style={{ marginTop: 50, alignContent:'center', alignItems:'center' }}>
          <Title children="Titulo" />
          <ButtonPrimary children="Comenzar" handlePress={press} />
          <Card_Home/>
        </View>
      </View>
    </SafeAreaView>
  );
}