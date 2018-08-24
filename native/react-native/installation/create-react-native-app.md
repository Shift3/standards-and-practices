# create-react-native-app

[React Native Installation Docs - see: Quick Start](https://facebook.github.io/react-native/docs/getting-started.html)


## Before you start coding...
CRNA is nice if you're looking to get working on your code right away, and you won't need background features (background audio or background GPS data while app is closed)

Also, since you can eject your app at any time, it might also be a good idea to start an app with CRNA from the beginning even if you need native code, because it gives you access to the Expo tool kit, making things like permissions and accessing the camera much simpler.

If its not already on your machine, install node.

then: `$ npm install -g create-react-native-app`

## Starting a new app

`$ create-react-native-app your_project_name_here`
`$ cd your_project_name_here`
`$ npm start`

## Running on a device

For most development, it's ideal to run your app in a simulator. It's generally easier, and it makes remote debugging significantly faster. **However**, there may be certain things that you'll need to test on a physical device that will not work on a simulator -- such as using the phone's camera.

With Expo, you can simply download the Expo App from the App Store / Play store and load your app in it with a QR code or text message link. You don't need to configure anything on your device.

## Debugging your application

By default, hotloading with CRNA is turned on. Your changes will automatically load on your app when they are saved. You can turn off hotloading and remote debugging in the development menu (cmd+d in ios, cmd+m in android).

**Note:** It is normal for hotloading and remote debugging to make your app run a bit slower.
