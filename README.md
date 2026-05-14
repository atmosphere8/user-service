# user-service

Personal project created to practice backend development with Node.js, TypeScript, Express.js, and PostgreSQL.

The project includes:

- authentication with JWT
- role-based access control
- protected routes
- user management API

## Stack

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- pnpm

## Environment Variables

Create a `.env` file in the project root:

```env
# API configuration
API_PORT=3000

# Database configuration
POSTGRES_PORT=5434
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_DB=postgres

# JWT configuration
JWT_SECRET=your_jwt_secret
```

## Run Project

```bash
docker compose up --build
```

API:

```bash
http://localhost:3000
```

PostgreSQL:

```bash
localhost:5434
```
