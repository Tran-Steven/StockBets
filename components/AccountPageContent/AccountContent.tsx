import style from "@styles/AccountContent.module.css"
import prisma from "prisma/prisma";

export interface AccountInfo {
  username: string;
  membersince: string;
  lifetimepoints: number;
  totalguesses: number;
  correctguesses: number;
  leagueswon: number;
  weeklyrank: string;
  peakrank: string;
  recentrank: string;
}


// ranks: (1 - 3) Bronze, Silver, Gold, Plat, Diamond, Masters (top 50?)

// implement a line chart with npm install chart.js (later)

// https://css-tricks.com/snippets/javascript/random-hex-color/ 

function setDefaultBG(Username : string) {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   const defaultHolder = document.getElementById("test");
   const colorInfo = { PfpColor: "null" }
  if (defaultHolder) {
    defaultHolder.style.backgroundColor = "#" + randomColor;
    const color = await prisma.accountstats.update ({
      where: {
        username: 
      }
    })
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

export default function AccountContent({username, membersince, lifetimepoints, leagueswon, totalguesses, correctguesses, weeklyrank, peakrank, recentrank}: AccountInfo) {
  return (
    <div className={style.parent}>
      <div className={style.mainContent}>
         {/* <h2>User Info</h2> */}
         <div className={style.playerCard}>
          <div className={style.default} id="test">
            <button className={style.colorChanger} onClick={() => setDefaultBG(username)}>
              <p className={style.intial}>{getFirstLetter("Steven")}</p>
            </button>
            {/* <div className={style.colorMessage}>
              <p>Click me to change your profile color!</p>
            </div> */}
          </div>
          <h1>{username}StevenTran</h1>
          {/* maybe for titles too, add this for filler <h3>&#127881; Beta Tester &#127881;</h3> */}
          </div>
          <div className={style.listStyle}>
          <ul className={style.lifetimeInfo}>
            <li>Member Since: {membersince}</li>
            <li>Lifetime Points: {lifetimepoints}</li>
            <li>Total Guesses: {totalguesses}</li>           
            <li>Guesses Correct (%) {calculateCorrect(totalguesses, correctguesses)}</li>
            <li>Leagues Won: {leagueswon}</li>
          </ul>
            <div className={style.specTest}>
            <ul className={style.specs}>
              <li>Weekly Rank {weeklyrank}</li>
              <li>Peak Rank {peakrank}</li>
              <li>Recent Rank (as of {pastWeekRank()}) {recentrank}</li>
            </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
