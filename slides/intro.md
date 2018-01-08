# Javascript / VueJS Workshop
<small>by Peter Cosemans</small>
<br>
<br>
<small>
Copyright (c) 2018 Euricom nv. Licensed under the [MIT license](https://opensource.org/licenses/MIT).
</small>

---

# Content

### [https://github.com/Euricom/training-workshop-JS-VUE-jan2018](https://github.com/Euricom/training-workshop-JS-VUE-jan2018)

- Slides
- Templates
- Examples
- Exercises

---

# Me

- Peter Cosemans (Euricom)
    - peter.cosemans@euri.com
    - https://github.com/mjrio
    - http://github.com/euricom
- 12 year Microsoft .NET Development
- 5 year Front-end Development
- Architect, Tech Coach, Trainer
    + JavaScript
    + Angular, React, VueJS
    + NodeJS, MongoDB
    + Mobile (hybrid)
    + Serverless

---

# Agenda

- Environment, Editor & Tooling
- Know your javascript
- The beginners guide to VueJS
- Using 3th party libraries (*)
- Using ES6 and more modern techniques (*)

# Prerequisites

- Knowledge / Experience
    + Javascript (jquery)
    + HTML / CSS / BootStrap
    + Chrome Dev Tools

- System Setup
    + Visual Studio Code - https://code.visualstudio.com
    + Node.js 9.3.0 - https://nodejs.org/en/
    + Git - https://git-scm.com/download/win
    + ConEmu: https://conemu.github.io/

---

# Slides

- [Intro](./intro.md)
- [Know your JavaScript](./know-your-javascript.md)
- [VueJS Intro](./vue-intro.md)
- [VueJS Http](./vue-http.md)
- [VueJS Master](./vue-master.md)
- -???????????

---

# A better VSCode

> Powercharge your editor

----

## Plugins - Must have

| Plugin                    | Remark                           |
| ------------------------- | ---------------------------------|
| EditorConfig for VS Code  | -                                |
| ESLint                    | -                                |
| Git History (git log)     | Git commits logs                 |
| Git Blame                 | See Git Blame info in status bar |
| Git Flow                  | Git Flow Branching commands      |
| beautify                  | Format JS, CSS, and HTML         |
| npm Intellisense          | Autocompletes npm modules        |
| Path Intellisense         | Autocompletes path and filenames |

----

## Plugins - Usefull

| Plugin                    | Remark                           |
| ------------------------- | ---------------------------------|
| vetur                     | Syntax highlighting .vue files   |
| VueHelper                 | Vue code snippets                |
| mssql                     | Autocomplete & exec sql scripts  |
| Spelling and Grammer      | -                                |
| Document This             | JSDoc comments                   |
| ES6 Mocha Snippets        | -                                |
| SVG preview               | -                                |

----

## Custom config

Goto `preferences - user settings`

```json
    // auto save on close
    "files.autoSave": "onFocusChange",

    // let ESlint validate my JS code
    "javascript.validate.enable": false,

    // default exclude on search
    "search.exclude": {
        "**/*bundle.js": true,
        "**/node_modules": true,
        "**/bower_components": true
    },
```
```json
    // don't check typescript version'
    "typescript.check.tscVersion": false,

    // linting vue files
    "files.associations": {
        "*.vue": "vue"
    },

    // github markdown preview
    "markdown.styles": [
        "https://gitcdn.xyz/repo/aui/vs-code-github-markdown-theme/master/index.css"
    ],
```
