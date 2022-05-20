## Tech stack

- [MongoDB](https://www.mongodb.com/)  [<img alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style="padding-right:10px;" />]()
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/) [<img alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />]()
- [Node.js](https://nodejs.org/en/) [<img align="right" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="padding-right:10px;" />]
- [Bootstrap](https://getbootstrap.com/)


### Languages and Tools:

[<img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />]
[<img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />]
[<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />]
[<img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />]


[<img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />]
[<img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" style="padding-right:10px;" />]

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
