import styles from '@styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            {/* <image src="" alt="StockBets-logo" className="logo"/> */}
            <div className={styles.headerRightSide}>
                <a>SOTD</a>
                <a>Account Stats</a>
                <a>Leagues</a>
                <a>Sign Up / Login</a>
            </div>
        </div>
    )
    
    
}