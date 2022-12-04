# Backend Coding Challenge

Our main goal for this exercise is to get an idea of how you are to work with and how you approach your engineering work. That insight is more important than your actual working solution at the end of this exercise.

Please record your screen and talk us through the coding exercise as you work through it. Don't hesitate to think out loud—that's the interesting part!

We expect this to take around an hour.

## Brief

You'll be building an endpoint to look up airport information. In its current state, we render a list of all airports (around 6000) on the frontend, but we don't want to keep this data in the frontend or load them all at once.

Please move this data into a database scheme on the backend, and then write an endpoint that allows fetching data from the frontend. Your endpoint should allow user to look up airports by searching for airports by name, IATA, city, or country.

## Assumptions

- Tilla uses [NestJS](https://nestjs.com), [Prisma](https://www.prisma.io) with PostgreSQL and TypeScript. It'd be cool if you use that same tech stack for this exercise.
- The database is currently a JSON file with airport data.
- The IATA code is a unique identifier for an airport.
- While we care more about your thought process than your outcome, we're still interested in how you write code. Don't cut corners there, and write the code as if you'd write a real-world, production-quality product.

## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

- What are some edge cases you would take care of before shipping this to production?
- How would you scale this to handle high amounts of traffic?
- What's important for you to work well in a fully remote team?

## Deliverables

- Invite [@pieterbeulque](https://github.com/pieterbeulque) and [@umartayyab](https://github.com/umartayyab) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn start
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!

`docker run --name postgres-db -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres`

`npx prisma db seed`;