import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    /**Add media query to create hamburger menu starting at approx 1284width */
    <header className={styles.header}>
      {/* <image src="" alt="StockBets-logo" className="logo"/> */}
      <div className={styles.headerLeftSide}>
        <h2>Placeholder</h2>
      </div>
      <div className={styles.headerRightSide}>
        <a>SOTD</a>
        <a>ACCOUNT</a>
        <a>LEAGUES</a>
        <div className="navlogin">
          <button className={styles.headerButton}>REGISTER</button>
          <button className={styles.headerButton}>LOGIN</button>
        </div>
      </div>
    </header>
  );
}
