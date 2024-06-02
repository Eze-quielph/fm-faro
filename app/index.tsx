import {ScrollView, StyleSheet, View} from "react-native";
import {Header} from '../src/components/ui/header/header'
import { Image } from 'expo-image';
import {Card_Home} from "../src/components/ui/card/card_home";
import {ButtonPrimary} from "../src/components/ui/buttons/button-primary";

export default function Page() {

  return (

        <View style={styles.container} >
          <ScrollView >
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/welcome.png')} />
          </View>
          <View style={styles.CardContainer}>
            <Card_Home/>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonPrimary handlePress={()=> console.info('')} link='/Home' children={'Bienvenido'} />
          </View>
          </ScrollView>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: "#1D1B20",
    width: "100%",
    height: "100%",
    alignItems: 'center',
    alignContent: 'center',
  },
  headerContainer: {
    display: "flex",
    width: 269,
    height: 78,
    marginTop: 15
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    alignContent:'center',
    marginBottom:32,
    marginTop:37,
    maxWidth:328,
    maxHeight:232,
    height: 'auto',
      width: 'auto'
  },
  image: {
   objectFit: 'cover',
    width: "100%",
    height: "100%",
  },
  CardContainer: {
      maxWidth:'auto',
      maxHeight:'auto',
    minWidth: 325,
    minHeight: 279,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 32
  },
  buttonContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
})