import styles from "@styles/LoadingInfobar.module.css";

export interface StockInfo {
  StockName: string;
  StartingPrice: number;
  CurrentPrice: number;
}

const Progress = ({percent = 40,}) => {
const arc = 100;
const percentNormalized = Math.min(Math.max(percent, 0), 100);
const offset = arc - (percentNormalized / 100) * arc;
  return (
    <svg viewBox="0 0 500 500">
      <circle className={styles.progress} cx="250" cy="250" r="250" pathLength="100" strokeDasharray={`${arc} ${arc - offset}`}/>
    </svg>
  )
}

export default function LoadingInfobar(prop: StockInfo) {
  return (
    <div className={styles.loadingBar}>
        <svg viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="250" pathLength="100" strokeDasharray="75 25"/>
          <Progress />
          {/* // <path d=" M 250 400 A 200 200 120 1 1 450 400" /> */}
        </svg>    
      <div className={styles.innerBarContent}>
          <h2>{prop.StockName}</h2>
          <p>Current Price: {prop.CurrentPrice}</p>
          <p>Starting Price: {prop.StartingPrice}</p>
     </div>

    </div>
  );
}
