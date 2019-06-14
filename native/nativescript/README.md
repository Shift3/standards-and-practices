# NativeScript

***To avoid Out Of Memory exception:***
1- Try when possible to use small images size.
2- Don't use ImageSource or Base64 encoded string as possible because the Bitmap is transferred to Javascript 
(Javascript garbage collection happens less frequently than Java garbage collection which might lead to Out Of Memory).

***Steps to solve keyboard is covering screen on IOS:***
***Note:*** We are trying to imitate how android behaves and works(Scroll into focused input field and keep it on screen).
So to do that in IOS we have to do the following steps.
*In your UI (HTML/XML) file:
1- Add scroll element as a main parent ```<ScrollView #scrollView>``` and give it #id.
2- Give each input field #id.
3- Define ```returnKeyType``` property for each input field and give them proper value like ```returnKeyType = "next" or returnKeyType = "done"```.
4- Define (returnPress) callback method for each input fields like ```(returnPress)="goToNextField($event)"```.

*In your style sheet file:
1- Give that scroll element full size. 
  ```
  width:100%
  height:100%.
  ```
2- Add stacklayout element as a parent for input fields has bottom padding/margin value like 300.

*In your component class file:
1- Call those input fields in your component class file like ```@ViewChild("email") emailField: ElementRef;```.
2- Do the same for scroll element like ```@ViewChild("scrollView") scrollView: ElementRef;```
3- Define returnPress definition method that would have:
  - Checking active platform to make sure it's IOS. (Because it's already working on android)
  - Determine active input field (That fire returnPress method) using something like ```const textField = <TextField>args.object; ```.
  - Determine next element to make it focused by ```nextTextField.nativeElement.focus();```.
  - Scroll screen to proper position using something like ```scrollView.nativeElement.scrollToVerticalOffset(250);```.

- NativeScript: https://www.nativescript.org/
- Documentation: https://docs.nativescript.org/
- UI: https://www.nativescript.org/ui-for-nativescript 
- Playground: [https://play.nativescript.org](https://play.nativescript.org/?_ga=2.234097438.1027288421.1557440601-1272203479.1537481082)

- Market place: https://market.nativescript.org/
- Sign in to slack community: https://www.nativescript.org/slack-invitation-form
- Angular implementation tutorial: [https://docs.nativescript.org/angular/start/introduction](https://docs.nativescript.org/angular/start/introduction?_ga=2.154685112.1027288421.1557440601-1272203479.1537481082)
- Sidekick tool: [https://www.nativescript.org/nativescript-sidekick](https://www.nativescript.org/nativescript-sidekick?_ga=2.188359464.1027288421.1557440601-1272203479.1537481082)

