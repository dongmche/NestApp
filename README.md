## Description

🌱 Environment Configuration
Create a .env file in the root of your project and include the following variables:


# MongoDB URI (used if you're working with MongoDB instead of SQL)
DATABASE_URL=
DATABASE_NAME=

# 🌍 Application Environment
NODE_ENV=development

# 🔐 Security & Authentication
SECRET_KEY=mySuperSecretKey123
TOKEN_EXPIRATION_TIME=240m
SALT_ROUNDS=10

# 👤 Admin Defaults (used for initial admin user creation)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin

# 🛡️ Role Defaults
ADMIN_ROLE=ADMIN



[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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



