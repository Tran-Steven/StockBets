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

function calculateCorrect(TotalGuesses: number, CorrectGuesses: number) {
    return (CorrectGuesses / TotalGuesses * 100).toFixed();
}

export default function AccountContent({TotalGuesses, CorrectGuesses}: AccountInfo) {
  return (
    <div className={style.parent}>
      <div className={style.mainContent}>
         <h2>User Info</h2>
         <div className={style.playerCard}>
         <p>pfp placeholder</p>
          <h1>UserName PlaceHolder</h1>
          </div>
          <div className={style.listStyle}>
          <ul className={style.lifetimeInfo}>
            <li>Memeber Since:</li>
            <li>Lifetime Points:</li>
            <li>Total Guesses:</li>           
            <li>Guesses Correct (%) : {calculateCorrect(TotalGuesses, CorrectGuesses)}</li>
            <li>Leagues Won:</li>
          </ul>
          <ul className={style.specs}>
            <li>Weekly Rank (as of _____)</li>
            <li>Peak Rank:</li>
            <li>Recent Ranks</li>
          </ul>
          </div>
          <h3>Socials</h3>
          <ul className={style.socials}>
            <li>PlaceHolder</li>
            <li>PlaceHolder</li>
          </ul>
      </div>
    </div>
  );
}

// bottom code maybe used for a pfp functionality
// will also need to figure out what the hell to do with this accound info page

// import Image from 'next/image';

// const ProfilePic = () => {
//   const [imgSrc, setImgSrc] = useState('/placeholder.jpg');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.addEventListener('load', () => {
//         setImgSrc(reader.result);
//       });
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-pic">
//       <Image src={imgSrc} alt="Profile Picture" width={100} height={100} className="rounded-full" />
//       <label htmlFor="profile-pic-input">
//         <i className="fa fa-camera"></i>
//       </label>
//       <input type="file" id="profile-pic-input" accept="image/*" onChange={handleFileChange} />
//     </div>
//   );
// };
