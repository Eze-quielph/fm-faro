import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Title_second } from "../text/title_second";
import { Text_second } from "../text/text_second";

export function Card_Home() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Title_second children="Titulo" />
          <Text_second children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat sequi harum aliquam rerum sapiente ea repellendus! Nostrum fugiat nulla porro consequuntur explicabo id nobis quidem iste! Odio, a beatae." />
        </View>
        <View style={styles.nav}>
          <View style={styles.des_hover}></View>
          <View style={styles.des}></View>
          <View style={styles.des}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 'auto',
    height:'auto',
    minHeight:210,
    mixWidth:280
  },
  card: {
    backgroundColor: "#3B3645",
    borderRadius: 28,
    minWidth: 280,
    minHeight: 210,
    alignContent: "center",
    alignItems: "center",
    elevation: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  nav: {
    flexDirection: "row",
    marginTop: 41,
    alignContent: "center",
    alignItems: "center",
  },
  des: {
    backgroundColor: "#3B3645",
    width: 19,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
    elevation: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
  },
  des_hover: {
    backgroundColor: "#4A4458",
    width: 36,
    height: 18,
    borderRadius: 8,
    marginRight: 10,
    elevation: 8,
    shadowColor: "#F7F2FA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
});
