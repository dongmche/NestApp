## Description

🌱 Environment Configuration

Create a .env file in the root of your project and include the following variables:

````
DATABASE_URL=
DATABASE_NAME=
NODE_ENV=
SECRET_KEY=mySuperSecretKey123
TOKEN_EXPIRATION_TIME=240m
SALT_ROUNDS=10
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin
ADMIN_ROLE=ADMIN
````




## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



