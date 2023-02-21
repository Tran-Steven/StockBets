import styles from '@styles/StockofTheDay.module.css'
import LoadingInfobar from '../LoadingInfoBar/LoadingInfoBar'

export default function StockofTheDay() {
    return (
        <div className={styles.mainContent}>
            <LoadingInfobar />
        </div>
    )


}