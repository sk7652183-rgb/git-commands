# This README serves as a cheat sheet for commonly used Git commands.

`git add` – Adds files from the working directory to the staging area.

| Command | Description |
|----------|-------------|
| `git add` | Adds files from the working directory to the staging area. | 


- `git status` – Shows the status of files in the working directory and staging area.

| Command | Description |
|----------|-------------|
| `git status` | Shows the status of files in the working directory and staging area. |


- `git commit -m "message"` – Creates a commit from the changes in the staging area and saves them to the repository history.

| Command | Description |
|----------|-------------|
| `git commit -m "message"` | Creates a commit from the staged changes and saves it to the repository history. |


## Example: Staging and Committing a File

### 1. Create a file

```bash
echo "Hello Git" > hello.txt
```

### 2. Check the status

```bash
git status
```

Output:

```bash
On branch main

Untracked files:
  hello.txt

nothing added to commit but untracked files present
```

### 3. Add the file to the staging area

```bash
git add hello.txt
```

### 4. Check the status again

```bash
git status
```

Output:

```bash
On branch main

Changes to be committed:
  new file: hello.txt
```

### 5. Commit the staged file

```bash
git commit -m "Add hello.txt"
```

Output:

```bash
[main abc1234] Add hello.txt
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt
```

### 6. Verify the status

```bash
git status
```

Output:

```bash
On branch main
nothing to commit, working tree clean
```

### Workflow

```text
Working Directory
       |
    git add
       ↓
  Staging Area
       |
   git commit
       ↓
 Repository History
```


- `git config --global user.name "sk7652183-rgb"` – Sets the global Git username.
- `git config --global user.email "sk7652183@gmail.com"` – Sets the global Git email address.

### Configure Git Username

**Command:**

```bash
git config --global user.name "sk7652183-rgb"
```

**Description:**

Sets the global Git username for all repositories on the system.

**Verification:**

```bash
git config --global user.name
```

**Output:**

```bash
sk7652183-rgb
```

### Configure Git Email

**Command:**

```bash
git config --global user.email "sk7652183@gmail.com"
```

**Description:**

Sets the global Git email address for all repositories on the system.

**Verification:**

```bash
git config --global user.email
```

**Output:**

```bash
sk7652183@gmail.com
```
- `git log` – Displays the commit history of the repository.

### View Commit History

**Command:**

```bash
git log
```

**Example Output:**

```bash
commit a1b2c3d4e5f678901234567890abcdef12345678
Author: sk7652183-rgb <sk7652183@gmail.com>
Date:   Sun Jun 15 22:30:00 2026 +0530

    Add Git commands cheat sheet

commit f6e7d8c9b0a1234567890abcdef1234567890ab
Author: sk7652183-rgb <sk7652183@gmail.com>
Date:   Sun Jun 15 21:45:00 2026 +0530

    Initial commit
```

**Description:**

`git log` shows the history of commits, including the commit ID, author, date, and commit message.


### `git diff`

**Description:**

`git diff` shows the differences between the working directory and the staging area.

**Example:**

Create a file:

```bash
echo "Hello Git" > file.txt
git add file.txt
git commit -m "Initial commit"
```

Modify the file:

```bash
echo "New line added" >> file.txt
```

Check the difference:

```bash
git diff
```

**Output:**

```diff
diff --git a/file.txt b/file.txt
index e965047..4f2b4a1 100644
--- a/file.txt
+++ b/file.txt
@@ -1 +1,2 @@
 Hello Git
+New line added
```

**Explanation:**
- `+New line added` indicates a new line that exists in the working directory but has not yet been staged.

# **Day 23: Git Branching Commands**


| Command                                             | Description                                                   |
| --------------------------------------------------- | ------------------------------------------------------------- |
| `git branch`                                        | Listed all local branches in the repository.                  |
| `git branch -r`                                     | Listed all remote branches.                                   |
| `git branch -a`                                     | Listed all local and remote branches.                         |
| `git checkout -b feature-1`                         | Created and switched to the `feature-1` branch.               |
| `git checkout -b feature-2`                         | Created and switched to the `feature-2` branch.               |
| `git switch feature-1`                              | Switched to the `feature-1` branch.                           |
| `git status`                                        | Checked the status of the working directory and staging area. |
| `git commit -m "Added test.py for Testing purpose"` | Created a commit containing changes to `test.py`.             |
| `git log`                                           | Displayed the commit history of the current branch.           |
| `git switch master`                                 | Switched back to the `master` branch.                         |
| `git branch -d feature-2`                           | Deleted the unused `feature-2` branch.                        |



# Day 24 – Advanced Git: Merge, Rebase, Stash & Cherry Pick

## Advanced Git & GitHub Hands-on Summary

| Task                                 | Git Commands Used                                                | Outcome                                                                |
| ------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Create and work on `feature-login`   | `git checkout -b feature-login`, `git add`, `git commit`         | Added login page UI and validation                                     |
| Merge `feature-login` into `master`  | `git switch master`, `git merge feature-login`                   | Created a merge commit                                                 |
| Create and work on `feature-signup`  | `git checkout -b feature-signup`, `git commit`                   | Added signup page UI and validation                                    |
| Add commits directly on `master`     | `git commit`                                                     | Added utility function and application entry point                     |
| Merge `feature-signup` into `master` | `git merge feature-signup`                                       | Created a merge commit because both branches had new commits           |
| Create merge conflict                | `git checkout -b feature-conflict`, `git merge feature-conflict` | Generated a merge conflict                                             |
| Resolve merge conflict               | `git add`, `git commit`                                          | Resolved conflict and completed merge                                  |
| Create `feature-dashboard`           | `git checkout -b feature-dashboard`, `git commit`                | Added dashboard UI and statistics module                               |
| Rebase feature branch                | `git rebase master`                                              | Replayed dashboard commits on top of the latest master                 |
| Create `feature-profile`             | `git checkout -b feature-profile`, `git commit`                  | Added multiple testing-related commits                                 |
| Squash merge                         | `git merge --squash feature-profile`                             | Combined multiple commits into a single commit                         |
| Create `feature-settings`            | `git checkout -b feature-settings`, `git commit`                 | Added settings page, save functionality, validation, and theme support |
| Fast-forward merge                   | `git merge feature-settings`                                     | Maintained a linear commit history without a merge commit              |
| Stash workflow                       | `git stash`, `git stash list`, `git stash pop`                   | Saved and restored work in progress                                    |
| Stash with message                   | `git stash push -m "message"`                                    | Created named stashes                                                  |
| Apply specific stash                 | `git stash apply stash@{n}`                                      | Restored a selected stash without removing it                          |
| Create `feature-hotfix`              | `git checkout -b feature-hotfix`, `git commit`                   | Added urgent bug fixes                                                 |
| Cherry-pick commit                   | `git cherry-pick <commit-id>`                                    | Applied a specific commit without merging the entire branch            |
| Push branches to remote              | `git push origin <branch>`                                       | Uploaded local branches to GitHub                                      |
| Verify repository sync               | `git fetch`, `git status`, `git branch -vv`                      | Confirmed local and remote repositories are synchronized               |

## Git Concepts Practiced

| Concept            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| Branching          | Created and worked on multiple feature branches         |
| Merge Commit       | Merged diverged branches using a merge commit           |
| Fast-Forward Merge | Merged a branch without creating a merge commit         |
| Merge Conflict     | Created and manually resolved merge conflicts           |
| Rebase             | Replayed commits on top of an updated branch            |
| Squash Merge       | Combined multiple commits into a single commit          |
| Stash              | Temporarily saved uncommitted changes                   |
| Cherry-Pick        | Applied a specific commit from another branch           |
| Remote Repository  | Pushed changes and verified synchronization with GitHub |

#  Day 25 – Git Reset vs Revert & Branching Strategies

## Git Reset and Revert Practice

| Task | Description |
|--------|-------------|
| Commit D | Created a commit to practice `git reset --soft`. |
| `git reset --soft HEAD~1` | Removed the commit while keeping changes staged. |
| Commit E | Recommitted the staged changes. |
| `git reset --mixed HEAD~1` | Removed the commit while keeping changes in the working directory. |
| Commit F | Created a commit to practice `git reset --hard`. |
| `git reset --hard HEAD~1` | Removed the commit and discarded all changes. |
| Commit X | Created a commit to begin revert practice. |
| Commit Y | Created a commit to test reverting a middle commit. |
| Commit Z | Created a commit as the latest change in history. |
| `git revert Y` | Failed because Git requires a commit hash, not a commit message. |
| `git revert 8829095` | Successfully reverted Commit Y using its commit hash. |
| Verification | Confirmed that `git revert` preserves history by creating a new commit. |

# Day 26 – GitHub CLI: Manage GitHub from Your Terminal

## GitHub CLI Commands Practiced

| Command                                                            | Description                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `gh --version`                                                     | Display the installed GitHub CLI version.                                  |
| `gh auth status`                                                   | Check the current GitHub authentication status.                            |
| `gh api user --jq .login`                                          | Display the authenticated GitHub username.                                 |
| `gh repo create github-cli-practice --public --clone --add-readme` | Create a new public GitHub repository, clone it locally, and add a README. |
| `gh repo view github-cli-practice`                                 | View repository details.                                                   |
| `gh repo view --web`                                               | Open the repository in a web browser.                                      |
| `gh issue create`                                                  | Create a new GitHub issue from the terminal.                               |
| `gh issue list`                                                    | List issues in a repository.                                               |
| `gh issue view`                                                    | View details of a specific issue.                                          |
| `gh issue close`                                                   | Close an issue and optionally add a comment.                               |
| `gh pr create`                                                     | Create a pull request from a branch.                                       |
| `gh pr status`                                                     | View pull requests associated with the current branch and account.         |
| `gh pr list`                                                       | List pull requests in a repository.                                        |
| `gh pr view`                                                       | View pull request details, reviews, and checks.                            |
| `gh pr merge`                                                      | Merge a pull request from the terminal.                                    |
| `gh run list`                                                      | List GitHub Actions workflow runs.                                         |
| `gh run view`                                                      | View details, status, and logs of a workflow run.                          |
| `gh workflow list`                                                 | List workflows configured in a repository.                                 |
| `gh api`                                                           | Interact directly with GitHub REST and GraphQL APIs.                       |
| `gh release create`                                                | Create a new GitHub release.                                               |
| `gh release view`                                                  | View release details.                                                      |
| `gh gist create`                                                   | Create a GitHub Gist from a file.                                          |
| `gh gist list`                                                     | List your GitHub Gists.                                                    |
| `gh alias set`                                                     | Create a custom shortcut for a GitHub CLI command.                         |
| `gh alias list`                                                    | List all configured GitHub CLI aliases.                                    |
| `gh search repos`                                                  | Search GitHub repositories from the terminal.                              |
| `gh pr review`                                                     | Review, approve, comment on, or request changes to a pull request.         |
| `gh pr checkout`                                                   | Check out a pull request locally for testing and review.                   |

### Summary

Practiced GitHub CLI commands for authentication, repository management, issue tracking, pull requests, workflow monitoring, releases, gists, aliases, API interactions, and repository search directly from the terminal.
 
