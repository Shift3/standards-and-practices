# react-native-init

[React Native Installation Docs  - see: Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html)


## Before you start coding...

If you know you're going to want to develop without Expo, then you'll want to install your app with react-native-init. The official React Native Docs walk you through the process fairly well.

If its not already on your machine, install node and watchman.

Then: `$ npm install -g react-native-cli`

You'll also need to install Xcode, and **allow the Command Line Tools**. This seems to be a common pain point for devs new to React Native / Xcode. Follow the RN docs and you'll be fine.

## Starting a new app

`$ react-native init your_project_name_here`
`$ cd your_project_name_here`
`$ react-native run-ios`

## Running on a device

For most development, it's ideal to run your app in a simulator. It's generally easier, and it makes remote debugging significantly faster. **However**, there may be certain things that you'll need to test on a physical device that will not work on a simulator -- such as using the phone's camera.

In order to test your app on your device, you'll have to set up development permissions on the phone.
[Check the offical docs for a walkthrough to get started using your app on a physical device](https://facebook.github.io/react-native/docs/running-on-device)

## Debugging your application

By default, hotloading with react-native-init is turned off. To see your changes reflected, press cmd+r. You can turn on hotloading and remote debugging in the development menu (cmd+d in ios, cmd+m in android).
**Note:** It is normal for hotloading and remote debugging to make your app run a bit slower.
