# Expo SDK Upgrading process

Upgrading any sort of library/framework can be daunting, fraught with errors. Expo, for the most part handles it well, but there are definitely some gotchas to look out for. This chronicles my experience in upgrading from Expo SDK 32 to SDK 36

## Why upgrade?

When Expo releases an SDK, they support it for around six months, according to their documentation. In practice, it's a little longer than that, but it's still fast enough that you will find your app with a deprecated SDK. If your SDK is deprecated, you may not be able to even open up a development environment.

With SDK 32 and lower, Expo has given it End-Of-Life status. This is mostly because in August of 2019, Google required all their .apk builds to be 64-bit, and SDK 32 and lower build in 32-bit. This means unless you are at at least SDK 33, not only can you not create a development environment, but you also cannot build and subsequently deploy.

## Expo upgrade process

On the [official walkthrough for upgrading the Expo SDK](https://docs.expo.io/workflow/upgrading-expo-sdk-walkthrough/) they **strongly recommend** that you upgrade your SDK incrementally, instead of going straight from 32 to 36.

They also list breaking changes for each step which you should definitely study. The big one is the import structure change from the first step.

You will also want to **make sure your Expo cli is current**. You can `npm uninstall -g expo-cli` and `npm install -g expo-cli` just to be certain. The first stage of the upgrade (32 to 33) did not work correctly when I used an older cli.

## 32 to 33

The instructions on the site worked perfectly here, update the following dependencies in the `app.json` file:

```
{
  "react-native": "https://github.com/expo/react-native/archive/sdk-33.0.0.tar.gz",
  "expo": "^33.0.0",
  "react": "16.8.3"
}
```

Delete the node_modules directory and perform another npm install. If you have the Expo app installed on the simulator, you will need to delete it, and let the builder re-install the Expo app when you attempt to run the app. Failing to do this will result in a React Native version mismatch. There is one other time where this is required.

Be sure to read the notes on the modular format for Expo imports. You will likely need to run `expo install expo-*package-name*` for each one. A trick I used was to search your project for `from 'expo';`. There are a couple of packages where this doesn't apply (Notifications is one of them), but for the most part you will need to make these changes. If you run the app after this upgrade without adjusting to the modular format, you may get a nice warning in the builder telling you about the offending package.

With this step complete, you should (as of Feb. 2020) be able to have a working dev environment.

## 33 to 34

If you attempt to upgrade the SDK without committing the changes from the first update, you will get a warning about making changes on a dirty branch. It is very much recommended that you make a new branch for each stage of the upgrade. You can always delete the unneeded branches when you are done.

The command listed on the walkthrough should now work, `expo upgrade 34.0.0`. You will get questions about upgrading your simulators, I answered no to both.

At this point, things start to get a little dicey. The first error you will likely encounter involves custom fonts; you will get an error saying that the font is not properly loaded through `Font.loadAsync`, even if you are doing so properly. To resolve this, you must take the following steps:

 - In your `package.json` make the following changes
    - `expo` should be `~34.0.3`
    - `expo-font` should be `6.0.1`
 - Delete your `node_modules` folder **and** your `package-lock.json`
 - Run `npm install` again
 - Start the app with `expo start -c`

 This should solve the font problem, and if your app now correctly loads, great! But you may now be getting a different error if you are using `react-navigation`, and that is because the older methods from v3.x do not work.

When I performed an `npm uninstall` and `npm install` it gave me version 4, even with the most recent version being version 5. Looking back, this is likely due to the package name in 5 being changed to `@react-navigation/native`.

I would highly recommend reading the react-navigation documentation for whichever version you are changing to:
- [Version 4.x](https://reactnavigation.org/docs/en/4.x/getting-started.html)
- [Version 5.x](https://reactnavigation.org/docs/en/getting-started.html)

For both 4.x and 5.x you will have to `expo install` a series of dependencies that are listed on the documentation. You will likely get a number of erroneous imports, be sure to check the documentation for importing the different types of navigators. This is especially important if you are using any kind of Tab Navigation. Don't worry about the navigation options, while some have changed a bit, these will not cause the app to crash.

While the following may not hold true if you decide to upgrade to 5.x, but if you correctly update your imports and packages you may notice the following error: `Invariant Violation: requireNativeComponent: "RNCSafeAreaView" was not found in the UIManager.`. In my research, I found this was a conflict between one of the react-navigation sub packages, and the version of the Expo SDK. In other words, react-navigation won't work on any SDK version that isn't 36. That means the next two upgrade will be done blind without having a functional app in between.

## 34 to 35

The cli command in the documentation, `expo upgrade 35.0.0` worked fine for me, although I couldn't verify with a 100% certainty thanks to the react-navigation issue above. You will get the same prompts about updating simulators, go ahead and answer no. If you were getting the RNCSafeView error before, you will still be getting that again here.

## 35 to 36

This time, the command is simply `expo upgrade`, although that is because at the time of this writing the current SDK is version 36. In the future, that may not be the case the command would likely by `expo upgrade 36.0.0` You may notice that the font error from our upgrade to 34 is back! Fortunately, the solution is the same, except you do not have to do any edits to the package.json. Simply delete the `node_modules` folder, delete the `package-lock.json`, run an `npm install` and start the builder with `expo start -c`.

You will also need to perform the same reinstallation of the Expo app on your simulators just like you did going from SDK 32 to 33 to avoid a react mismatch error.

At this point your app should load. If you upgraded react-navigation in the process, take a good hard look at your title bars and navigation structure to make sure everything is okay. Some CSS you may have passed to `navigationOptions` will no longer work. Fortunately, most of these are now given as warnings in the console. For example, with react-navigation 3.x, I was passing `display: none` to hide the title bar, which no longer works.

If you used a date picker back in SDK 32, you will get a deprecation warning in the console and it will point you to the newer version. Be careful, as while the android version behaves much as the previous one did, the iOS one no longer gives the date picker its own modal and just drops the picker in your component.

You may also get deprecation warnings from older methods of React (i.e. if you use `componentWillReceiveProps`). Update as you see fit.

## Making sure your SDK changes stick

One roadblock I ran into was that when I was using the Expo builder to create my app binaries, I noticed the SDK version was still at `32.0`. Upon further inspection, I noticed that *none* of my changes to `app.json` were sticking.

The reason for this is that if you use `--no-publish` as a means to avoid an over-the-air (OTA) update, **the builder will think that you are recreating the same build that had previously been published and use the app.json from the last released build**. That can be... a bummer, and you won't find out until you try to upload the .apk to the Google Play store and it shoots errors out at you, or you submit it to apple and it fails a review with a react-native mismatch error.

You can disable OTA updates with a change to the `app.json` file, but what's worth noting here is that **an SDK update will not trigger an OTA update**. Those updates only work between the same versions of the SDK, so if you're worried about users prematurely grabbing a version with a newer SDK, don't be.


## 36 to 37??

At the time of this writing (3/3/2020), SDK 37 hasn't even been released yet. The reason for this note is a deprecation I received from Apple went transmitting the .ipa to the App Store via the Transporter application: "ITMS-90809", a warning for using `UIWebView`. Apple has said they will stop accepting apps that use this in December of 2020. Expo has already stated in an issue report that this will be fixed in SDK 37. This means that anything released in 2021 or beyond will need an SDK update at that time.

