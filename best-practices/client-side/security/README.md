# Client-side Security

## How to lock down your browser and the client / user's computer system.

### (Cross site Scripting)[https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS)]:
Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

* How to prevent in Angular: https://angular.io/guide/security#preventing-cross-site-scripting-xss
* How to prevent in React: https://www.netsparker.com/blog/web-security/cross-site-scripting-react-web-applications/
* How to prevent in general: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md


To test for Cross-Site Scripting:
* (Testing for Reflected Cross-Site Scripting)[https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting.html]
* (Testing for Stored Cross-Site Scripting)[https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/07-Input_Validation_Testing/02-Testing_for_Stored_Cross_Site_Scripting.html]
* (Testing for DOM-Based Cross-Site Scripting)[https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/11-Client_Side_Testing/01-Testing_for_DOM-based_Cross_Site_Scripting.html]

For more information, take a look at the (OWASP page)[(https://owasp.org/www-community/attacks/xss/#)].

### HTML 5 Security:
Security best practices related to HTML 5 vulnerabilities and how to prevent:
* https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTML5_Security_Cheat_Sheet.md