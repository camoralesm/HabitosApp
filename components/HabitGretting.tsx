import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HabitGretting({ nombre = "Hola" }: { nombre?: string }) {
    const fecha = new Date();
    const h = fecha.getHours();
    const saludo = h < 12 ? "Buenos días" : h < 18 ? "Buenas tardes" : "Buenas noches";

    const styles = StyleSheet.create({
        container: {
            gap: 4,
            marginBottom: 16,
            marginVertical: 20,
            alignItems: 'center',
        },
        title: {
            fontSize: 22,
            fontWeight: "700",
        },
        subtitle: {
            fontSize: 12,
            color: "#475569",
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`${saludo}, ${nombre}`}</Text>
            <Text style={styles.subtitle}>Hoy es {fecha.toLocaleDateString()} - </Text>
        </View>
    );
}