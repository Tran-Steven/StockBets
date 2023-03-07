import APC from "@components/AccountPageContent/AccountContent";
import NavBar from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@styles/Home.module.css";

export default function Account() {
  return (
    <>
      <NavBar />
      <APC />
      {/* <Footer /> */}
    </>
  );
}
