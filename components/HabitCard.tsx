import { StyleSheet, Text, View } from "react-native";

type    HabitCardProps = {
    title: string;
    streak: number;
    completed: boolean;
};

const Styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        gap: 6,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardDone: {
        borderWidth: 1,
        borderColor: "#22C55E",
        backgroundColor: "#E0E0E0",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "600",  
        color: "#0F172A",
    },
    badge: {
        fontSize: 12,
        color: "#16A34A",
    },
    streak: {
        fontSize: 12,
        color: "#475569",
    },
});

export default function HabitCard({ title, streak, completed }: HabitCardProps) {
    return(
        <View style={[Styles.card, completed && Styles.cardDone]}>
            <View style={Styles.row}>
                <Text style={Styles.title}>{title}</Text>
                {completed && <Text style={Styles.badge}>Hoy</Text>}
                <Text style={Styles.streak}>🔥 {streak} días</Text>
            </View>
            
        </View>
    );


}