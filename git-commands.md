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
