import APC from "@components/AccountPageContent/AccountContent";
import NavBar from "@components/Header/Header";
import Copyright from "@components/Copyright/Copyright";
import Footer from "@components/Footer/Footer";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@styles/Home.module.css";
import prisma from "prisma/prisma";
import { useState, useEffect } from "react";

export default function Account() {

  const [accountStats, setAccountStats] = useState(null);

  useEffect(() => {
    async function getAccountStats() {
      const username = "the username of the current user";
      const user = await prisma.accountStats.findUnique({
        where: {
          username: username,
        },
        data: {
          lifetimepoints: lifetimepoints,
          totalguesses: totalguesses,
          correctguesses: correctguesses,
          leagueswon: leagueswon
        } 
      });
      setAccountStats(user);
    }

    getAccountStats();
  }, []);

  return (
    <>
      <NavBar />
      <APC username={user.getAccountStats().username}/>
      <Copyright />
    </>
  );
}
