import styles from "@styles/LoadingInfobar.module.css";

export default function LoadingInfobar() {
  return (
    <div className={styles.loadingBar}>
        <svg viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="250" pathLength="100" strokeDasharray="75 25"/>
          {/* // <path d=" M 250 400 A 200 200 120 1 1 450 400" /> */}
        </svg>    
      <div className={styles.innerBarContent}>
     </div>

    </div>
  );
}
