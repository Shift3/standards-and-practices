# React Native

You *must* be running iOS on a Mac with XCode installed to use React Native

## Pure Native or Expo?

There are typically 2 options for React Native development:
1. [Expo](startup/expo.md)  
    * This is the recommended way to start a React Native project because:  
        a. It has an excellent native API for device features that is intuitive and easy to use  
        b. It is the quickest way to get started  
        c. Expo uses their servers to ensure stability of your builds and to allow you to employ push notifications easily  
    * You should read the [caveats](https://facebook.github.io/react-native/docs/getting-started#caveats) on using Expo, but for Shift3, the main drawbacks are:
        1. If your project will need background support (the app should keep running when not in focus) DO NOT use Expo 
2. [Native Code](startup/native-code.md)
    * This is a more difficult project to start up, but you have more flexibility once it's started that with Expo. 

## Then what?
- After you have started up your project, take a look at our [common components](common-components/README.md) for some base starting points.  

- Take a look at how we handle React Native [deployment](deployment/README.md) at Shift3.



