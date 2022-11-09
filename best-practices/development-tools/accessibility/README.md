# Accessibility

## What is it?

Accessibility is basically making sure web sites are fully inclusive and can be properly accessed by not just people with disabilities, but **everyone**.

The main standard for web accessibility is the Web Content Accessibility Guidelines (WCAG). The main standard is [WCAG 2.0](https://www.w3.org/TR/WCAG20/), but [WCAG 2.1](https://www.w3.org/TR/WCAG21/) came out in June 2018 and will be the main standard going forward.

## Why?

Various governments have accessibility requirements going forward. Some countries, like Australia, have a compliance requirement for all content. Europe has updated its directive requiring compliance on all public sector (non-government) sites. These directives impose fines and/or legal penalties for non-compliance. Our government has imposed accessibility requirements for Information and Communications Technology (ICT) that were updated in January of 2017 in [this article about section 508 of the Rehibilitiation Act](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/overview-of-the-final-rule). This only applies to federal, state, and local government sites. Public sector sites in the US are covered by Title III of the Americans with Disabilities Act. This title has not been updated to include websites.... *yet*.

While this may mean that there is no standard for non-government sites, that does not prevent someone from filing a lawsuit because your site is not able to be used properly by someone with a disability.

## WCAG 2.1 Summary

Bitwise would recommend giving the full standard a read. The criteria falls into four criteria: **Perceivable**, **Operable**, **Understandable** and **Robust**. There are three standards, A, AA, and AAA. Most compliance requirements ask for level AA compliance.

### Perceivable

- Does all your text content have a text alternative (like an alt attribute on an image)?
- If you have audio and/or video content, is it captioned?
- Do you have any instructions that rely solely on color/sound/shape?
- Is your content restricted to one orientation (unless essential)?
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

## Automated Testing Tools

There are some nice tools that can be used to analyze a page. These two are Chrome browser extensions that are super simple to use. This won't cover everything; there are a lot of aspects that require manual review, but this is a good start. You simply activate the plugin on any page in your browser and a sidebar pops up assessing the page. The SI plug-in will even point out the code if you have the inspector open.

- [WAVE Browser Extension for Chrome and Firefox](https://wave.webaim.org/extension/)

-[SiteImprove Browser Extension](https://siteimprove.com/en-us/core-platform/integrations/browser-extensions/)

## VoiceOver (Mac)

Mac has a built in screen reader named "VoiceOver". This can be used to familiarize yourself with how someone who depends on a screen reader experiences your site. Feel free to print out the PDF below to have a set of instructions handy.

[Commands for Activating and Operating Voiceover](./VoiceOverCommands.pdf)