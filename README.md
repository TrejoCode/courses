# 📱 Trejocode Courses

Aplicación React Native (Android, iOS) production-ready que ofrece una plataforma para acceder a cursos gratuitos en línea.

![Trejocode Courses](https://res.cloudinary.com/trejocode/image/upload/v1586298449/Trejocode/logo_t0otlj.png)

![Home Screen](https://res.cloudinary.com/trejocode/image/upload/v1728098031/Screens/kz3i5md9adjnsagmaojp.png)
![Course Screen](https://res.cloudinary.com/trejocode/image/upload/v1728098031/Screens/cuccfqejfmbnlejhdayp.png)
![Lesson Screen](https://res.cloudinary.com/trejocode/image/upload/v1728098031/Screens/w4b0g73q64k1xgd6gaco.png)
![Settings Screen](https://res.cloudinary.com/trejocode/image/upload/v1728098031/Screens/r4x6qyp4y7leixx0j46q.png)

## 🏷️ Características

- Open source
- Production ready
- Código documentado
- Soporte a modo oscuro
- Alerta de nueva versión
- Integración con Fastlane CI/CD
- Git Hooks, Commitlint, Changelog
- Hermosa UI basada en Native Base
- Integración con Sentry, Firebase Analytics
- Android Flavours, Product Scheme Targets (Development, Staging, Production)

## 📦 Construido con

- Axios
- Sentry
- NativeBase
- React Native
- React Navigation
- Firebase Analytics
- Firebase Remote Config
- Redux Toolkit, RTK Query
- React Native Vector Icons
- React Native Youtube Iframe

## 📐 Requisitos

- Cuenta de Sentry
- Cuenta de Firebase
- Node (versión mínima: 20)

## 🚀 Instalación

Estas instrucciones te proporcionarán una copia de esta base production-ready en funcionamiento en tu máquina local para fines de desarrollo. Consulta la sección de implementación para obtener notas sobre cómo desplegar el proyecto en producción.

```bash
git clone https://github.com/trejocode/courses.git
cd courses
yarn install
```

### ✏️ Renombrar el proyecto y el bundle ID

React Native por defecto inicializa el proyecto con un nombre por defecto, cambiarlo es un tema complicado, además adicionalmente las aplicaciones requieren un ID único para ambas plataformas.

Este proyecto se llama: `courses`

El bundle ID `com.trejocode.courses`

El label del proyecto: `Trejocode - Cursos`

#### Renombrar el proyecto con `react-native-rename`

El ejecutar el siguiente comando:

```bash
npx react-native-rename@latest "app_name" -b "bundle_identifier"
```

Ejemplo de uso:

```bash
npx react-native-rename@latest "Mis cursos" -b "com.mycompany.app"
```

Muchas gracias a: [React Native Rename](https://github.com/junedomingo/react-native-rename#readme)

### 🔥 Instalación de Firebase

Este proyecto utiliza Firebase por lo cual, será requerido un paso de instalación adicional, comparto la guía del sitio Web oficial:

Tip: El proyecto viene listo, solo es necesario generar un nuevo proyecto o existe y generar los archivos:

Android: `google-services.json` en `android/app`, `android/app/src/development`, `android/app/src/staging`

iOS: `GoogleService-Info.plist` enlazarlo con XCode

[Enlace: React Native Firebase](https://rnfirebase.io/)

### 🔑 Gestionar variables de entorno `.env`

Este proyecto esta configurado para utilizar variables de entorno gracias al paquete: `react-native-dotenv, @babel/preset-env`

Es necesario crear un file en el root llamado: `.env`, `.env.development`, `.env.staging`, `.env.production`

Donde puede añadir las variables de entorno que desees, es importante crear su definición de tipos.

Edita el archivo: `app/ts/env.d.ts`:

```
  export interface NativeConfig {
    APP_SENTRY_DSN: string;
    APP_ENVIRONMENT: string;
    APP_API_BASE_URL: string;
    COURSES_APP_VERSION: string;
    COURSES_APP_ENABLE_UPDATES: boolean;
  }
```

Edita los archivo: `.env.*`:

```
APP_ENVIRONMENT = development
APP_API_BASE_URL = https://some.api.com
APP_SENTRY_DSN = UUID

#Firebase
COURSES_APP_ENABLE_UPDATES = true
```

Puedes cargar las variables en donde las requieras:

`import { APP_ENVIRONMENT } from '@env';`

[Documentación de dotenv](https://github.com/goatandsheep/react-native-dotenv)

### ⚠️ Instalación de Sentry

Este proyecto utiliza como reportador de errores Sentry, para configurar Sentry primero debes crear una cuenta de Sentry y ejecutar el siguiente comando:

```
npx @sentry/wizard@latest -s -i reactNative
```

Serás guiado durante toda la instalación.

Finalmente, debes adjuntar el valor de tu DSN en file: `.env.*`

[Documentación de Sentry](https://docs.sentry.io/platforms/react-native/)

### 🇲🇽 Gestionar idiomas de la aplicación

Este proyecto viene preparado para ser multidioma, por defecto utiliza Español e Inglés.

Puede añadir más idiomas, creando el folder con el nuevo idioma: `app/locales/*`

Y exportando desde `app/locales/resources.ts`,

Finalmente extiende el soporte en `app/locales/i18n.ts` en el objeto: `supportedLngs: ['es', 'en', 'other'],`

### 🌠 Cambiar el ícono de la app y el BootScreen

Simplemente sigue el paso de: "Assets generation" del siguiente enlace, generará de manera automática los recursos para Android e iOS

[Documentación oficial de React Native BootSplash](https://github.com/zoontek/react-native-bootsplash/tree/4.7.5#assets-generation)

### 🚀 Ejecutar la app

```bash
npm run android
npm run ios
```

## 🤝 Contribución

¡Esta base está abierta a contribuciones! Si deseas contribuir para mejorarla, sigue los pasos mencionados en la sección de contribución del README.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para más detalles.
