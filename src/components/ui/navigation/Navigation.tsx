import React from "react";
import { View, StyleSheet } from "react-native";
import {useNavigation, useRootNavigation } from "expo-router";
import { IcoNavigation } from "./IconNavigation";

interface Props {
  children: string;
  link: string,
  icon: unknown;
  status: boolean;
}

export function Navigation() {
  const navigation = useRootNavigation();
  const router = navigation?.getCurrentRoute();

  const [icons, setIcons] = React.useState<Props[]>([]);

  React.useEffect(() => {
    const updateIcons = () => {
      const updatedIcons = [
        {
          children: "Inicio",
          link: 'Home',
          icon: require('../../../../assets/home.png'),
          status: getPatchStatus(router, 'Home'),
        },
        {
          children: "Sobre Nosotros",
          link: 'About',
          icon: require('../../../../assets/about.png'),
          status: getPatchStatus(router, 'About'),
        },
        {
          children: "Contacto",
          link: 'Contact',
          icon: require('../../../../assets/contact.png'),
          status: getPatchStatus(router, 'Contact'),
        },
      ];
      setIcons(updatedIcons);
    };

    updateIcons();
  }, [router]);

  const getPatchStatus = (directions: any, route: string): boolean => {
    const key: string = directions?.name.split('/')[0] || '';
    return key === route;
  };

  return (
      <View style={styles.container}>
        {icons.length > 0 &&
            icons.map(({ children, icon, status, link }: Props) => (
                <View style={styles.iconContainer} key={children}>
                  <IcoNavigation link={link} children={children} icon={icon} status={status} />
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
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
});
