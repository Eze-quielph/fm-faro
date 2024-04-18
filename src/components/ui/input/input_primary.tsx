import {TextInput, StyleSheet } from 'react-native';

interface Props {
  onChangeText: (text: string) => void;
  value: string;
  children: string;
}

export function Input_Primary({ children, onChangeText, value }: Props) {
  return <TextInput placeholder={children} onChangeText={onChangeText} value={value} style={styles.input}/>;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#211F26",
    color: "#FFFFFF",
    height:56,
    width:306,
    paddingLeft:16,
    paddingTop:4,
    paddingBottom:4,
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.5,
    borderRadius:15,
    elevation:8,
    shadowColor: "#F7F2FA",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
});