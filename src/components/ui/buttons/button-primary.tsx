import {
  GestureResponderEvent,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  /**
   * The function to be called when the button is pressed.
   * Can be asynchronous for handling side effects.
   */
  handlePress: (event: GestureResponderEvent) => void;

  /**
   * The text content to display within the button.
   * Defaults to an empty string if not provided.
   */
  children?: string;
  theme?: boolean;
}

export function ButtonPrimary({ handlePress, children, theme }: Props) {
  return (
    <Pressable onPress={handlePress} style={styles.button_primary_dark}>
      <Text style={styles.text_button_dark}>
        {children ? children : "button"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button_primary_ligth: {
    maxWidth: 138,
    width: "80%",
    height: "auto",
    minHeight: 40,
    backgroundColor: "#F7F2FA",
    borderRadius: 100,
    elevation: 15,
    shadowColor: "#300000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    display:"flex",
    alignContent: "center",
    textAlign: 'center'
  },
  button_primary_dark: {
    maxWidth: 138,
    width: "80%",
    height: 'auto',
    minHeight: 40,
    backgroundColor: "#1D1B20",
    borderRadius: 100,
    elevation: 15,
    shadowColor: "#F7F2FA",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    display:"flex",
    alignContent: "center",
    textAlign: 'center'
  },
  text_button_ligth: {
    color: "#535353",
    fontSize: 14,
    //  fontFamily: 'poppins',
    alignItems: "center",
    textAlign: "center",
    padding: 'auto',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  text_button_dark: {
    color: "#F7F2FA",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    // fontFamily: 'poppins',
    alignItems: "center",
    textAlign: "center",
    padding: 'auto',
},
});
