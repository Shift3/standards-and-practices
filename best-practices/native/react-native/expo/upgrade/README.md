# Expo SDK Upgrading process

Upgrading any sort of library/framework can be daunting, fraught with errors. Expo, for the most part handles it well, but there are definitely some gotchas to look out for. This chronicles my experience in upgrading from Expo SDK 32 to SDK 36

## Why upgrade?

When Expo releases an SDK, they support it for around six months, according to their documentation. In practice, it's a little longer than that, but it's still fast enough that you will find your app with a deprecated SDK. If your SDK is depracated, you may not be able to even open up a development environment.

With SDK 32 and lower, Expo has given it End-Of-Life status. This is mostly because in August of 2019, Google required all their .apk builds to be 64-bit, and SDK 32 and lower build in 32-bit. This means unless you are at at least SDK 33, not only can you not create a development environment, but you also cannot build and subsequently deploy.

## Expo upgrade process

On the [official walkthrough for upgrading the Expo SDK]("https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough/") they **strongly recommend** that you upgrade your SDK incrementally, instead of going straight from 32 to 36.

They also list breaking changes for each step which you should definitely study. The big one is the import structure change from the first step.

You will also want to make sure that you **make sure you expo cli is current**. You can `npm uninstall -g expo-cli` and `npm install -g expo-cli` just to be certain. The first stage of the upgrade (32 to 33) did not work correctly when I used an older cli.

## 32 to 33

The instructions on the site worked perfectly here, update the following dependencies in the `app.json` file:

```
{
  "react-native": "https://github.com/expo/react-native/archive/sdk-33.0.0.tar.gz",
  "expo": "^33.0.0",
  "react": "16.8.3"
}
```

Delete the node_modules directory and perform another npm install. If you have the expo app installed on the simulator, you will need to delete it, and let the builder re-install the expo app when you attempt to run the app. Failing to do this will result in a React Native version mismatch. There is one other time where this is required.

Be sure to read the notes on the modular format for expo imports. You will likely need to run `expo install expo-*package-name*` for each one. A trick I used was to search your project for `from 'expo';`. There are a couple of packages where this doesn't apply (Notifications is one of them), but for the most part you will need to make these changes. If you run the app after this upgrade without adjusting to the modular format, you may get a nice warning in the builder telling you about the offending package.

With this step complete, you should (as of Feb. 2020) be able to have a working dev environment.

## 33 to 34

The command listed on the walkthrough should now work, `expo upgrade 34.0.0`. You will get questions about upgrading your simulators, I answered no to both.

At this point, things start to get a little dicey. The first error you will likely encounter involves custom fonts; you will get an error saying that the font is not properly loaded through `Font.loadAsync`, even if you are doing so properly. To resolve this, you must takek the following steps:

 - In your `package.json` make the following changes
    - `expo` should be `34.0.3`
    - `expo-font` should be `6.0.1`
 - Delete your `node_modules` folder **and** your `package-lock.json`
 - Run `npm install` again
 - Start the app with `expo start -c`

 This should solve the font problem, and if your app now correctly loads, great! But you may now be getting a different error if you are using `react-navigation`, and that is that the older methods from v3.x do not work.

