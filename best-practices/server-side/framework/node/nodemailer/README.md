# Nodemailer Best Practices

## Sending HTML in Email
 - When sending HTML content in any email, a plain text fallback should be included.
 - Any styles included should be inline. Styles can not be included within a style tag as some email clients will remove the tags and their content.
 - Not all HTML elements are supported in all mail clients. Be sure to check compatibility with several email clients. Issues are most likely to occur with web mail clients or Outlook.

### Nodemailer Example
```
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