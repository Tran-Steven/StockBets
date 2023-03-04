import styles from "@styles/LoadingInfobar.module.css";

export interface StockInfo {
  StockName: string;
  StartingPrice: number;
  CurrentPrice: number;
}


function calculatePercent() {
  let percentFill = 0;
  let countDownDate = new Date("Mar 4, 2024 16:00:00").getTime();
    const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
  

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  }, 1000);


}

const Progress = ({percent = 50}) => {
const arc = 100;
const percentNormalized = Math.min(Math.max(percent, 0), 100);
const offset = arc - (percentNormalized / 100) * arc;
  return (
    <svg viewBox="0 0 500 500">
      <circle className={styles.progress} cx="250" cy="250" r="250" pathLength="100" strokeDasharray={`${offset} ${arc}`} strokeLinecap="round"/>
    </svg>
  )
}

export default function LoadingInfobar(prop: StockInfo) {
  return (
    <div className={styles.loadingBar}>
        <svg viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="250" pathLength="100" strokeDasharray="75 25" strokeLinecap="round"/>
          <Progress />
          {/* // <path d=" M 250 400 A 200 200 120 1 1 450 400" /> */}
        </svg>    
      <div className={styles.innerBarContent}>


          <h2>{prop.StockName} AAPL</h2>
          <p>Current Price: 145{prop.CurrentPrice}</p>
          <p>Starting Price: 120{prop.StartingPrice}</p>

     </div>

    </div>
  );
}
