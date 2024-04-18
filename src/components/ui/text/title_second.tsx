import { Text, StyleSheet } from "react-native";

interface Props {
  /**
   * The text content to display within the button.
   * Defaults to an empty string if not provided.
   */
  children: string;
}
export function Title_second({ children }: Props) {
  return <Text style={styles.title_dark}>{children}</Text>;
}

const styles = StyleSheet.create({
  title_dark: {
    color: "#F7F2FA",
    fontSize: 24,
    lineHeight: 32,
    paddingHorizontal:10,
    paddingVertical:10,
    // fontFamily: 'poppins',
    alignItems: "center",
    textAlign: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    textShadowOffset: { width: 0, height: 4 },
  },
});
