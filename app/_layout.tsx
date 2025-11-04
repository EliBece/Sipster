/* Layout:
    - Define la estructura de navegación de la aplicación.
    - Utiliza el componente Stack de expo-router para manejar las pantallas.
    - Envuelve las pantallas en el MyContextProvider para que todas tengan acceso al contexto. */

	
/* Imports */
import { Stack } from "expo-router";
import { MyContextProvider } from "./Context";


/* Root Layout Component:
	- Este componente es el layout raíz de la aplicación.
	- Envuelve las pantallas en el MyContextProvider para que todas tengan acceso al contexto.
	- Define las pantallas disponibles en la aplicación usando Stack.Screen. */
export default function RootLayout() {
  return (
	<MyContextProvider>
		<Stack>	
			<Stack.Screen name="index" options={{headerShown: false}} />
			<Stack.Screen name="mainmenu"  options={{headerShown: false}} />
			<Stack.Screen name="credits" options={{headerShown: false}} />
		</Stack>
	</MyContextProvider>
  );
}
