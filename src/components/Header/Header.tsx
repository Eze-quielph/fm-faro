import { View , StyleSheet} from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
    return (
      <View style={styles.headerTextContainer}>
        <View style={styles.header}>
          <Text variant="bodyLarge" style={styles.headerText}>
            FM FARO{" "}
            <Text variant="bodyLarge" style={{ color: "#006" }}>
              90.5
            </Text>
          </Text>
          <Text variant="labelSmall" style={styles.headerText2}>
            created by Turing Factory
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  headerTextContainer: {
    flex: 0.4,
  },
  headerText: {
    fontSize: 24,
    color: "#007",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#007",
  },
  headerText2: {
    fontSize: 11,
    color: "#007",
  },
});