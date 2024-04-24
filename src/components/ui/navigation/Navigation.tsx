import React from "react";
import { View, StyleSheet } from "react-native";
import { IcoNavigation } from "./IconNavigation";

interface Props {
  children: string;
  icon: unknown;
  status: boolean;
}

const icons: Props[] = [
  {
    children: "Inicio",
    icon: require('../../../../assets/home.png'),
    status: true,
  },
  {
    children: "Sobre Nosotros",
    icon: require('../../../../assets/about.png'),
    status: true,
  },
  {
    children: "Contacto",
    icon: require('../../../../assets/contact.png'),
    status: true,
  },
];

export function Navigation() {
  return (
    <View style={styles.container}>
      {icons.length > 0 &&
        icons.map(({ children, icon, status }: Props) => (
          <View style={styles.iconContainer} key={children}>
            <IcoNavigation children={children} icon={icon} status={status} />
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#211F26",
    display: "flex",
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    alignContent: 'center',
    minWidth: 358,
    width: "auto",
    minHeight: 70,
    height: "auto",
    borderRadius: 30,
    elevation: 3,
    shadowColor: "#4D4D4D",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
  },
  iconContainer: {
    paddingHorizontal: 10, 
  },
});
