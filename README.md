# Nuxt 3 + TailwindCSS + Prisma Starter

![Home Image](/public/home.png)

This repo is a starter template for Nuxt 3 + TailwindCSS + Prisma. It is a part of the starter templates I am creating.
Why? I am tired of creating the same boilerplate over and over again. I want to focus on the project, not the boilerplate.(This was auto suggested by GitHub Copilot)
This can be used if you want to have your backend and frontend in the same repo.

## Setup

Clone the repo and install the dependencies.

```bash
npm install
```

Create a .env file and add the following variables.

```.env
DB=""
SECRET = ""
```

Add your mongo db url

Run the app

```bash
npm run dev
```

## Stuff Used

- Nuxt 3
- TailwindCSS
- Prisma
- Headless UI
- ChartJS (VueChartJS)
- Vue 3 Toastify
- VueUse
- Vue 3 Easy DataTable
- VeeValidate
- Yup
- Nuxt Icon

Look at the package.json for more information. [Package JSON](/package.json)

## Pages

- Home
- Login
- Register
- Dashboard
- Charts
- Forms
- Modals
- Tables

Check out the pages folder for more information. [Pages](/pages/index.vue)

## Server routes

- /api/auth/login - [Login Route](/server/api/auth/login.post.ts)
- /api/auth/logout - [Logout Route](/server/api/auth/logout.get.ts)
- /api/auth/me - [Me Route](/server/api/auth/me.get.ts)
- /api/auth/me - [Register Route](/server/api/auth/register.post.ts)

## Auth Middleware

Two middlewares are at play here

- The server auth middleware - This will get the user based on the http cookie holding a jwt token. If the token exists, then the user will be retrieved from the database and attached to the event context. If the token does not exist, then the user will be null. [Server Auth Middleware](/server/middleware/auth.ts)

- The route middleware - This will check if the user is logged in. If the user is not logged in, then the user will be redirected to the login page. [Route Middleware](/middleware/logged-in.ts)
