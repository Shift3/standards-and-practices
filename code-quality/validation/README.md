<!-- Last updated 9-25-19 -->

# Input Validation 

Input validation is is your first line of defense when creating a secure application.  

## Whitelist or Blacklist? 

The first concept of good input validation is whitelisting versus blacklisting. Whitelist, or inclusive validation, defines a set of valid characters while blacklist, or exclusive validation, defines a set of invalid characters to try to remove. 

Input validation using blacklisting is generally more challenging to implement so it is better practice to perform validation using whitelisting. A great way of defining a whitelist for input validation is to leverage Regular Expressions(RegEx). 

## RegEx Password Validation Examples (JavaScript)

- Mininum length of any 6 chars but newline: 
```javascript
/^.{6,}$/
```

- Check for at least one uppercase character: 
```javascript
/([A-Z]+)/g
```

- Check for at least one lowercase character:
```javascript
/([a-z]+)/g
```

- Check for at least one numeric character: 
```javascript
/([0-9]+)/g
```


- Check for at least one special character:
```javascript
/([!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~])+/g
```

## RegEx Email Validation Example (JavaScript)

- An email is a string (a subset of ASCII characters) separated into two parts by @ symbol, a "personal_info" and a domain, that is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.

```javascript
/^\w+(?:[\.-]?\w+)*@\w+(?:[\.-]?\w+)*(?:\.\w{2,24})+$/
```

- Fun fact: The longest Top Level domain in English is .cancerresearch which 14 characters. The longest currently in existance is 24 characters.

### The personal_info part contains the following ASCII characters:

- Uppercase (A-Z) and lowercase (a-z) English letters.
- Digits (0-9).
- Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
- Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

### The domain name (e.g com, org, net, in, us, info) part contains letter digits, hyphens, and dots. 

### Examples of valid email id's

- mysite@ourearth.com
- my.ownsite@ourearth.org
- mysite@you.me.net

### Examples of invalid email id's

- mysite.ourearth.com (@ is not present)
- mysite@.com.my (tld (Top Level domain) can not start with dot ".")
- @you.me.net (No character before @)
- mysite123@gmail.b (".b" is not a valid tld)
- mysite@.org.org (tld can not start with dot ".")
- .mysite@mysite.org (an email should not be start with ".")
- mysite()*@gmail.com (here the regular expression only allows character, digit, underscore, and dash)
- mysite..1234@yahoo.com (double dots are not allowed)

## Javascript methods to use with RegEx

- [String.prototype.match() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- [RegExp.prototype.test() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

## Additional Resources for RegEx

- In depth tutorial on RegEx - [regular-expressions.info](https://www.regular-expressions.info/tutorial.html)
- "RegEx Debugging" tool - [regex101.com ](https://regex101.com/)
- Another "RegEx Debugging" tool- [regexr.com](https://regexr.com/)




