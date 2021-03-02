## Android Development
### Setting up Emulator
###### In Android Studio:
- Select Tools-> SDK Manager
- Select a version of android you'd like to test on
	- In general it's good to test on more than one version of android to make sure your application works on a variety of platforms.
- Select 'OK' to download the Android SDKs you've selected.
- Select Tools -> AVD Manager
- Select 'Create Virtual Device'
- Select Device that you'd like to test on
- Select the Android system image that you downloaded earlier to install on your virtual device.
- 'Finish'

### Setting up Physical Device
You'll need to enable developer tools on your android device. The process for this changes depending on the version of android your phone is running, so [do a search for the steps you'll need to take.](https://www.google.com/search?q=enable+developer+mode+android&oq=enable+developer+mode+android&aqs=chrome.0.0l6.4452j1j1&sourceid=chrome&ie=UTF-8 "do a search for the steps you'll need to take.")
###### On your device, once dev tools are enabled:

- Settings -> Developer Options
- Enable USB Debugging

### Running the Application

###### In Android Studio with Emulator Installed:
**or**
###### In Android Studio with USB-Debbuging-enabled device connected to your machine:

Press the Green Play button and select the device you'd like to run your application on.

### Caveats to running applications on the emulator:

It's important to note that not all functionality will work with the android emulator (this is also true with the iOS emulator). A common example is that the Camera and Voice Recording of the emulator will not respond to any camera that may be connected to your machine. If you need to test photo or video capture in your App, you'll need to use a physical Android device.

## Android Deployment



### Setting up Google Play

###### In the [Google Play Console](https://play.google.com/console "Google Play Console")
- Select 'Create Application'
- Name Your Application

Before you can upload a build to Google Play, You'll need to set up the minimum allowable information about your application. The list of requirements may change, but currently it is:

1. Add a hi-res icon
	- must be 512x512px 32-bit PNG. This can contain an alpha channel, but since alpha channels (aka transparency layer) are not allowed in iOS store apps, it's best to create an icon with no alpha channel to prevent different icons on android/iOS

2. Add a feature graphic
	- 1024x500 JPG or PNG (no alpha channel allowed)
3. Add at least 2 screenshots
	- No alpha channel allowed

4. Select an application category

5. Add short and long descriptions of your application

6. Provide a privacy policy URL

7. Provide a content rating
	- Google Play offers a series of questions that will automatically provide a content rating for you

### Creating an APK

#### What is an APK?
The APK is the file that represents your application. It is uploaded to the Google Play Store and is eventually downloaded on the user's phone, letting them run your application. Emulators and dev-mode phones can run unsigned APKs, but you'll need to create a signed APK to distribute your app to users.

#### What is a signed APK?
A signed APK is an APK that has an attached keystore file. The keystore file contains some additional information about the app and the app uploader. If you're putting the app on the Play Store for the first time, you'll need to create a keystore file. If you're updating an existing app, you'll need the existing keystore before you can update the app on the Google Play Store. **IMPORTANT NOTE:**  Make sure you backup your Keystore after creating it. Once an app is published to the Play Store, it will be impossible to update it if you lose the keystore file or password.

#### Steps to Create a signed APK
###### In Android Studio:
- Build -> Generate Signed APK
- Android Studio will ask for the path to your keystore file and its password. If you don't have one, create one here.
- Set 'Build Type' to 'release' (make note of the APK Destination Folder)
- Make sure 'V1' and 'V2' Signature Versions are both checked.
- Click 'finish'
- After it's done, the APK will be available in the APK Destination Folder

### Deploying to Google Play Store

###### In the [Google Play Console](https://play.google.com/console "Google Play Console"):
- Release Management -> App Releases
- Select 'Manage' on the track you'd like to release to. (Closed tracks only allow testers you specifically add, open tracks allow anyone with the download link to install the app)
- Select 'Create Release'
- Select 'Browse Files' and upload your signed APK
