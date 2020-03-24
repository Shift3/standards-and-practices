# App Store Credentials (Expo)

Both the Google Play store and the Apple store have their own form of unique credentials when it comes to being able to create and submit builds. Expo does a good job of handling these for you, especially upon first build. Sometimes, these will expire, and then some knowledge is required to be able to fix your credentials so you can create a build and start updating again.

## What are these credentials?

### iOS Credentials

Apple has three different credentials that need to be managed: The Distribution Certificate, the Provisioning Profile, and the Push notification certificate. Expo does a good write up on these [on their App Signing Site](https://docs.expo.io/versions/latest/distribution/app-signing/) for initial study on what these do.

### Google Credentials

For the Google store, there's only one main certification you need to worry about, the **keystore** file. You'll want to always keep a copy of this locally (more on this below).

## Initial Build

### iOS

When you first go to do a build using `expo build:ios`, it will ask for the appropriate Apple account credentials. Then it asks if you want Expo to handle the additional credentials for you, or if you want to supply your own. But what does this actually do? If you allow Expo to handle it for you, it will create a Distribution Certificate for you, and then store that information on the Expo servers. For your initial build, this is just fine. The same goes for the apps provisioning profile, if one doesn't exist, it will be created for you, which is also stored on the expo servers.

### Android

Much like iOS, Expo will ask if you'd like Expo to handle this for you, or if you want to supply your own files. For your first `expo build:android`, you'll want expo to handle this for you. This will create a keystore and register that keystore via Google as being required to submit builds. This makes that keystore file extremely important. **Be sure to run `expo fetch:android:keystore` immediately after the first build is created, and store the file that it creates inside the respective vault**. If someone else goes to build this project, they will need tha keystore file, and will have to select 'Supply my own files' instead of letting Expo handle it for them.

To reduce the volatility of relying on a keystore, Google did introduce its own version of app signing. Expo has a good writeup on this also on their [App Signing Site](https://docs.expo.io/versions/latest/distribution/app-signing/).

## So what happens if anything expires?

Android keystores do not expire, or at least they haven't in the 13 months I've been using one. But the Distribution certificate and Provisioning profiles do, after 12 months. You can go to the "Certificates" section in the App Store Connect page for the desired apple account to see when these expire to give youreself a heads up. What may catch you is that if you try a build with expired credentials, Expo doesn't always tell you, at least not directly. When you attempt to build, it will simply say "Build failed". You will have to go to the link that expo gives you to track the progess of your builds, and go through the logs to find where it errored. In my case, the offending error was `Error: codesign ident not present in find-identity:`.

Before we start clearing and revoking credentials, it's important to understand what exactly revoking these certificates affects. Revoking a distribution certificate or a provisioning profile **does not affect apps already in production**. These are needed at build time, not run time. This does mean that if someone else is using that certificate or profile to run `expo build:ios` will no longer be able to do so, since when the second developer tries to hit Apple with the now revoked credentials stored on the Expo server, they'll get rejected. (Note: This may not apply if two developers are sharing the same Expo account to build).

When we get to updating Push Notification Tokens, these **will affect apps in production**. More on this topic when I have to update them next month (jr).

You can use `expo build:ios --clear-dist-certs` to clear the Distribution certificate, or `expo build:ios --clear-provisioning-profile` to clear the Provisioning profile, or both. This will wipe the cert from Expos server, but **will not revoke the appropriate certificate on the app store connect page**. Futhermore, if you clear the Distribution certificate from expo servers and try to have Expo create another, it may attempt to create to many certificates and you will get an error.

Provisional profiles work in a similar fashion. If you clear them from the Expo server, it doesn't remove the expired profile from Apple's side. Instead of trying to create a new one, however, it will grab the expired profile, which will again cause an error. This means to refresh your desired credential, you must:

- Go to the App Store Connect page for the appropriate developer account, and head to the Certificates section.
- Revoke/Remove the expired credential
- When you run `expo build:ios`, use the appropriate clear command for **only the credentials you just revoked**
- Tell Expo to "handle it for you" and the build should go through.