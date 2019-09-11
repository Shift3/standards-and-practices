# Xamarin
So, you think you can "Xam?"  I don't know if you think that you can!  At any rate, I'm here to help you and when that doesn't work... to tell you what to do.

## Follow C# Best Practices And Then Some
Xamarin projects employ C#.  As such, you should follow Shift3's best practices for C#.  Consider K&R style and expression body syntax when possible to keep code LOC as readable and *concise* as possible.  Don't make us read three lines for one expression.

https://stackoverflow.com/questions/3048800/how-can-i-set-visual-studio-to-use-kr-style-bracketing

## Know Your Layout Tools
Research `Grid`, `StackLayout` and `RelativeLayout`.  Know what they do and use them *appropriately*.  Don't use `Grid` when you need `StackLayout`, etc.  Don't needlessly nest layouts.  And don't use `AbsoluteLayout` unless you totally need to for a legitimate reason.  And your reason probably isn't.

https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/controls/layouts

## Use MVVM and Data Binding
Code-behind should be used as a last resort but there are certainly reasons to extend your view in your code-behind file.  Don't be a purist, but always endeavor to bind properties and `Command` members.  When commands aren't exposed as a `BindableProperty` member then use `EventToCommand` pattern.

## Use Shell
Xamarin Shell has a glut of benefits.  URL-ish, abstracted navigation is one of them, among others.  Note that this technology is new to Xamarin Forms but do indeed attempt to use it unless you need a completely custom UI and flyout menu.  There are still some growing pains.  For example, as of 09/11/2019 they still don't have a bindable, XAML-based back-button override that works without crashing.

## Consider Prism
Prism is a library that also provides a navigation service, simplified MVVM, dependency injection and simplified EventToCommand (https://prismlibrary.github.io/docs/xamarin-forms/EventToCommandBehavior.html) behavior.  It may be a good fit for your Xamarin application and is used in at least one (as of writing this) Shift3 project, FrontDeskKiosk (https://github.com/Shift3/fusd-front-desk-kiosk).

## Want Examples?  Who Doesn't?
I got what you need right here:

- FrontDeskKiosk, https://github.com/Shift3/fusd-front-desk-kiosk, for Prism implementation, Prism navigation, error-handling, and how to build a custom, reusable control that extends XAML vocabulary.  Targets Android and Windows, UWP.
- KidWatcher, https://github.com/Shift3/FUSDMonitoringAppXamarin, for job building, intents, running as a background worker, etc.  There's basic UI.  Xamarin.Android.
- Clair, https://github.com/Shift3/sinclair-scanner-application, for Xamarin Shell, Forms, camera and linking an application in response to URL clicks (https://github.com/Shift3/sinclair-scanner-application/pull/137).  Targets Android and iOS.

