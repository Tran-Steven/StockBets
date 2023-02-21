import styles from "@styles/LoadingInfobar.module.css";

export default function LoadingInfobar() {
  return (
    <div className={styles.loadingBar}>
      <svg>
        <path d="M 150 287 A 200 200 120 1 1 250 287" />
      </svg>
      <div className={styles.innerBarContent}></div>
    </div>
  );
}
