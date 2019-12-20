# Nodemailer Best Practices

## Sending HTML in Email
 - When sending HTML content in any email, a plain text fallback should be included.
 - Any styles included should be inline. Styles can not be included within a style tag as some email clients will remove the tags and their content.
 - Not all HTML elements are supported in all mail clients. Be sure to check compatibility with several email clients. Issues are most likely to occur with web mail clients or Outlook.

### Nodemailer Example
```javascript
import * as mailer from 'nodemailer';
import * as mg from 'nodemailer-mailgun-transport';

const transport = mailer.createTransport(mg({
  auth: {
    api_key: process.env.MAILER_KEY,
    domain: process.env.MAILER_DOMAIN
  }
}));

transport.sendMail({
  from: `"${fromName}" <${fromEmail}>`,
  replyTo: reply || 'donotreply@managed-castle.com',
  to,
  subject,
  html: htmlContent,
  text: plainTextContent
}, (error, info) => {
  if (error) return error;
});
```
It is acceptable to not include HTML, but not acceptable to exclude the plain text version.

### Example Pug Files
#### welcome.pug
```pug
extends layout

block mainContent
  div(style="font-size: 14px")
    h1 Hello #{user}!
    p Welcome to 
        a(href=resetUrl, target="_blank") #{applicationName}
        |.
    p If you did not request this, please ignore this email.
    p If you did sign up for 
      a(href=resetUrl, target="_blank") #{applicationName}
      |, click below:
    p
    a(href=resetUrl, style="background-color: #1E92C0;border: none;color: white;padding: 6px 12px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;margin: 4px 2px;cursor: pointer;" target="_blank") Confirm Email
    p(style="font-style: italic;") This email was sent from an address that cannot accept incoming email. Please do not reply to this message.
```
#### welcome.text.pug
```pug
| Hello #{user}!
| Welcome to #{applicationName}.
| If you did not request this, please ignore this email.
| If you did sign up for #{applicationName}, click below:
| 
| #{resetUrl}
|
| This email was sent from an address that cannot accept incoming email. Please do not reply to this message.
```