import styles from '@styles/LoadingInfobar.module.css'

export default function LoadingInfobar() {
    return (
        <div className={styles.loadingBar}>
            <svg width="600" height="600">
                <path d="M 150 287 A 100 100 120 1 1 250 287" />
            </svg>    
            {/* <div className={styles.innerBarContent}>

            </div> */}
        </div>
    )
}