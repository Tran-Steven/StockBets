import LPC from "@components/LeaguePageContent/LeaguePageContent";
import NavBar from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@styles/Home.module.css";

export default function leagues() {
  return (
    <>
      <NavBar />
      <LPC />
      <Footer />
    </>
  );
}
