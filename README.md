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
- Git Hooks, Commitlint, Changelog
- Hermosa UI basada en Native Base
- Integración con Sentry, Firebase Analytics, Crashlytics
- Android Flavours, Product Scheme Targets (Development, Staging, Production)

## 📦 Construido con

- Axios
- Sentry
- NativeBase
- React Native
- React Navigation
- Firebase Analytics
- Firebase Crashlytics
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

# iOS (Paso adicional)
npx pod-install
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

## 📁 Estructura del proyecto

    .
    └── courses
        ├── android
        ├── ios
        └── app
            ├── assets
            │   ├── fonts
            │   └── images            <--- Todos los recursos gráficos
            ├── components
            │   └── ComponentA
            │       ├── index.tsx     <--- Componente de uso general, global (Presentación)
            │       └── style.ts      <--- Estilos asociados al componente
            ├── config                <--- Configuraciones de librerías
            ├── constants             <--- Variables, cuyos valores no cambian
            ├── helpers               <--- Funciones especificas ayudan en tareas comunes o repetitivas
            ├── locales               <--- Diccionario de palabras en multiples idiomas
            ├── navigation            <--- Componentes especificos que gestionan la navegación de la aplicación
            ├── redux                 <--- Capa de dominio y infraestructura de datos
            │   ├── api               <--- Gestión de todos los servicios de red
            │   └── slices            <--- Gestión de datos de la aplicación
            ├── screens               <--- Componentes de tipo "pantallas" (Presentación)
            │   └── ScreenA
            │       ├── views         <--- Componentes de tipo sub-vistas, ej: Una sub-vista de tipo tab
            │       ├── components    <--- Componentes específicos que solo aplican a la pantalla
            │       └── styles.ts     <--- Estilos asociados a la pantalla
            └── ts
                └── component.d.ts    <--- Definición de tipos de todos los componentes, vistas, configuraciones

### 📄 Instalar Make

```shell
# Windows
choco install make

# Mac
brew install make

# Ubuntu
sudo apt install make
```

## 🤖 Android

### Product Flavors

- La aplicación cuenta con 3 product flavors, cada una de ellas genera un apk con el sujito del environment

  - `development`: Apunta a los servicios de desarrollo
  - `staging`: Apunta a los servicios de staging
  - `production`: Apunta a los servicios de producción

Puedes ejecutar la aplicación en cada product flavor con `make`

```bash
# Igual a: npm run android / Para desarrollo, ejecutar en diferentes environments
make androidDev
make androidStg
make androidProd

# Generar APK o ejecutar en diferentes environments en modo "release" de RN
make androidDev-release
make androidStg-release
make androidProd-release

# Generar el bundle en diferentes environments abb
make androidDevBundle
make androidStgBundle
make androidBundle
```

## 🍎 iOS

### Targets / Schemes

- La aplicación cuenta con 3 targets / Schemes, cada una de ellas genera un aplicativo apuntando a un environment

  - `development`: Apunta a los servicios de desarrollo
  - `staging`: Apunta a los servicios de staging
  - `production`: Apunta a los servicios de producción

Puedes ejecutar la aplicación en cada product flavor con `make`

```bash
# Igual a: npm run ios / Para desarrollo, ejecutar en diferentes environments
make iosDev
make iosStg
make iosProd

# Generar un aplicativo o ejecutar en diferentes environments en modo "release" de RN
make iosDev-release
make iosStg-release
make iosProd-release
```

## 📚 Contribuciones al proyecto

Este proyecto está configurado con Git Hooks utilizando Husky para garantizar la calidad del código y estandarizar los mensajes de commit.

Al realizar un commit, se ejecutarán los siguientes pasos automáticamente:

1. **Formateo del código**: Se utiliza una herramienta para formatear el código automáticamente antes de confirmar los cambios.
2. **Revisión con ESLint**: El código es analizado por ESLint para identificar y corregir problemas de estilo y errores comunes.
3. **Commitizen**: Para asegurar que los mensajes de commit sigan las convenciones establecidas, se utiliza Commitizen, lo que facilita el trabajo con Conventional Commits.

## Pasos para hacer un commit

1. Realiza tus cambios y añade los archivos al área de preparación (`staging area`).

   ```bash
   git add .
   ```

2. Ejecuta el comando de commit. Husky se encargará de los pasos mencionados anteriormente.
   ```bash
   git commit
   ```

### Versionado de la aplicación

Flujo recomendado:

- Realizar cambios
- Realizar commits y publicarlos
- Actualizar la versión de la aplicación, de ser el caso:

  - `make version-patch`: Versión patch
  - `make version-minor`: Versión minor
  - `make version-major`: Versión major

- Generar el changelog:

  - `make changelog`: Generar changelog de cambios basados en conventional commits y semmver

- Realizar commit y push
- Crear una tag

  - `git tag 1.x.x`

- Hacer push de tags:

  - `git push origin tags`

## 🖌️ Recursos adicionales

### Feature flags

[Enlace de descarga](https://excalidraw.com/#json=SKK0dW0ssy-WTva6xWPMg,LEg2C9HNxnxG9v1K3YNr_A)

| Nombre                     | Descripción                                                                                                                                           | Valor |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| COURSES_APP_VERSION        | Versión actual de la aplicación en tienda                                                                                                             | 1.0.0 |
| COURSES_APP_ENABLE_UPDATES | Habilitar por defecto la verificación de la versión de la aplicación, si se deshabilita entonces no validará la siguiente flag de COURSES_APP_VERSION | true  |

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para más detalles.
