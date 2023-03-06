import styles from "@styles/LoadingInfobar.module.css";

export interface StockInfo {
  StockName: string;
  StartingPrice: number;
  CurrentPrice: number;
}

let counter = 1;

function calculatePercent() {

  let percentFill = 100;
  let dateSet = new Date(); // current day
  const day = dateSet.getDay();
  const startHours = new Date(dateSet.setHours(9, 30, 0)).getTime();
  const endHours = new Date(dateSet.setHours(16, 0, 0)).getTime();
  let countDownDate = new Date(day).getTime();

  if (countDownDate < startHours || countDownDate > endHours) { // accounts for closed hours
    return percentFill = 25;
  } else if (day == 0 || day == 6) { // acounts for weekends
    return percentFill = 25;
  }

  let distance = endHours - countDownDate;
  let test = Math.floor(distance / (1000 * 60));
  percentFill = percentFill - test;



  while(percentFill != 25) {
  const x = setInterval(function() {

  // Get today's date and time

  // Find the distance between now and the count down date
  let distance = endHours - countDownDate;

  // Time calculations for days, hours, minutes and seconds

  const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));

  if (counter == 3600) {
    percentFill--;
    counter = 0;
  }

  if (distance <= 0 || minutes < 0) {
    clearInterval(x);
    percentFill = 25;
    dateSet = new Date(dateSet.getDate() + 1);
  }
  counter++;
  }, 1000);}

  return percentFill;

}

function calculateCount(): number {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  // Check if current time is on a weekday between 9:00 am and 4:00 pm
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 16) {
    // Calculate minutes since 9:00 am
    const minutesSinceStart = (hour - 9) * 60 + minute;

    // Calculate minutes until 4:00 pm
    const minutesUntilEnd = (16 - hour) * 60 - minute;

    // Determine the number of 5.2 minute intervals that have passed since 9:00 am
    const intervalsSinceStart = Math.floor(minutesSinceStart / 5.2);

    // Determine the next 5.2 minute interval and wait until that time
    const nextInterval = (intervalsSinceStart + 1) * 5.2;
    const waitTime = (nextInterval - minutesSinceStart) * 60 * 1000;
    setTimeout(calculateCount, waitTime);

    // Calculate the count value
    let count = 100 - intervalsSinceStart;
    if (count < 25) {
      count = 25;
    }
    return count;
  } else {
    return 25;
  }
}





const Progress = ({percent = calculateCount()}) => { // implementation of how much of progresssvg covers the originial svg
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
        </svg>    
      <div className={styles.innerBarContent}>


          <h2>{prop.StockName}</h2>
          <p>Current Price: {prop.CurrentPrice}</p>
          <p>Starting Price: {prop.StartingPrice}</p>

     </div>

    </div>
  );
}
