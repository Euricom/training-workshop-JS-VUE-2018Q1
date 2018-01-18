# Training-workshop-JS-VUE-2018Q1

## Prerequisites

- Knowledge / Experience
    + Javascript (jquery)
    + HTML / CSS / BootStrap
    + Chrome Dev Tools

- System Setup
    + Visual Studio Code - https://code.visualstudio.com
    + Node.js - 9.X.0 Current - https://nodejs.org/en/
    + Git - https://git-scm.com/download/win
    + ConEmu: https://conemu.github.io/

## Prepare yourself

1. Install tools (see system setup above)

2. Verify installs; open command line and run following commands

```bash
# node
$ node --version
v9.4.0
$ npm --version
5.6.0

# git
$ cd your-working-folder
$ git clone https://github.com/Euricom/training-workshop-JS-VUE-jan2018.git
Cloning into 'training-workshop-JS-VUE-jan2018'...
remote: Counting objects: 191, done.
remote: Compressing objects: 100% (146/146), done.
remote: Total 191 (delta 74), reused 147 (delta 30), pack-reused 0
Receiving objects: 100% (191/191), 1.84 MiB | 378.00 KiB/s, done.
Resolving deltas: 100% (74/74), done.
Checking connectivity... done.

# npm install
$ mkdir temp
$ cd temp
$ npm init -f
Wrote to .../temp/package.json:
{
  "name": "temp",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
$ npm install webpack
...
+ webpack@3.10.0
added 367 packages in 12.583s
```

3. Refresh your basic JavaScript knowledge

## Slides

- [Intro](./slides/intro.md)
- [Know your JavaScript](./slides/know-your-javascript.md)
- [VueJS Intro](./slides/vue-intro.md)
- [VueJS Components](./slides/vue-components.md)
- [VueJS Forms](./slides/vue-forms.md)
- [VueJS Http](./slides/vue-http.md)
- [VueJS 3th Party](./slides/vue-3thParty.md)
- [What Next](./slides/whats-next.md)

[See Also](https://github.com/Euricom/training-workshop-JS-VUE-jan2018/tree/master/slides)

## Update the workshop content

```bash
$ cd your-working-folder
# get latest version of the git repo
$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 2 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/Euricom/training-workshop-JS-VUE-jan2018
   1ad0b69..fe38569  master     -> origin/master
Updating 1ad0b69..fe38569
Fast-forward
 README.md | 53 +++++++++++++++++++++++++++++++++++++++++++++++++++--
 1 file changed, 51 insertions(+), 2 deletions(-)
```

