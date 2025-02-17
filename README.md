# TypeScript Project

## Installation

This project requires [yarn]

Install the dependencies and start the server.

```sh
cd sideProjectTypeScript
yarn install
yarn dev
```

You will need a mongoDb instance running locally to run the application.

### Features
- You can create a user in the /api/users route by passing email, password, password confirmation and Name in the body
- Can login by entering email and password in the /login route
- Can authenticate users in the /profile route by providing the jwt token in the Authorization - header
- Can fetch user details in the /api/user:id by providing the Mongo ObjectId in the route

Note: I have not used .env but config file
