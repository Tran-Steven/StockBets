import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcryptjs';
import { connection } from '../../sb-be/server';
import { Account } from '../../sb-be/models/accountModel';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Find the user with the given username in the database
        const userRepository = (await connection).getRepository(Account);
        const user = await userRepository.findOne({ where: { username } });

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

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
