// In a separate file, such as db.ts
import prisma from "prisma/prisma"


export default async function handler(req : Request, res : Response) {
async function createUser(data: {
  username: string
  email: string
  password: string
}) {
  return await prisma.logincreds.create({
    data: {
      username: data.username,
      email: data.email,
      password: data.password,
    },
  })
}
}