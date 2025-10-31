#### Quick setup — if you’ve done this kind of thing before

…or create a new repository on the command line

```bash
echo "# Build-A-Tesla-Car-Configurator-with-Traversy-Media" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/BurnettMiao/Build-A-Tesla-Car-Configurator-with-Traversy-Media.git
git push -u origin main
```

…or push an existing repository from the command line

```bash
git remote add origin https://github.com/BurnettMiao/Build-A-Tesla-Car-Configurator-with-Traversy-Media.git
git branch -M main
git push -u origin main
```

強制讓 origin/HEAD 指向 origin/main

```bash
git remote set-head origin main
```
