import style from "@styles/Card.module.css";
import Link from "next/link";

export interface CardInfo {
  Name: string;
  email: string;
  linkedinLink: string;
  githubLink: string;
}

export default function Card(prop: CardInfo) {
  return (
    <div className={style.card}>
      <p>{prop.Name}</p>
      <p>{prop.email}</p>
      <div className={style.cardBottom}>
        <Link href="/about" legacyBehavior>
          <p>LinkedIn</p>
        </Link>
        <Link href="/about" legacyBehavior>
          <p>Github</p>
        </Link>
      </div>
    </div>
  );
}
