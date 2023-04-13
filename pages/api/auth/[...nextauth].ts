import NextAuth, {NextAuthOptions} from 'next-auth';
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { type } from 'os';

// when deploying, use NEXTAUTH_URL=https://example.com 
// When deploying your site set the NEXTAUTH_URL environment variable to the canonical URL of the website.

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;
        const user = await prisma.logincreds.findUnique({
          where: {
            username,
          },
        });
        if (!user) {
          throw new Error("Invalid username or password");
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
          throw new Error("Invalid username or password");
        }
        return {
          id: user.id,
          username: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: '/register',
  }
};

export default NextAuth(authOptions);

