import { Text, StyleSheet } from "react-native";

interface Props {
  /**
   * The text content to display within the button.
   * Defaults to an empty string if not provided.
   */
  children: string;
}
export function Title({ children }: Props) {
  return <Text style={styles.title_dark}>{children}</Text>;
}

const styles = StyleSheet.create({
  title_ligth: {
    color: "#000000",
    fontSize: 32,
    padding: 20,
    lineHeight: 38,
    letterSpacing: 0.5,
    // fontFamily: 'poppins',
    alignItems: "center",
    textAlign: "center",
    elevation: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    textShadowOffset: { width: 4, height: 0 },
  },
  title_dark: {
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.5,
    // fontFamily: 'poppins',
    alignItems: "center",
    textAlign: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    textShadowOffset: { width: 4, height: 0 },
  },
});
