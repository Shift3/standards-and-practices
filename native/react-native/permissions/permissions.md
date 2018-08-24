# Dealing with Permissions

For most applications, you'll have to deal with getting permission from the user. These are typically permissions to use the phone's camera. The process of obtaining permissions is different for Android and IOS, so you'll have to program both unless you're using Expo / CRNA. Additionally, if you're able to use native code, you can find a library such as react-native-permissions to handle it for you.

## With create-react-native-app

(Expo documentation for Permissions)[https://docs.expo.io/versions/latest/sdk/permissions]

With a CRNA app, or an app that has been ejected with ExpoKit, it's mostly likely easiest to use the Permissions Expo module.

## With react-native init

You can either manually set up the permissions in android / ios separately, or you can use a library such as (react-native-permissions)[https://github.com/yonahforst/react-native-permissions] to manage it for you.


(Manually checking android permissions via RN docs)[https://facebook.github.io/react-native/docs/permissionsandroid]

# Manage when users deny Permissions

It's important to set default conditions so that your app doesn't break if a user denies Permission. Make sure to test this rigorously to provide the best user experience possible.
