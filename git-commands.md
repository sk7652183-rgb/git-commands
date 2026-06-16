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
 
