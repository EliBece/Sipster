/* Credits Screen:
   - Muestra información sobre el equipo detrás de la aplicación.
   - Incluye un botón para regresar a la pantalla de inicio de sesión. 
   - router: Es un objeto que Expo Router te da para manejar la navegación programática. */


/* Imports */
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export default function Index() {
    return (
        <LinearGradient
            colors={['#420808ff', '#360a1fff', '#1d0202ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Image 
                source={require('../assets/images/credits_image.png')}
                style={styles.logo}
            />
        
            <Text style={styles.title}>Credits</Text>
            
            <View style={styles.teamContainer}>
                <Text style={styles.memberName}>Elizabeth Becerril Pérez</Text>
                <Text style={styles.memberName}>Sofía Becerril Pérez</Text>
            </View>

            <Pressable 
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Text style={styles.backButtonText}>Back to Login</Text>
            </Pressable>

            <Text style={styles.footer}>
                Crafted with ❤️ by the Sipster Dev Team
            </Text>
        </LinearGradient>
    );
}


/* Styles */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 30,
    },
    title: {
        fontSize: 36,
        fontFamily: 'InterSemiBold',
        color: '#FFFFFF',
        marginBottom: 40,
        letterSpacing: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    teamContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    memberName: {
        fontSize: 18,
        fontFamily: 'InterMedium',
        color: '#E0E0E0',
        marginVertical: 10,
        letterSpacing: 0.5,
    },
    backButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#D4AF37',
        marginTop: 20,
    },
    backButtonText: {
        color: '#D4AF37',
        fontSize: 16,
        fontFamily: 'InterMedium',
        fontWeight: '500',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        color: '#B3B3B3',
        fontSize: 14,
        fontFamily: 'InterRegular',
        letterSpacing: 0.5,
    },
});
