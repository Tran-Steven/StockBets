import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

// this file ensures no users can manipulate the info of others
// aka, as basic to someones pfp color, to as far as username, email, password, and other stats.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // If the session is valid, continue with the API call
  // ...
}