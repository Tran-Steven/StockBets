import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

// when deploying, use NEXTAUTH_URL=https://example.com 
// When deploying your site set the NEXTAUTH_URL environment variable to the canonical URL of the website.

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider ({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req ) { // any typing for temp fix, def needs change for better later on...
        // Find the user with the given username in the database
      const { username, password } = credentials || {};
      if (!username || !password) {
        return null;
      }

      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) {
        throw new Error('Invalid username or password');
      }

      // Compare the given password with the user's hashed password
      const passwordMatches = await bcrypt.compare(password, user.password);

      if (!passwordMatches) {
        throw new Error('Invalid username or password');
      }

        // If the password matches, return the user object
      return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
});
