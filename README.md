# Discord Bot Backend

A Discord bot backend built using Node.js, Express.js, Discord.js, Sequelize, MySQL, and Docker.

## Features

* Discord Slash Commands
* User Registration System
* Service Creation
* User Fetch Functionality
* MySQL Database Integration
* Sequelize ORM
* Dockerized Setup
* Environment Variable Configuration

---

## Tech Stack

* Node.js
* Express.js
* Discord.js
* Sequelize
* MySQL
* Docker

---

## Project Structure

```bash
discord-backend/
│
├── src/
│   ├── bot/
│   ├── commands/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── package.json
├── server.js
└── README.md
```

---

## Environment Setup

Create a `.env` file and add:

```env
PORT=3000

JWT_SECRET=

DB_NAME=

DB_USER=

DB_PASSWORD=

DB_HOST=

DB_PORT=3306

DISCORD_TOKEN=

CLIENT_ID=

GUILD_ID=
```

---

## Installation

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Production run:

```bash
npm start
```

---

## Docker Setup

Build Docker image:

```bash
docker compose build
```

Run container:

```bash
docker compose up
```

Run in background:

```bash
docker compose up -d
```

Stop containers:

```bash
docker compose down
```

Check running containers:

```bash
docker ps
```

---

## Discord Slash Commands

### Create User

```text
/ppcreateuser
```

### Create Service

```text
/ppcreateservice
```

---

## API Routes

### Authentication

```http
POST /signup
POST /login
```

### Protected Route

```http
GET /profile
```

---

## Database

Database used:

* MySQL
* Sequelize ORM

---

## Running the Project

```bash
git clone <repository-url>

cd discord-backend

docker compose build

docker compose up
```

Application runs on:

```text
http://localhost:3000
```
