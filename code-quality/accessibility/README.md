# Accessibility

## What is it?

Accessibility is basically making sure web sites care fully inclusive and can be properly access for **everyone**, not just people with disabilities.

The main standard for web accessibility is the Web Content Accessibility Guidelines (WCAG). The main standard is [WCAG 2.0](https://www.w3.org/TR/WCAG20/), but [WCAG 2.1](https://www.w3.org/TR/WCAG21/) came out in June 2018 and will be the main standard going forward.

## Why?

Various governments have accessibility requirements going forwards. Some countries, like Australia have a compliance requirement for all content. Europe has updates its directive requiring compliance on all public sector (non-government) site or risking fines or legal penalties. In the USA, there are accessibility requirements for Information and Communications Technology (ICT) that was updated in January of 2017 in [this article about section 508 of the Rehibilitiation Act](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/overview-of-the-final-rule). This only applies to federal, state, and local government sites. Public sector sites in the US are covered by Title III of the Americans with Disabilities Act. This title has not been updated to include websites.... *yet*.

While this may mean that there is no standard for non-government sites, that does not prevent someone from filing a lawsuit because your site is not able to be used properly by someone with a disability.

## WCAG 2.1 Summary

I would recommend giving the full standard a read, but here is a main summary of some of the main questions your site would have to answer. The criteria falls into four critera: Perceivable, Operable, Understandable and Robust. There are three standards, A, AA, and AAA. Most compliance requirements ask for level AA compliance.

### Perceivable

- Does all your text content have a text alternative (like an alt attribute on an image)?
- If you have audio and/or video content, is it captioned?
- Do you have any instructions that rely solely on color/sound/shape?
- Is your content restriced to one orientation (unless essential)?
- Are your inputs clear with appropriate attributes for screen readers?
- Are there any visual elements that convey information that only rely on color?
- Is there any audio on your site that automatically plays?
- Are the foreground/background colors on parts of your site easy to read?
- If the text on your site is doubled in size, would your site break?
- Do you have any images with text inside?
- If you have background audio, can it be disabled?
- Does your site require both horizontal and vertical scrolling?
- Is your text properly spaced?

### Operable

- Can your site be completely access through use of a keyboard only?
- Do you apply custom keyboard shortcuts?
- Is there any content that has a time limit?
- Do you have any blinking or scrolling information?
- Is there any flashing content?
- Is there a method to bypass repeated content?
- Does your focus order make sense, and is it visibly obvious what has focus?
- Is the text in your links descriptive?
- Is there more than one way to access different pages on your site?
- Are you using heading tags to describe your content?
- Do you have any functionality that requires a multi-point or path gesture?
- Do you have any events that rely solely on mousedown?
- Are your elements labeled?
- Do you have motion controls?

### Understandable

- How are you determining language?
- If focus changes, does your content change too?
- Is your navigation consistent?
- Are your similar components also consistent in how they work?
- Are you properly handling input errors?
- Are all your inputs labeled?
- If there is an error, do you mention how to correct the error?
- Are you verifying your form submissions?

### Robust

- Do you have start and end tags on all your elements?
- Does your site work on all browsers?


