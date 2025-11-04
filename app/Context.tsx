/* Context:
	  - Crea un Contexto global para compartir datos de login entre diferentes pantallas.
	  - createContext: Sirve para crear un contexto global (una especie de “almacén de datos” accesible).
	  - useState: Hook para manejar el estado dentro del proveedor de contexto (para manejar el estado del login). */


/* Imports */
import { createContext, useState } from 'react';


/* Context Creation: 
	- Piensa en esto como el “molde” del contexto.
	- loginData:{} Empieza vacío, aquí se guardarán los datos del usuario logueado. 
	- setLoginData:()=>{} Una función vacía que luego será reemplazada por la real. */
export const MyContext = createContext({
	loginData:{},
	setLoginData:()=>{},
});

/* Context Provider Component:
	- Este componente envolverá la aplicación para proveer el contexto a todas las pantallas.
	- children: Propiedad especial que representa los componentes hijos que serán envueltos por este proveedor.
	- useState({}): Inicializa el estado del loginData como un objeto vacío. 
	- Regresa <MyContext.Provider> que envuelve a los componentes hijos y les da acceso global a esos datos. */
export const MyContextProvider = ({children})=>{
	const [loginData, setLoginData]=useState({});

	return (
		<MyContext.Provider value={{loginData, setLoginData}}>
			{children}
		</MyContext.Provider>
	);
};