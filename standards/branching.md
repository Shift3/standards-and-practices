### Branch Structure

```
Main
L- Staging
L- Development
   L- *Feature Branch*
   L- *Bug fix branch*
```

**Main** branch is for finalized, tested, and production-ready code.

**Staging** branch is for finalized, tested, and demo-ready code.

Working branch will be **development**. Pushes to development require Pull Request and review.

Sub-branches of development will be used to isolate tasks that are being worked on. These are for new features, fixes, or other tasks.

Create feature/fix/task branches to perform your work in.
Keep to the standard `<initials>-<issue#>-<small-description>`.
Where:
* `<initials>` are your initials. This helps everyone keep track of who owns branches easily.
* `<issue#>` is the github issue number this branch relates to.
* `<small-description>` is a small description usually no more than 3 words.

For example, if I'm (Corey) working on an bug fix task, I'll create a branch such as `cts-111-fix-uploader`.

When work is completed and tested, make a Pull Request to the development branch. This PR requires review from another developer before it is merged.

When code is ready to be locked in for demo, a Pull Request from `development` to `staging` will be created and reviewed.

When code is ready to be deployed, a Pull Request from `development` to `main` will be created and reviewed.

### Doing Development
- Always have an issue created for any work you are doing. It should contain:
  - Description of work to be done
  - Labels to categorize what type of task it is
- Make sure to include your new task on the project board in the correct column

### Bug Fixing
- If fixing a bug or issue reference the issue in the branch ex: `git checkout -b bugName_1`
- Also, include the issue number in the commit message to link to the issue ex: `git commit -m "type(scope):body. resolves #1"`

### Testing
**Will Update with @malarconjr5 workflow**
- When finished with the work on a task, move it into the "Testing" category
- Coordinate with someone from your team to have them test it
- When you are testing a task, make a comment on the tasks that says "I'm testing this."
- Add the "Testing" label to the task
  - If you run into bugs or issues, list them in your testing comment and notify the developer
- Go back and forth between tester and developer until all issues fixed


### Finishing a task
- If testing is complete, all issues fixed, move the task to "Done" and close the issue

### Git Commands
- To clone a repository from github onto your local machine
  - `git clone https://github.com/Shift3/ancestreeLiveV3.git`
- Add all changes to be tracked:
  - `git add .`
- Commit tracked changes:
  - `git commit -m "type(scope):body"`
  - [Follow commit conventions found at this link](commits.md)
- Push changes up to github
  - `git push`


Get the latest changes:  
- Check out development  
    `git checkout development`
- Pull from development  
    `git pull`  
- Change to my branch  
    `git checkout your-branch-name`  
- Merge from development  
    `git merge development`
