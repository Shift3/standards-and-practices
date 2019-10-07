# Acceptance Testing

## Why Acceptance Tests are Important

- Writing the Acceptance Test lets the dev review their work. It can be very helpful in confirming that features are complete and that all edge cases are handled when describing what to do to a tester.
- Acceptance testing helps find problems that the dev might not have experienced: issues coming from different hardware/environments, or a tester performing an action in a different way than the devs. Developers can get too close to their work and not approach their product the same way an end user does.
- Acceptance testing saves money, time, and frustration. It is better to find issues from someone who can explain and demonstrate how they caused it, rather than from an upset client. It's also easier to fix an issue earlier in the development timeframe than later when potentially more functionality is built on top of the problem.

## How to create an Acceptance Test

- Setup info - the tester needs to know where and how to perform a test. They will need a website URL/instructions on what to download, instructions on how to make an account or be provided credentials. They also need to know if they have to test with specific hardware, software, web browsers, etc.
- A list of steps to perform the tests. This can be centralized in a primary GitHub issue with the steps given in a codeblock showing raw markdown that the tester can paste into their own issue. This allows the dev to write the steps in one spot, and each tester can create their own copy.
- The steps given by the dev should cover the minimum amount of functionality that the tester needs to test. Testers should try to find issues and bugs beyond the listed instructions. The instructions are a starting point and give the tester an idea of how the feature should work.
- The QA person will create their own issue, blank to start, which they will not assign.
- The dev will assign the issue back to the QA tester with a link to the central issue where they can get the tests and begin testing.
- The QA tester will update the issue (original issue, not in a comment) with the acceptance tests from the primary issue.
- This allows the QA tester to be able to edit the QA tests (checkboxes) in the body of the issue. Using checkboxes in the body of the issue will update the overall issue progress. This helps devs and PMs get a higher level view of how testing is coming along.
- Additional issues/bugs/comments/dialog from the QA tester can go into comments below.
- Each QA tester should have their own issue to keep the conversations separate.
- The devs are responsible for figuring out how to map QA results to separate GitHub issues, and finding the appropriate repo/dev (e.g. the QA tester is doing acceptance testing in the front end repo and the issue stems from the API repo).
- Right now, we will experiment with having a single QA acceptance test issue per tester, updating the issue with new tests. We might break them up into multiple issues as we test this system.

## When to create an Acceptance Test

- Acceptance Tests must be written any time you want QA to review. A developer can choose when they want to hand off for test. Once the Acceptance Tests are written, PMs will schedule QA. QA should be minimally done ahead of the project's UAT milestone.

### Requirements to Schedule QA Time

- Websites must be running on a sandbox which the QA tester can access.
- Apps must be available to download via Testflight or Google Play.
- Acceptance Tests must be written.
- The development team should have already performed internal testing.
