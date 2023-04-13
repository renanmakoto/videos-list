<h1>videos-list</h1>

<p>This repository contains a back-end part and a front-end part. The front-end runs with React and there were a few script modifications within the package.json file from both React and Node parts.</p>




The modules used were added with the following command lines:

-npm init
-npm instal express
-npx create-react-app videos
-npm install concurrently

(The "concurrently" module was used in order not to have a conflict between the back-end and the front-end when running the app. Therefore a few chanfes were made in the both package.json files from React and Node as mentioned previously. You may see down below how to make those changes:


- The Node part had the following lines added to its package.json:

"start_client": "npm start --prefix front",
    "start_node": "node index.js",
    "start_dev": "concurrently \"npm run start_node\" \"npm run
    "postinstall": "npm install --prefix front"
    (This was included in order to install the node modules when running the project)



- The React part had the following lines added to its package.json:

  "homepage": ".",
  "proxy": "http://localhost:3000",
  "name": "front",
  #(These are to the first 3 lines of the JSON object)
  
  "start": "PORT=5000 react-scripts start",
  #(This is added as the first line of the script)

  "postinstall": "npm run build"
  (This was included in order to create the build environment automatically when deploying it)


<div align="center">
  

TECHNOLOGIES USED:

<a><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" style="width: 64px; height: 64px;" /></a>
<a><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" style="width: 44px; height: 64px;" /></a>
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/64px-JavaScript-logo.png" /></a>
<a href="https://reactjs.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png" /></a>
<a href="https://nodejs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="width: 64px; height: 64px;" /></a>


</div>



<p align="center">With ❤ by <img src=https://img.shields.io/badge/-dotExtension-black /> <p/>
