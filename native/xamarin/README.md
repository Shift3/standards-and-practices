# Xamarin
So, you think you can "Xam?"  I don't know if you think that you can!  At any rate, I'm here to help you and when that doesn't work... to tell you what to do.

## Follow C# Best Practices
Xamarin projects employ C#.  As such, you should follow Shift3's best practices for C#.  @dunlavy will be pushing for K&R style and expression body syntax when possible to keep code LOC as readable and *concise* as possible.  Don't make me read three lines for one expression.

https://stackoverflow.com/questions/3048800/how-can-i-set-visual-studio-to-use-kr-style-bracketing

## Use MVVM and Databinding
Code-behind should be used as a last resort.  Bind properties and `Command` members.  When commands aren't exposed as a `BindableProperty` member then use `EventToCommand` pattern.

## Use Shell
Xamarin Shell has a glut of benefits.  URL-ish, abstracted navigation is one of them, among others.  Note that this technology is new to Xamarin Forms but do indeed attempt to use it unless you need a completely custom UI and flyout menu.

## Consider Prism
Prism is a library that also provides a navigation service, simplified MVVM, dependency injection and EventToCommand (https://prismlibrary.github.io/docs/xamarin-forms/EventToCommandBehavior.html).  It may be a good fit for your Xamarin application and is used in at least one (as of writing this) Shift3 project, FrontDeskKiosk (https://github.com/Shift3/fusd-front-desk-kiosk).