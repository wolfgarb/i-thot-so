# Note Taker

## Purpose

A simple note taking app anyone can use. This application best highlights the use of Express.js
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

----

## Preview

Here is how the application appears and functions.

<img src='assets\Note-Taker-demo.gif' />

The full walk-through video can be found [here!](https://youtu.be/rmhH6xyGSNg)

## Installation
This application is available to use on Heroku! 

<a href='https://secret-taiga-71048.herokuapp.com/'>
<img src='https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white' />
</a>

If you wish to install, read the following guidelines:

_This project requires Node.js_

[How to install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

After you have installed Node, use the CLI to clone this repository.
```bash
git clone git@github.com:wolfgarb/i-thot-so.git
```

Make sure to include the following in your ``.gitignore`` before installing the dependencies!
```sh
node_modules
package-lock.json
.DS_Store
```

Commands to get you started:
```bash
npm install
npm install express
npm install --save nanoid
```

[Express docs](https://expressjs.com/en/4x/api.html) for reference.

Import into your code:

```js
const express = require('express');
const { nanoid } = require('nanoid');
const path = require('path');
```

Start the server from the command line:
```bash
npm start
```

Open your browser to [``http://localhost:3005/``](http://localhost:3005/)

<img src='' />

## Credits
To create randomly generated ID's for notes in the database, I utilized
[nano id](https://github.com/ai/nanoid). 

Thank you to GitHub user [ai](https://github.com/ai) for this code! 💥 

## Tests
_This project has no testing at this time_

## Feedback

Have something you'd like to add?<br> 
Feel free to contact me via email!<br>

<a href="mailto:sraewolfskill@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
 </a>
