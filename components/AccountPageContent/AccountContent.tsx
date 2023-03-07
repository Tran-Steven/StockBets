import style from "@styles/AccountContent.module.css"

export default function AccountContent() {
  return (
    <div className={style.placeHolder}>
    <h2>Account Info</h2>
    <div className={style.parent}>
      <div className={style.mainContent}>
          <ul>
            <img src="" alt="Profile Picture"></img>
            <li>Total Guesses</li>
            <li>Guesses Correct (%) </li>
          </ul>
      </div>
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
