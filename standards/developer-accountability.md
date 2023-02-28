# Developer Accountability

As our team grows, it is important to recognize we have standards and practices that are in place to help alleviate the learning curve on the things we do on a day-to-day basis. Software developers that are with the company for more than one year should know these standards and have already adopted these standards in their daily workflows. If this is you, awesome! Keep doing the things you do.

However, If these standards are new to you, because you are new to the company or do not realize that they exist, please revisit the S&P repository for additional information. We encourage you to get familiar with these standards, understand why we have them and adopt them as your own personal development habits. For your convenience, here is a list of standards that Michael Chrisco (S&P Lead), Lucas Phan (Engineering Manager) and your technical lead will be looking for to determine whether standards are being followed.

If you have any questions, comments or concerns, do not hesitate to reach out to one of us for additional context.

## Accountability Checklist

- [ ] **GitHub project boards need to be setup according to [S&P guidelines](./project-setup.md)**
- [ ] **Assign [@Shift3/pr-team](https://github.com/orgs/Shift3/teams/pr-team) to your pull requests, per our [code review](./code-reviews.md#process) process**
- [ ] **Assign pull requests to [@Shift3/pr-team](https://github.com/orgs/Shift3/teams/pr-team) in addition to the developers on your project**

  Assigning a pull request to @shift3/pr-team will automatically assign three developers from the pull request team and assign them to perform a review.

  This provides a quicker turnaround on your reviews and feedback from team members with different perspectives and skill levels.

- [ ] **Pull requests should not be more than 24 hours stale**

  It is the responsibility of the S&P lead and / or engineering manager to follow up with the developer or lead on a project to address stale pull requests.

  In the event an assigned developer is uncomfortable or unable to provide constructive feedback, the developer should indicate so in the comment section and to ping the S&P lead and engineering manager for assistance. On such an event, the S&P lead or engineering manager should either resolve the pull request themselves or reassign it to an appropriate developer with the expertise to perform the review.

  Pull request creators should be the champions of their own work and are encouraged to ping the #bwtc-code-review channel when their pull request is going stale.

  In the case of an urgent pull request or a request that needs immediate attention, the pull request creator could also contact the assigned reviewers to expedite the process.

  On rare occasions, when a pull request creator could not find a reviewer within the 24 hour window, the pull request creator should ping @here in #bwtc-code-review slack channel for assistance.

- [ ] **Format of GIT commit messages and title follow [Karma Commit standards](./commits.md#git-commit-messages).**

  Example: `fix(login-screen): logo should display correctly`

- [ ] **Branch name includes developer initials, the issue number and a short description**

  Format: `<initials>-<issue#>-<short-description>`

  Example: `mac-999-fixes-deploys`

  For additional information, refer to the docs [here](./branching.md).

- [ ] **Pull request always reference an issue number in the description section**

  A reviewer does not know which issue the pull request is going to solve without this reference. Moreover, it creates a smart link between your pull request and issue which we can refer to in the event we need to look it up later on, as well as auto-update any project boards we are currently working on.

  Example: `Closes #999`

  For additional information, refer to our [Pull Request template](./pull-request-template.md).

- [ ] **Project source code include our Issue and Pull Request Templates**

  This will add some Quality of Life improvements to those who will be reviewing the code as well as those reporting issues in the repo.

  For additional information, refer to the docs [here](https://github.com/Shift3/standards-and-practices/tree/main/.github).

- [ ] **[Review comments](./code-reviews.md#reviewer) be clear and constructive**

  Try to always provide meaningful feedback in your review, which could also include complimenting the work or pointing out something you learned or were impressed with. We would like to avoid “rubber stamping” or “looks good to me” types of reviews which don’t provide an opportunity for growth and improvement.

- [ ] Create **[Release tag and branch](./code-versioning.md) on each application release**

A pull request reviewer is our first line of defense for improving software quality and avoiding defects. Reviewers are encouraged to refer and cite these standards when they believe standards are not being adhered to during their review. However, reviewers should not block any pull request simply because of non-adherence. A reviewer should take into consideration what is and is not considered a blocking event. Here are some guidelines on the topic of blocking and non-blocking events:

**_Blocking_**

- Any syntax or logical errors which would lead to defective code
- Any code that might present unexpected behavior such as race conditions
- Any code that presents a security concern such as storing keys and secrets in code or logging stack traces in production
- Any grammatical or spelling errors on client facing content
- Any CI processes or unit test errors

**_Non-Blocking_**:

- Naming conventions suggestions
- Coding style suggestions
- Code refactor suggestions (ie. a better approach to writing this is...)
- Commented out codes and console logs deliberately left during development
- Work that falls out of scope or does not align with sow

Although these requirements are our written standards & practices and we encourage you to adopt and adhere to them, there are situations where adoption would raise unnecessary hardship on a per-project level. On that note, **lead developers on any given project could choose to override any of the standards herein as they see fit**. However, the lead developer should **present a reasonable explanation** of why the decision was made to override the standards, document the decision on the README.md and notify the S&P Lead / Engineering Manager on their decision.
