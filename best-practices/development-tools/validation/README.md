<!-- Last updated 9-25-19 -->

# Input Validation 

Input validation is your first line of defense when creating a secure application.  

## Whitelist or Blacklist? 

The first concept of good input validation is whitelisting versus blacklisting. Whitelist, or inclusive validation, defines a set of valid characters while blacklist, or exclusive validation, defines a set of invalid characters to try to remove. 

Input validation using blacklisting is generally more challenging to implement so it is better practice to perform validation using whitelisting. A great way of defining a whitelist for input validation is to leverage Regular Expressions(RegEx). 

## RegEx Password Validation Examples (JavaScript)

- Mininum length of any 8 chars but newline: 
```javascript
/^.{8,}$/
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

- DISCLAIMER: RegEx email validation should not be your sole source of email validation, rather it should be used to help your UI display an `invalid email` message. Whenever possible, one should include a process to confirm a given email address (e.g. send an email for the user confirm their email address).

- An email is a string (a subset of ASCII characters) separated into two parts by @ symbol, a "personal_info" and a domain, that is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.

### Code Example:
```javascript
/^(?:\S+)@(?:\S+)(?:\.+\S{2,})$/
```

### The personal_info (before the @ symbol) and domain name (after the @ symbol but before the . symbol):

- Can contain any characters of any length except whitespace.

### The Top Level domain(TLD) (e.g com, org, net, in, us, info):
- Can contain and end with any characters of any length except whitespace.
- Must be at least two characters long.

### Alternative Code Example:
```javascript
  /.+@.+\..+/
```

- More permissive than previous example, essentially it allows \'anything\'@\'anything\'.\'anything\'.

### The above example more permissive than the previous example, esstentially it allows for <anythingo>

#### Fun fact: The longest TLD in English is .cancerresearch which is 14 characters. The longest currently in existence is 24 characters.

#### Warning: If using SES, use real email addresses

In some our projects, we use [Amazon SES (Simple Email Service)](https://aws.amazon.com/ses/) to send emails in production.

Please don't send real emails unless you really need to test emails that are being sent out! Real email sending should only be used in production.

If you do so happen to NEED to test out emails, there are a number of known good email addresses Amazon provides: `success@simulator.amazonses.com` or you can use an email address that works such as a personal email. We are trying to prevent bounces.

More information can be found here: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-simulator.html#send-email-simulator-how-to-use

## Javascript methods to use with RegEx

- [String.prototype.match() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- [RegExp.prototype.test() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

## Additional Resources for RegEx

- In depth tutorial on RegEx - [regular-expressions.info](https://www.regular-expressions.info/tutorial.html)
- "RegEx Debugging" tool - [regex101.com ](https://regex101.com/)
- Another "RegEx Debugging" tool- [regexr.com](https://regexr.com/)