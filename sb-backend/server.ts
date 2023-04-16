import { Pool } from 'pg';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const express = require('express')
const app = express();
app.use(express.json())

const prisma = new PrismaClient();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// adding in users to db
app.post("/register",async (req: Request, res: Response) => {
    const {username, password, email} = req.body;
    const user = await prisma.logincreds.create({
      data: {
        username: username,
        password: password,
        email: email
      }
    })
    res.json(user)
})

// reading user info from db
app.get("/", async (req: Request, res: Response) =>  {
  const users = await prisma.logincreds.findMany();
  res.json(users);
})

// updates current info in db if not empty
// username is the identifier, everything else is what can be changed (not complelete)
app.put("/account", async (req: Request, res: Response) => {
  const {username, lifetimepoints, totalguesses, correctguesses, leagueswon} = req.body
  const updatedStats = await prisma.accountstats.update({
    where: {
      username: username
    }, 
    data: {
      lifetimepoints: lifetimepoints,
      totalguesses: totalguesses,
      correctguesses: correctguesses,
      leagueswon: leagueswon
    } 
  })
  res.json(updatedStats)
})

// just in case something needs to be deleted (here placeholder for user delete)
app.delete("/account/:id", async (req: Request, res: Response) =>  {
  const id = req.params.id
  const deleteUser = await prisma.logincreds.delete({
    where: {
      id: id
    }
  })
  res.json(deleteUser)
})

pool.connect()
.then(
  app.listen(3001, () => {console.log("server is live.")})
)
.catch((e) => console.error(e))

pool.query('SELECT NOW()', (err: Error, res: any) => {
  console.log(err, res);
  pool.end();
});

module.exports = { pool };