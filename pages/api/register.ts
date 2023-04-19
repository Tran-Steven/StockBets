import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, password, email } = req.body as {
      username: string;
      password: string;
      email: string;
    }
    
    try {
      const user = await prisma.logincreds.create({
        data: {
          username,
          password,
          email
        }
      })
      res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    console.log("no other operations")
  }
}