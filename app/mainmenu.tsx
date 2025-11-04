/* Main Menu Screen: 
	- Pantalla principal después del login.
	- Muestra información del usuario y opciones de navegación.
	- Uso de useContext para acceder a los datos del usuario. 
    - Link = navegación declarativa (lo pones en el render, tipo etiqueta).
    - router = navegación programática (lo llamas con lógica, tipo función). */


/* Imports */
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from "expo-router";
import { useContext, useEffect } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MyContext } from "./Context";


export default function Index() {
    const {loginData, setLoginData} = useContext(MyContext);

    /* Redirige al login si loginData es null, evitando bucles de renderizado */
    useEffect(() => {
        if (!loginData) {
            router.replace('/');
        }
    }, [loginData]);

    /* Si no hay loginData, no renderiza nada mientras ocurre la redirección */
    if (!loginData) {
        return null;
    }

    /* Maneja el cierre de sesión mostrando confirmación antes de limpiar el estado */
    const handleLogoutConfirmed = () => {
        setLoginData(null);
        router.replace('/');
    };

    /* Muestra una alerta para confirmar el cierre de sesión */
    const onLogoutPress = () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Deseas cerrar sesión ahora?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Cerrar sesión", style: "destructive", onPress: handleLogoutConfirmed }
            ]
        );
    };

    const formatKey = (k: string) => k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const infoEntries = Object.entries(loginData).filter(([key]) => key !== 'pfp_url');

    return (
        <LinearGradient
            colors={['#272424ff', '#610b0bff', '#8d1d53ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome back!</Text>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={onLogoutPress}
                    accessibilityLabel="Logout"
                >
                    <Text style={styles.logoutButtonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.profileSection}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: loginData.pfp_url }}
                        accessibilityLabel="Profile picture"
                    />
                    <Text style={styles.name}>{`${loginData.firstname} ${loginData.lastname}`}</Text>
                    <Text style={styles.username}>@{loginData.username}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoValue}>{loginData.email}</Text>
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.statCard}>
                            <Text style={styles.statLabel}>XP Level</Text>
                            <Text style={styles.statValue}>{loginData.xp}</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statLabel}>Credits</Text>
                            <Text style={styles.statValue}>{loginData.credits}</Text>
                        </View>
                    </View>

                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>Member ID</Text>
                        <Text style={styles.infoValue}>#{loginData.id}</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Link href="/credits">
                        <Text style={styles.footerText}>Know the ❤️ Sipster Team</Text>
                    </Link>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}


/* Styles */
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    welcomeText: {
        fontSize: 20,
        fontFamily: 'InterMedium',
        color: '#FFFFFF',
        opacity: 0.9,
    },
    logoutButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D4AF37',
    },
    logoutButtonText: {
        color: '#D4AF37',
        fontSize: 14,
        fontFamily: 'InterMedium',
        fontWeight: '500',
    },
    content: {
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#D4AF37',
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontFamily: 'InterSemiBold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    username: {
        fontSize: 16,
        fontFamily: 'InterMedium',
        color: '#D4AF37',
        opacity: 0.9,
    },
    infoContainer: {
        gap: 15,
    },
    infoCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 15,
    },
    statCard: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 15,
        padding: 20,
    },
    infoLabel: {
        fontSize: 14,
        color: '#B3B3B3',
        fontFamily: 'InterRegular',
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'InterMedium',
    },
    statLabel: {
        fontSize: 14,
        color: '#B3B3B3',
        fontFamily: 'InterRegular',
        marginBottom: 5,
    },
    statValue: {
        fontSize: 20,
        color: '#D4AF37',
        fontFamily: 'InterSemiBold',
    },
    footer: {
        marginTop: 30,
        alignItems: 'center',
    },
    footerText: {
        color: '#B3B3B3',
        fontSize: 14,
        fontFamily: 'InterRegular',
    },
});
