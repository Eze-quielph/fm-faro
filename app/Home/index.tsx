import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {Header} from "../../src/components/ui/header/header";
import {Navigation} from "../../src/components/ui/navigation/Navigation";
export default function Page(){

    const handlePress = ()=>{}

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Header />
                </View>
                <View style={styles.cardContainer}>

                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={handlePress} style={styles.button_primary_dark}>
                        <Text style={styles.text_button_dark}>
                            play
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.navigationContainer}>
                <Navigation/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1B20",
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        width: 269,
        height: 78,
        marginTop: 15
    },
    cardContainer: {
        width:322,
        height: 361,
        gap:8,
        paddingLeft:16,
        paddingTop: 8,
        paddingBottom: 8
    },
    buttonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    button_primary_dark: {
        maxWidth: 138,
        width: "80%",
        height: 40,
        backgroundColor: "#1D1B20",
        borderRadius: 100,
        shadowColor: "#F7F2FA",
        elevation:3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 1,
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_button_dark: {
        color: "#F7F2FA",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        textAlign: "center",
    },
    navigationContainer:{
        position: "absolute",
        bottom: 0,
        width: '100%',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
