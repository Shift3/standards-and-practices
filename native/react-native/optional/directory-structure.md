# Recommended Directory Structure

## App.js

App.js is the entrypoint to your application, and it's most often found in either the main project directory or in SRC.

## SRC Folder

This is where most of the code you write will live.

The subdirectories typically found in SRC are:

### Assets

This has all the images, icons, etc that your app will need.

### Components

This is where a majority of your code will live. Views in React Native are often referred to as components, and it's standard to have a Components folder where your code will live. Typically, these components folders are further broken into subfolders that are parts of your app. ex: Login, AudioPlayer, SettingsMenu, etc.

### Navigation

If you're using react-native-navigation or react-navigation, you'll want to keep all your navigation code in one place.

### Redux

If you're using Redux to manage your state, you may want to keep all the code for it together. Common subfolders include Reducers, Actions, and Types.

## Where are my IOS / Android folders?

If you created an app with `react-native init`, you'll have separate Android and ios folders. Apps created with `create-react-native-app` do not need these folders, but they will be created if you eject from CRNA.
