import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <image src="" alt="StockBets-logo" className="logo"/> */}
      <div className={styles.headerRightSide}>
        <a>SOTD</a>
        <a>Account Stats</a>
        <a>Leagues</a>
        <div className="navlogin">
          <button className={styles.headerButton}>Register</button>
          <button className={styles.headerButton}>Login</button>
        </div>
      </div>
    </header>
  );
}
