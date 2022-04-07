# Challenge NuxtJS expressJS

Expressjs, Postgres, nuxtjs

## Installation

```bash
- yarn install
- yarn nodemon
- CREATE A Postgress DATABASE called "bigmarker"
- Load the Schema and demo data: psql -f ./api/bigmark.sql bigmark
- yarn dev
```

localhost:3000 => frontEnd
localhost:3001 => backEnd

## Endpoints

/participants List participants
/create/ Create participants
/participants/:id Get single participant
/participants/:id Update single participant
/participant/:id Delete single participant