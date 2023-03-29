import styles from "@styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    /**Add media query to create hamburger menu starting at approx 1284width */
    <>
      <header className={styles.header}>
        <div className={styles.headerLeftSide}>
          <h2>StockBets</h2>
        </div>
        <div className={styles.headerRightSide}>
          <Link className={styles.headerLinks} href="/">
            SOTD
          </Link>

          <Link className={styles.headerLinks} href="/account">
            ACCOUNT
          </Link>

          <Link className={styles.headerLinks} href="/leagues">
            LEAGUES
          </Link>

          <div className="navlogin">
            <Link href="/register">
              <button className={styles.headerButton}>REGISTER</button>
            </Link>
            <Link href="/login">
              <button className={styles.headerButton}>LOGIN</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
