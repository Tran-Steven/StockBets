import styles from "@styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    /**Add media query to create hamburger menu starting at approx 1284width */
    <header className={styles.header}>
      {/* <image src="" alt="StockBets-logo" className="logo"/> */}
      <div className={styles.headerLeftSide}>
        <h2>StockBets</h2>
      </div>
      <div className={styles.headerRightSide}>
        <Link href="/">SOTD</Link>

        <Link href="/account">ACCOUNT</Link>

        <Link href="/leagues">LEAGUES</Link>

        <div className="navlogin">
          <Link href="/register">
          <button className={styles.headerButton}>REGISTER</button>
          </Link>
          <button className={styles.headerButton}>LOGIN</button>
        </div>
      </div>
    </header>
  );
}
