# videos-list
This repository contains a back-end part and a front-end part. The front-end runs with React and there were a few script modifications within the package.json file from both React and Node parts. 

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
