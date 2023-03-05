import styles from '@styles/StockofTheDay.module.css'
import LoadingInfobar from '../LoadingInfoBar/LoadingInfoBar'

export default function StockofTheDay() {
    return (
        <>
        <div className={styles.mainContent}>
            <LoadingInfobar StockName={"APPL"} StartingPrice={155} CurrentPrice={140}/>
            <div className={styles.buttonOptions}>
                <button>Buy</button>
                <button>Sell</button>
            </div>
        </div>
        
        </>
    )


}