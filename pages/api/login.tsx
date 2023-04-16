import { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid request method" });
  }

  const { username, password } = req.body;

  try {
    // Find the user with the provided username and password
    const user = await prisma.logincreds.findUnique({
      where: {
        username,
        password,
      },
    });

  }
  catch (error) {
    console.log(error)
  }
} 
