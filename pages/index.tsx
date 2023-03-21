import Head from "next/head";
import NavBar from "@components/Header/Header";
import Copyright from "@components/Copyright/Copyright";
import Footer from "@components/Footer/Footer";
import Image from "next/image";
import SOTD from "@components/SOTD/StockOfTheDay";
import { Inter } from "@next/font/google";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <SOTD />
      <Copyright />
    </>
  );
}
