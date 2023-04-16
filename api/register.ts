import prisma from "prisma/prisma"
import type { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {username, email, password } = req.body;

  // Validate the form data here

  try {
    const user = await prisma.logincreds.create({
      data: {
        username,
        email,
        password,
      },
    });

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

    //   try {
  //     const creation: newUser = JSON.parse(req.body)  
  //     if (req.method === "POST") {
  //     try {  
  //       const reg = await prisma.logincreds.create({
  //         data: {
  //             username: creation.username,
  //             password: creation.password,
  //             email: creation.email
  //         },
  //       });
  //     }
  //   }
  // } catch (error) {
  //     return res.status(500).json(error)
  //   }