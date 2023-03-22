import style from "@styles/AccountContent.module.css"

export interface AccountInfo {
  Username: string;
  MemberSince: string;
  LifetimePoints: number;
  TotalGuesses: number;
  CorrectGuesses: number;
  LeaguesWon: number;
  WeeklyRank: string;
  PeakRank: string;
  RecentRank: string;
}

// ranks: (1 - 3) Bronze, Silver, Gold, Plat, Diamond, Masters (top 50?)

// implement a line chart with npm install chart.js (later)

// https://css-tricks.com/snippets/javascript/random-hex-color/ 

function setDefaultBG(Username : string) {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   const defaultHolder = document.getElementById("test");
  if (defaultHolder) {
    defaultHolder.style.backgroundColor = "#" + randomColor;
  }
  // store current color into db for current player
}


function calculateCorrect(TotalGuesses: number, CorrectGuesses: number) {
  return (CorrectGuesses / TotalGuesses * 100).toFixed(1);
}

function pastWeekRank() {
  let curDate = new Date();
  let dayNumber = curDate.getDay();
  let lastWeekDate = new Date();

  lastWeekDate.setDate(curDate.getDate() - dayNumber);

  return (lastWeekDate.getMonth() + 1)+ '/' + lastWeekDate.getDate() + '/' + lastWeekDate.getFullYear();
}

function getFirstLetter(Username: string) {
  const letter = Username.charAt(0);
  return letter;
}

export default function AccountContent({Username, MemberSince, LifetimePoints, LeaguesWon, TotalGuesses, CorrectGuesses, WeeklyRank, PeakRank, RecentRank}: AccountInfo) {

  return (
    <div className={style.parent}>
      <div className={style.mainContent}>
         {/* <h2>User Info</h2> */}
         <div className={style.playerCard}>
          <div className={style.default} id="test">
            <button className={style.colorChanger} onClick={() => setDefaultBG(Username)}>
              <p className={style.intial}>{getFirstLetter("Steven")}</p>
            </button>
            {/* <div className={style.colorMessage}>
              <p>Click me to change your profile color!</p>
            </div> */}
          </div>
          <h1>{Username}StevenTran</h1>
          {/* maybe for titles too, add this for filler <h3>&#127881; Beta Tester &#127881;</h3> */}
          </div>
          <div className={style.listStyle}>
          <ul className={style.lifetimeInfo}>
            <li>Member Since: {MemberSince}</li>
            <li>Lifetime Points: {LifetimePoints}</li>
            <li>Total Guesses: {TotalGuesses}</li>           
            <li>Guesses Correct (%) {calculateCorrect(TotalGuesses, CorrectGuesses)}</li>
            <li>Leagues Won: {LeaguesWon}</li>
          </ul>
            <div className={style.specTest}>
            <ul className={style.specs}>
              <li>Weekly Rank {WeeklyRank}</li>
              <li>Peak Rank {PeakRank}</li>
              <li>Recent Rank (as of {pastWeekRank()}) {RecentRank}</li>
            </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
