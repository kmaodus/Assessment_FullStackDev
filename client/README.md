## Languages and Tools:

- [MongoDB ](https://www.mongodb.com/)  [<img alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style="padding-right:10px;" />](https://www.mongodb.com/)
- [Express ](https://expressjs.com/) [<img alt="React" width="26px" src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/express/express-original-wordmark.svg" style="padding-right:10px;" />]()
- [React ](https://reactjs.org/) [<img alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />]()
- [Node.js ](https://nodejs.org/en/) [<img alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="padding-right:10px;" />](https://nodejs.org/en/)
- [Bootstrap ](https://getbootstrap.com/)[<img alt="React" width="26px" src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/bootstrap/bootstrap-original.svg" style="padding-right:10px;" />](https://getbootstrap.com/)
- [Visual Studio Code ](https://code.visualstudio.com/) [<img alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />](https://code.visualstudio.com/)
- [HTML5 ]()[<img alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />]()
- [CSS3 ]()[<img alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />]()
- [JavaScript ]()[<img alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />]()
- [Git ](https://git-scm.com/downloads)[<img  alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />](https://git-scm.com/downloads)
- [GitHub ](https://github.com/kmaodus)[<img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" style="padding-right:10px;" />](https://github.com/kmaodus)

## Task
Please develop an application with frontend and backend that allows you to create employees and save
them to the database.

## Frontend
- Preferably you use ReactJS but any other Javascript framework or vanilla Javascript is fine too
- There should be input fields for
    - email
    - first name
    - last name
- There should also be a dropdown that lets the user select the gender of the employee
- By clicking the submit button, the data is sent to your backend
- If any of the information is missing, there should be an error message and the data should not be sent
    to the backend
- Styling is not important but a good design is a plus
## Backend
- The backend should be written in NodeJS
- Data received from the frontend should be stored in a database
    - Preferably you use MongoDB but you can use any you like or even use an in memory store



## Installation

Download [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd server
npm i
node server.js
```

```sh
cd client
npm i
npm start
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

Change the URI to fit your MongoDB database.
```sh
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/employees?retryWrites=true&w=majority
```


## License

**GNU General Public License v3.0**
