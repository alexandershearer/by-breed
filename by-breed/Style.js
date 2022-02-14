import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Style({ name, value }) {
    let stars = "";
    for (let i = 0; i < value; i += 1) {
        stars += "☆";
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.value}>{stars}</Text>
        </View>
    );
}

export default Style;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 7,
    },

    name: {
        fontSize: 14,
        fontFamily: "Futura",
        color: "#ffffff",
        fontWeight: "100",
    },

    value: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: "500",
    },
});