# Deploy NativeScript-Angular

This tutorial to help to deploy Nativescript app in Google Play and App Store.

## Android and IOS

1. Test your app in a real device.
2. Make sure your app have no mention to ANDROID or IOS in the release notes, if you have one.
3. Run your app in a emulator to take screen shots from them. This screen shots will be used when you create your app profile in Google Play and/or Apple Store. Make sure the images have this specs:
   1. JPEG or 24-bit PNG (not transparent)
   2. Between 320 px and 3,840 px
   3. 16:9 aspect ratio (for landscape screenshots)
   4. Up to 8 MB
4. Create a Feature graphic with this specs:
   1.  JPEG or 24-bit PNG (not transparent)
   2.  1,024 px by 500 px (`Make sure the image have that dimensions`)
   3.  Up to 1 MB
5. Write a long description of your app. This description should give to the user a idea what your app does.
6. Write a introduction, like 1 line long, of your app.
7. Create a link for privacy policy for your app.
8. Create a list of emails, who will test your app before release to production. The list just contains 1 email in each line.

## Deploy to Android

1. Generate a [keystore](https://developer.android.com/studio/publish/app-signing#generate-key) in Android Studio.
2. Save all Keys and passwords in your app Zoho Chamber. That is very important. 
3. Build a (release version)[https://docs.nativescript.org/tooling/publishing/publishing-android-apps] of your app. If you getting error see observation bellow.
4. Optional (but recommended): To make easy in the future, also save the command line in ZoHo Chamber.
5. Go to [Google Play Console](https://play.google.com/console/developers/?pli=1) and login in to your app account.
6. Click on `Create an App`.
7. Go to `Dashboard` and follow all steps to create your app profile. If you need some extra help, you can research on youtube some tutorial. Google keeps changing the GPConsole, so its hard to keep this tutorial updated.
 
 


In case you get this error: `java.lang.RuntimeException: Class not found org.nativescript.widgets.image.Worker.OnImageLoadedListener`, do this:
1. `npm i tns-core-modules-widgets` 
2. `tns platform remove android`
3. `tns platform add android`
4. Rebuild your app.

## Deploy to IOS
