import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'prisma/prisma'

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const {username, lifetimepoints, totalguesses, correctguesses, leagueswon} = req.body
        const updatedStats = await prisma.accountStats.update({
          where: {
            username: username
          }, 
          data: {
            lifetimepoints: lifetimepoints,
            totalguesses: totalguesses,
            correctguesses: correctguesses,
            leagueswon: leagueswon
          } 
        })
        res.json(updatedStats)
    //     try {
    //         const username = "the username of the current user";
    //         const user = await prisma.accountStats.findUnique({
    //           where: {
    //             username: username,
    //           },
    //           select: {
    //             username: true,
    //             membersince: true,
    //             lifetimepoints: true,
    //             totalguesses: true,
    //             correctguesses: true,
    //             leagueswon: true,
    //             weeklyrank: true,
    //             peakrank: true,
    //             recentrank: true,
    //           },
    //         });
    //         console.log(user);
    //         setAccountStats(user);
    //       } catch (error) {
    //         console.error(error);
    //       }
    } else {
        console.log("invalid request type")
    }
}