import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    /**Add media query to create hamburger menu starting at approx 1284width */
    <header className={styles.header}>
      {/* <image src="" alt="StockBets-logo" className="logo"/> */}
      <div className={styles.headerRightSide}>
        <a>SOTD</a>
        <a>ACCOUNT</a>
        <a>LEAGUES</a>
        <div className="navlogin">
          <button className={styles.headerButton}>Register</button>

          <button className={styles.headerButton}>Login</button>
        </div>
      </div>
    </header>
  );
}
