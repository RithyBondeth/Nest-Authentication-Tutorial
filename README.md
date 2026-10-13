<div align="center">

# Nest Authentication Tutorial

**A simple authentication tutorial with NestJS, Passport, and JWT.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

## Overview

Nest Authentication Tutorial is a minimal learning project for adding authentication to a NestJS API. It uses Passport's local strategy to validate an email and password against an in-memory user list, then issues a JWT on successful login.

## Features

- **Login endpoint** (`POST /auth/login`) protected by a Passport local guard.
- **Local strategy** that validates credentials against sample users.
- **JWT issuing** with `@nestjs/jwt`.
- **DTO validation** with `class-validator`.
- **Environment configuration** with `@nestjs/config`.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | NestJS |
| Language | TypeScript |
| Authentication | Passport (local and JWT), `@nestjs/jwt` |
| Validation | class-validator, class-transformer |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Nest-Authentication-Tutorial.git
cd Nest-Authentication-Tutorial
npm install
npm run start:dev
```

Try it:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "<email>", "password": "<password>"}'
```

Sample users are defined in `src/auth/data/fakeuser.ts`.

## Project Structure

```text
Nest-Authentication-Tutorial/
└── src/
    ├── auth/
    │   ├── auth.controller.ts   # POST /auth/login
    │   ├── auth.service.ts      # Credential validation and JWT signing
    │   ├── strategies/          # Passport local strategy
    │   ├── guards/              # Local auth guard
    │   ├── dtos/                # Login DTO
    │   └── data/                # Sample users
    ├── app.module.ts
    └── main.ts
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
