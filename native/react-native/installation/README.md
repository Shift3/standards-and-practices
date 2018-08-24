# Installing a React Native project.

## What ways are there to start a project?

There are 2 main ways to create a React Native project:

* react-native-init
* create-react-native-app (CRNA)

### react-native init

This was the standard way to construct a React Native App in the past. You can think of this as a 'manual' install. You'll have to configure Xcode and Android Studio to run your application, and you can install library packages that contain native code (Objective-C, Swift, Java)

### create-react-native-app

The team behind React Native have recently transitioned to fully endorsing CRNA in their documentation.  You won't have to configure Xcode or Android studio, as you can run your application through a virtualization layer called Expo. Using Expo, you will NOT be able to install libraries that contain native code unless you eject your project from Expo.

## Pros / Cons of React Native Init

| Pros          | Cons          |
| ------------- |:-------------:|
| Can use Native Code libraries | May need to manually link in Android Studio / Xcode |
| Lots of documentation available |  Cannot use Expo to manage device camera, storage, etc |
| Your application can work more predictably in the background | You need to set up Android Studio / Xcode to run your app |
| ~ | Need to set up individual device to test app on a physical phone |
| ~ | Need to manually set up IOS/ Android permissions |

## Pros / Cons of CRNA

| Pros          | Cons          |
| ------------- |:-------------:|
| Access to the device (contacts, camera, GPS, etc) is simple | Certain features are not possible in Expo (see below) |
| Can run your application through Expo instead of Xcode or Android Studio | Cannot use native code unless you eject |   
| You can eject your app at any time if you need to use Native Code | Crash logging is less descriptive in some instances |
| Testing your app on a physical device takes a few seconds | Ejecting your app can be time consuming |
| Access to Permissions logic is simple | If you want to run your app in a simulator, you'll need to install Xcode and android studio |

## What CRNA cannot do:

Tools are being added to the Expo kit regularly, but there are certain things that are currently impossible without ejecting your application. If you know you're going to need this functionality, it may be smarter to start off with react-native-init. This is by NO MEANS a comprehensive list, make sure to do your research before you begin coding to see if CRNA is a fit with your project.

* Playing audio while the app is closed or screen is turned off.
* Accessing GPS data while the app is closed or the screen is turned off.
* Accessing GPS data using only WIFI on Android
* Advanced push notification control (Push notifications are possible with Expo, but are somewhat limited. Check Expo docs)

## Ejecting a CRNA Project

If you find you need access to native code or background audio after you've began your CRNA app, you can eject your project. It should (theoretically) be the same as if you had started your app with react-native init, but you'll still have access to the ExpoKit (Camera, GPS, Permissions, etc).

While ejecting is always an option for a CRNA project, it's important to know that it will change the file structure of your application.

[Check out the docs on ejecting a CRNA app](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)

## What about EXP init?

You may see docs referring to other ways to create a React Native project, but these are either no longer supported or have been replaced. It's important to be aware of them though, because **ejecting** a CRNA app is very similar to **detaching** a EXP init app, but if you are looking at the wrong docs you will undoubtably run into hard-to-debug issues.
