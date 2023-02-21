import styles from '@styles/LoadingInfobar.module.css'

export default function LoadingInfobar() {
    return (
        <div className={styles.loadingBar}>
            <svg>
            <path d=" M 465 430 A 200 200 120 1 1 665 430" />
            </svg>    
            <div className={styles.innerBarContent}>

            </div>
        </div>
    )
}