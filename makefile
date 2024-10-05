# Igual a: npm run android / Para desarrollo, ejecutar en diferentes environments
androidDev:
	npx react-native run-android --mode=developmentdebug --appIdSuffix development

androidStg: 
	npx react-native run-android --mode=stagingdebug --appIdSuffix staging

androidProd:
	npx react-native run-android --mode=productiondebug

# Generar APK y subir a app distribution en diferentes environments
androidDev-release:
	bundle exec fastlane build_development_apk

androidStg-release:
	bundle exec fastlane build_staging_apk

androidProd-release:
	bundle exec fastlane build_production_apk

# Generar APK y ejecutar en diferentes environments en modo "release" de RN
androidDev-release-local: 
	npx react-native run-android --mode=developmentrelease --appIdSuffix development

androidStg-release-local: 
	npx react-native run-android --mode=stagingrelease --appIdSuffix staging

androidProd-release-local: 
	npx react-native run-android --mode=productionrelease

# Generar el bundle de dev aab
androidDevBundle:
	cd android && gradlew bundleDevelopmentRelease

# Generar el bundle de staging aab
androidStgBundle:
	cd android && gradlew bundleStagingRelease

# Generar el bundle de producción aab
androidBundle:
	cd android && gradlew bundleProductionRelease

iosDev:
	npx react-native run-ios --mode=Debug --scheme "Courses - Development"

iosDev-release:
	npx react-native run-ios --mode=Release --scheme "Courses - Development"

iosStg: 
	npx react-native run-ios --mode=Debug --scheme "Courses - Staging"

iosStg-release:
	npx react-native run-ios --mode=Release --scheme "Courses - Staging"

iosProd: 
	npx react-native run-ios --mode=Debug

iosProd-release:
	npx react-native run-ios --mode=Release

#  Actualizar las versiones de las aplicaciones
version-patch:
	npm version patch --no-git-tag-version && bundle exec fastlane update_version

version-minor:
	npm version minor --no-git-tag-version && bundle exec fastlane update_version

version-major:
	npm version major --no-git-tag-version && bundle exec fastlane update_version

# Generar changelog
changelog:
	npx conventional-changelog-cli -i 'CHANGELOG.md' -s -p angular

# Limpiar el gradlew
gradlewClean:
	cd ./android && ./gradlew clean