warn "Please link to a GitHub issue within this pull request. Example: Closes #9999" unless (github.pr_body.downcase.include? "closes #" or github.pr_body.downcase.include? "references #")

# Add in our standard using GitHub Closes within the Pull request body.
warn "Please add a Changes section to your Pull Request description." unless github.pr_body.downcase.include? "changes"
warn "Please add a Purpose section to your Pull Request description." unless github.pr_body.downcase.include? "purpose"

# Warning if the user has not assigned themselves to the Pull Request.
warn "This Pull Request does not have any assignees yet. You may want to assign yourself if this is your Pull Request." unless github.pr_json["assignee"]