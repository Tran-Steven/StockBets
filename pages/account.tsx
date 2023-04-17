import APC from "@components/AccountPageContent/AccountContent";
import NavBar from "@components/Header/Header";
import Copyright from "@components/Copyright/Copyright";
import Footer from "@components/Footer/Footer";
import { Inter } from "@next/font/google";
import styles from "@styles/Home.module.css";
import prisma from "prisma/prisma";
import { useState, useEffect } from "react";

export default function Account() {

  const [accountStats, setAccountStats] = useState({
    username: "",
    membersince: "",
    lifetimepoints: "",
    totalguesses: "",
    correctguesses: "",
    leagueswon: "",
    weeklyrank: "",
    peakrank: "",
    recentrank: "",
  });

  useEffect(() => {
    async function getAccountStats() {
      try {
        const username = "the username of the current user";
        const user = await prisma.accountStats.findUnique({
          where: {
            username: username,
          },
          select: {
            username: true,
            membersince: true,
            lifetimepoints: true,
            totalguesses: true,
            correctguesses: true,
            leagueswon: true,
            weeklyrank: true,
            peakrank: true,
            recentrank: true,
          },
        });
        console.log(user);
        setAccountStats(user);
      } catch (error) {
        console.error(error);
      }
    }
    getAccountStats();
  }, []);

  return (
    <>
      <NavBar />
      <APC 
        username={accountStats.username} 
        membersince={accountStats.membersince}
        lifetimepoints={parseInt(accountStats.lifetimepoints)}
        totalguesses={parseInt(accountStats.totalguesses)}
        correctguesses={parseInt(accountStats.correctguesses)}
        leagueswon={parseInt(accountStats.leagueswon)}
        weeklyrank={accountStats.weeklyrank}
        peakrank={accountStats.peakrank}
        recentrank={accountStats.recentrank}
/>
      <Copyright />
    </>
  );
}
