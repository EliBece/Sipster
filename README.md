# 🍷 **Sipster — App móvil con autenticación y conexión remota**

**Sipster** es un prototipo de aplicación móvil minimalista inspirada en el mundo de las bebidas alcohólicas premium.  
Permite al usuario iniciar sesión, recuperar su información desde un sistema remoto y visualizar su perfil dentro de una interfaz moderna, oscura y elegante.

---

## 🎯 **Objetivo del proyecto**
Desarrollar una aplicación móvil que se conecte a un sistema web remoto para validar el inicio de sesión de un usuario previamente registrado y mostrar su información personal.  
Este proyecto fue realizado como parte de la materia **Aplicaciones Móviles**, siguiendo principios de **usabilidad**, **modularidad** y **buenas prácticas de UI/UX**.

---

## ⚙️ **Características principales**
- 🛂 Pantalla de **inicio de sesión**.  
- 👤 Pantalla de **perfil de usuario**, mostrando:
  - Nombre, correo, usuario, créditos, experiencia (XP), ID y foto de perfil.  
- 💡 Pantalla de **créditos**, con información del equipo desarrollador.  
- 🎨 **Diseño moderno y minimalista**, inspirado en el ambiente de bares y cavas.  
- 🧭 Navegación entre pantallas mediante **Expo Router**.  

---

## 🧱 **Estructura del proyecto**
```bash
📦 EXPO-LOGIN-REGISTRO
├── .vscode/              # Configuración del entorno VS Code
├── app/                  # Contiene las pantallas principales (Login, Menú, Créditos, etc.)
│   ├── index.tsx         # Pantalla de inicio de sesión
│   ├── mainmenu.tsx      # Pantalla principal o menú del usuario
│   └── credits.tsx       # Pantalla de créditos
│
├── assets/               # Recursos gráficos (imágenes, íconos, fuentes, etc.)
├── constants/            # Variables o configuraciones reutilizables
│
├── .gitignore            # Archivos y carpetas que Git debe ignorar
├── app.json              # Configuración de la app para Expo
├── eslint.config.js      # Configuración de ESLint
├── package-lock.json     # Control de versiones exactas de dependencias
├── package.json          # Dependencias y scripts del proyecto
├── README.md             # Documentación del proyecto
└── tsconfig.json         # Configuración de TypeScript
```

---

## 🚀 **Cómo ejecutar el proyecto**
1. Clona el repositorio  🖥
```bash
git clone https://github.com/usuario/sipster.git
cd sipster
```

2. Instala las dependencias 📢
```bash
npm install
```

3. Inicia el servidor de desarrollo 🌱
```bash
npx expo start
```

4. Escanea el QR con Expo Go en tu dispositivo móvil 📱

---

## 👩‍💻 **Equipo desarrollador**

[Nombre 1]

[Nombre 2]

✨ “Sipster: autenticación simple, diseño elegante y datos servidos con estilo.”

---