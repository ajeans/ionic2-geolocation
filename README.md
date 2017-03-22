# Setup information
```
ionic info
	Your system information:

	Cordova CLI: 6.5.0 
	Ionic CLI Version: 2.2.1
	Ionic App Lib Version: 2.2.0
	ios-deploy version: Not installed
	ios-sim version: Not installed
	OS: Linux 4.4
	Node Version: v7.7.3
	Xcode version: Not installed

# Creation steps 
```
ionic start --v2 io2geoloc blank
cd io2geoloc
ionic platform add android
```

# Geolocation's hello world
Follow the instructions at https://ionicframework.com/docs/v2/native/geolocation/
```
ionic plugin add cordova-plugin-geolocation
npm install --save @ionic-native/geolocation
```
and copy paste the code from the offcial documentation into app.component.ts

And try to build the application:
```
ionic serve
```
