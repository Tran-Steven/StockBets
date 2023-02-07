import styles from '@styles/Footer.module.css'
import Card from '../Cards/Card'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h3>Collaberators</h3> 
            <div className={styles.cardBox}>
            <Card Name={"Owen Na"} email={"owensungminna@gmail.com"} linkdinLink={""} githubLink={""}/>
            <Card Name={"Steven Tran"} email={"stevenntran@outlook.com"} linkdinLink={"https://www.linkedin.com/in/steven-tran-26735b206"} githubLink={"https://www.github.com/Tran-Steven/"}/>
            <Card Name={"Owen Na"} email={"owensungminna@gmail.com"} linkdinLink={""} githubLink={""}/>
            </div>
        </div>
    )
}