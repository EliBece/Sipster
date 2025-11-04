/* Index Screen:
	- Pantalla de login con formulario para usuario y contraseña.
	- Uso de fetch para enviar datos a la API.
	- Manejo de estado con useState y useContext. */


/* Imports */
import { Endpoints } from "@/constants/Endpoints";
import * as Crypto from 'expo-crypto';
import { useFonts } from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from "expo-router";
import { useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { MyContext } from "./Context";


export default function Index() {

	const [loaded, error] = useFonts({
		'InterRegular': require('../assets/fonts/Inter-Regular.otf'),
		'InterMedium': require('../assets/fonts/Inter-Medium.otf'),
		'InterSemiBold': require('../assets/fonts/Inter-SemiBold.otf'),
	  });
	const [userValue, setUserValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [failedLogin, setFailedLogin]= useState(false);
	const {loginData, setLoginData}=useContext(MyContext);

	const onButtonLogin = async ()=>
	{
		console.log('Logging in :) ...');
		const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, passValue);
		const form = new FormData();
		form.append('token','code37');  
		form.append('user',userValue);
		form.append('pass', digest);

		fetch( Endpoints.LOGIN , {
			method:'POST',
			body:form
		})
		.then( response=>response.json())
		.then( data => {console.log(data) 
			if(!data.error && data.id)
			{
				setLoginData(data);
				router.replace('/mainmenu');
			}
			else
			{
				setFailedLogin(true);
			}
		})
		.catch( err=>{console.log(err)});
	}

	const onButtonRegister = async ()=>
	{
		console.log('Por implementar ._. ...');
	}

	/* Checando carga de fuentes... */
	if (!loaded) {
		return null;
	}

  return (
		<LinearGradient
			colors={['#310c1dff', '#791c3eff', '#521010ff']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.container}
		>
			
			<Image 
				source={require('../assets/images/login_image.png')} 
				style={{ width: 130, height: 130 }}
				resizeMode="contain"
			/>
			<Text style={styles.title}>Sipster</Text>
			<Text style={styles.subtitle}>Your premium drinking companion</Text>

			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Username</Text>
					<TextInput 
						style={styles.input}
						onChangeText={setUserValue}
						placeholderTextColor="#8E8E8E"
						placeholder="Enter username"
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Password</Text>
					<TextInput 
						style={styles.input}
						onChangeText={setPassValue}
						secureTextEntry
						placeholderTextColor="#8E8E8E"
						placeholder="Enter password"
					/>
				</View>

				{failedLogin && (
					<Text style={styles.error}>Invalid credentials. Please try again.</Text>
				)}

				<Pressable style={styles.signInButton} onPress={onButtonLogin}>
					<Text style={styles.buttonText}>Sign In</Text>
				</Pressable>

				<Text style={styles.registerText}>Don't have an account?</Text>
				<Pressable style={styles.registerButton} onPress={onButtonRegister}>
					<Text style={styles.registerButtonText}>Register</Text>
				</Pressable>
			</View>

			<View style={styles.footer}>
				<Link href="/credits">
					<Text style={styles.footerText}>Credits</Text>
				</Link>
			</View>
		</LinearGradient>
  );
}


/* Styles */
const styles = StyleSheet.create(
	{
		container:{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			padding: 5,
		},
		title:{
			fontFamily:'InterSemiBold',
			fontSize:40, 
			color: '#FFFFFF',
			marginTop: 10,
			textShadowColor: 'rgba(0, 0, 0, 0.3)',
			textShadowOffset: { width: 0, height: 2 },
			textShadowRadius: 4,
			letterSpacing: 1, 
		},
		subtitle:{
			fontFamily:'InterRegular',
			fontSize:16, 
			color: '#E0E0E0',
			marginBottom: 40,
			textAlign: 'center',
			letterSpacing: 0.5,
		},
		formContainer: {
			width: '100%',
			maxWidth: 320,
			alignItems: 'center',
			backgroundColor: 'rgba(255, 255, 255, 0.05)',
			padding: 20,
			borderRadius: 15,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 5,
		},
		inputContainer: {
			width: '100%',
			marginBottom: 20,
		},
		inputLabel: {
			color: '#FFFFFF',
			marginBottom: 8,
			fontSize: 14,
			fontFamily: 'InterMedium',
		},
		input: {
			width: '100%',
			height: 50,
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
			borderRadius: 25,
			paddingHorizontal: 20,
			color: '#FFFFFF',
			fontSize: 16,
			borderWidth: 1,
			borderColor: 'rgba(255, 255, 255, 0.2)',
		},
		signInButton: {
			width: '100%',
			height: 50,
			backgroundColor: '#800020',
			borderRadius: 25,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 20,
			shadowColor: "#600010",
			shadowOffset: {
				width: 0,
				height: 4,
			},
			shadowOpacity: 0.3,
			shadowRadius: 4.65,
			elevation: 8,
			paddingHorizontal: 15, 
		},
		buttonText: {
			color: '#FFFFFF',
			fontSize: 16,
			fontFamily: 'InterSemiBold',
			fontWeight: '600',
			letterSpacing: 0.5, 
			paddingVertical: 2, 
			textAlign: 'center', 
		},
		registerText: {
			color: '#B3B3B3',
			marginTop: 15,
			marginBottom: 10,
			fontSize: 15,
			fontFamily: 'InterRegular',
			textAlign: 'center',
		},
		registerButton: {
			width: '100%',
			height: 50,
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
			borderRadius: 25,
			justifyContent: 'center',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: '#D4AF37',
			marginTop: 5, 
			marginBottom: 10, 
		},
		registerButtonText: {
			color: '#D4AF37',
			fontSize: 16,
			fontFamily: 'InterMedium',
			fontWeight: '600',
			letterSpacing: 0.5, 
			paddingHorizontal: 0, 
		},
		error: {
			color: '#ff8686ff',
			marginBottom: 20,
			textAlign: 'center',
		},
		footer: {
			position: 'absolute',
			bottom: 30,
		},
		footerText: {
			color: '#E0E0E0', 
			fontSize: 14,
			fontWeight: '500',
			fontFamily: 'InterRegular',
		},
	}
)
