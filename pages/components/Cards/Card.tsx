import style from "@styles/Card.module.css";
import Link from "next/link";
import github from "@assets/github.svg";
import linkedin from "@assets/linkedin.svg";
import email from "@assets/email.svg";
import Image from "next/image";
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
      <div className={style.cardBottom}>
        <a href={prop.linkedinLink} target="_blank" rel="noreferrer">
          <Image
            src={linkedin}
            alt="LinkedIn"
            loading="lazy"
            className={style.svg}
          />
        </a>
        <a href={prop.githubLink} target="_blank" rel="noreferrer">
          <Image
            src={github}
            className={style.svg}
            alt="GitHub"
            loading="lazy"
          />
        </a>

        <a href={`mailto:` + prop.email} target="_blank" rel="noreferrer">
          <Image src={email} className={style.svg} alt="Email" loading="lazy" />
        </a>
      </div>
    </div>
  );
}
