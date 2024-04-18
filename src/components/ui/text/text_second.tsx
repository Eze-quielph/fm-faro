import { Text, StyleSheet } from "react-native";

interface Props {
  /**
   * The text content to display within the button.
   * Defaults to an empty string if not provided.
   */
  children: string;
}
export function Text_second({ children }: Props) {
  return <Text style={styles.title_dark}>{children}</Text>;
}

const styles = StyleSheet.create({
  title_dark: {
    color: "#F7F2FA",
    fontSize: 14,
    padding:6,
    paddingBottom:6,
    lineHeight: 20,
    letterSpacing: 0.25,
    // fontFamily: 'poppins',
    alignItems: "center",
    textAlign: "center",
    flexWrap: "wrap",
    maxWidth: 240,
  },
});
