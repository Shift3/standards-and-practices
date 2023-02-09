# Bug Reporting Template

This is a simple template that we are going to begin to use for internal QA testing.
The purpose of this template is to make it easier for a QA person or developer to report bugs and issues during development and also help developers identify and resolve bugs and issues faster.

## Create Labels

For each project the following Labels `minor`, `major` and `catastrophic` must be created to really help filter issues on GitHub.

### To Create New Labels

- On the GitHub repository of your project, click on `Issues`.
- Click on the `Labels` buttons.
- Click on the `New Label` button.
- Insert label name (`minor`, `major`, or `catastrophic`), choose color (optional).
- Click on `Create Label`.

## QA Template

#### copy and paste the template below in a GitHub issue and complete the information.

<pre><code>
<b><u>Date Seen</u></b>
Date the bug was found goes here, include the time, if you are submitting more than one bug.
(mm/dd/yyyy)

<b><u>Versions</u></b>
Operating System and version
Browser and Version
Software name and environment ex. (mappoint staging sandbox).

<b><u>Bug Description</u></b>
A concise description of what the problem is. Pure description, no narrative or conversational language.


<b><u>Steps to Reproduce</u></b>
1. Step by step instructions on how to reproduce this bug.
2. Do not assume anything. 
3. The more detailed your list of instructions. 
4. The easier it is for the developer to track down the problem!

<b><u>Actual Behavior</u></b>
Type what happens when you follow the instructions. This is the manifestation of the bug.

<b><u>Expected Behavior</u></b>
Type what you expected to happen when you followed the instructions. This is important,
because you may have misunderstood something or missed a step, and knowing what you
expected to see will help the developer recognize that.

<b><u>Troubleshooting/Testing Steps Attempted</u></b>
Describe anything you did to try to fix it on your own.

<b><u>Workaround</u></b>
If you found a way to make the program work in spite of the bug, describe how you did it here.
</code></pre>
