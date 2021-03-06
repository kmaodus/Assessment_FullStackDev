## Languages and Tools:

- [MongoDB  ](https://www.mongodb.com/)  [<img align="left" alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style="padding-right:10px;" />](https://www.mongodb.com/)
- [Express  ](https://expressjs.com/) [<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/express/express-original-wordmark.svg" style="padding-right:10px;" />](https://expressjs.com/)
- [React  ](https://reactjs.org/) [<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />](https://reactjs.org/)
- [Node.js  ](https://nodejs.org/en/) [<img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="padding-right:10px;" />](https://nodejs.org/en/)
- [Bootstrap ](https://getbootstrap.com/)[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/bootstrap/bootstrap-original.svg" style="padding-right:10px;" />](https://getbootstrap.com/)
- [Visual Studio Code  ](https://code.visualstudio.com/) [<img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />](https://code.visualstudio.com/)
- [HTML5  ]()[<img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />]()
- [CSS3  ]()[<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />]()
- [JavaScript  ]()[<img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />]()
- [Git ](https://git-scm.com/downloads)[<img align="left"  alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />](https://git-scm.com/downloads)
- [GitHub  ](https://github.com/kmaodus)[<img align="left" align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" style="padding-right:10px;" />](https://github.com/kmaodus)



## Installation

Setup your [MongoDB Atlas cluster and database](https://www.mongodb.com/docs/atlas/getting-started/). 
In *server/routes/employee.js* edit *MONGODB_DATABASE* and *MONGODB_COLLECTION* to represent your MongoDB cluster data.
Add a new .env file in *server* folder that fits your MongoDB credentials. For example take a look at *server/example.env*:

```sh
ATLAS_URI = mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/employees?retryWrites=true&w=majority
PORT = 5000
MONGODB_DATABASE = "jacandoAG_assessment"
MONGODB_COLLECTION = "employees"
```

Make sure that your [IP address is whitelisted](https://www.mongodb.com/docs/atlas/security/add-ip-address-to-list/).

Download [Node.js](https://nodejs.org/) v16+ to run.
Install the dependencies and devDependencies and start the server.

```sh
cd server
npm i
node server.js
```

You should get the following message: 

```sh
Server is running on port: 5000  
Successfully connected to MongoDB.
```

```sh
cd client
npm i
npm start
```


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


## License

**GNU General Public License v3.0**
