import {View, ScrollView, Text, StyleSheet} from "react-native";
import {Header} from "../src/components/ui/header/header";

export default function Page(){

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Header />
                </View>
            </ScrollView>
        </View>
    )
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
})