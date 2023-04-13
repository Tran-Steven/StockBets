import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

    // If no user is found, return an error
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Sign in the user with next-auth.js
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    // If sign-in fails, return an error
    if (!result?.ok) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If sign-in succeeds, return the user object
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
