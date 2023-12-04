# AlumLink 
Alumlink is an alumni directory specifically designed for CUNY Law School. The app utilizes a registration process where users are invited to join via a magic link that enables them to register their information. It offers a search feature, allowing users to find past alumni based on various criteria. Additionally, Alumlink provides the functionality for users to update their own information, ensuring that the directory remains up to date and useful for its community.

## Development Setup
Each user will need to do this on their local machine.

## Ensure you have PostgreSQL installed
- Check if you have PostgreSQL installed
  - ✅ versions 10-14 should work
  - 🚫 version 15 has not been tested
- If you need to install PostgreSQL, see the installing PostgreSQL guides

## Create a PostgreSQL user and database
The project-starter template expects the following for local development:

### PostgreSQL User/Role
- name: `ctp_user`
- password: `ctp_pass`

### PostgreSQL Database
- name: `alumlinkdb`

#### For Windows/pgAdmin users
If you are on Windows and installed pgAdmin, follow our pgAdmin guide to create a user in PostgreSQL named `ctp_user` with the password `ctp_pass` and a database named `alumlinkdb`.

#### For Mac/Linux users
Create a user in PostgreSQL named `ctp_user` with the password `ctp_pass`:

This only needs to be done one time on your machine. You can create additional users if you want to.

- Command to create user: `createuser -P -s -e ctp_user`
- Command to create database: `createdb -h localhost -U ctp_user alumlinkdb`

You will create a DB for each project you start based on this repo. For other projects, change `alumlinkdb` to the new app's database name.

## Running the app locally
For local development, you will need two terminals open, one for the api-backend and another for the react-client.

- Update the `config.json` file and `app.js` in the api folder with the matching username, password, and database name

Clone this app, then:

### To run the project 
cd into AlumLink and download the following dependencies in your terminal:
```
npm install react-router-dom
npm install styled-components
npm install react-icons
npm install axios
npm install cors
```

### api-backend (terminal 1)
``` 
cd api
npm install
npm run migrate:up
npm run seed:up
npm run dev
```

### react-client (terminal 2)
   ```
  cd client
  npm install
  npm start
  ```

api-backend will launch at: `http://localhost:8080`  
react-client will launch at: `http://localhost:3000`  
