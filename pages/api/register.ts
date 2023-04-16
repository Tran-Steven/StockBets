import prisma from "prisma/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

type newUser = {
  username: string,
  password: string,
  email: string
}

export default async function handler(req : Request, res : Response) {
    try {
      const creation: newUser = JSON.parse(req.body)  
      if (req.method === "POST") {
      try {  
        const reg = await prisma.logincreds.create({
          data: {
              username: creation.username,
              password: creation.password,
              email: creation.email
          }
        })
      }
    }
  } catch (error) {
      return res.status(500).json(error)
    }
  }
