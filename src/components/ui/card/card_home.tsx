import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

export function Card_Home (){

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.card}></View>
                <View style={styles.nav}>
                    <View style={styles.des_hover}></View>
                    <View style={styles.des}></View>
                    <View style={styles.des}></View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 41,
        justifyContent: 'center',
        alignItems:'center'
    },
    card: {
        backgroundColor: "#3B3645",
        borderRadius: 28,
        minWidth: 280,
        minHeight: 210,
        alignContent: 'center',
        alignItems:'center'
    },
    nav: {
        flexDirection: "row",
        marginTop: 41,
        alignContent:'center',
        alignItems:'center'
    },
    des: {
        backgroundColor: "#3B3645",
        width: 19,
        height: 16,
        borderRadius: 8,
        marginRight: 10,
    },
    des_hover: {
        backgroundColor: "#4A4458",
        width: 36,
        height: 16,
        borderRadius: 8,
        marginRight: 10,
    },
});
