# Nuxt3 Starter Template

## Features

- Lucia
- Drizzle ORM
- Planetscale
- Nuxt UI
- TailwindCSS
- Prettier
- Bun (just for fun)

## Requirements
- [Bun](https://bun.sh/)
- [Node v20 or higher](https://nodejs.org/en/)
- [Coffee](https://en.wikipedia.org/wiki/Brazil)

## Instructions
- Open `.env.example` file and rename it to `.env`
- Replace The `DATABASE_URL` variable to your Planetscale Database URI


## Project Setup

### Install Dependencies
```bash
bun install
```

### Push schema to DB

```bash
bun run drizzle-kit push:mysql
```

### Run Development Server
```bash
bun dev
```

### Build for Production
```bash
bun run build
```

### Preview Production Build
```bash
bun run preview
```