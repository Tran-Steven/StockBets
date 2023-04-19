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
      const response = await fetch('/api/register', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountStats)
      });
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
