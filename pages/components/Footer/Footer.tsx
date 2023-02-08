import styles from '@styles/Footer.module.css'
import Card from '../Cards/Card'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h3>Collaberators</h3> 
            <div className={styles.cardBox}>
            <Card Name={"Owen Na"} email={"owensungminna@gmail.com"} linkdinLink={"https://www.linkedin.com/in/owen-na-634247236/"} githubLink={"https://github.com/owen-na"}/>
            <Card Name={"Steven Tran"} email={"stevenntran@outlook.com"} linkdinLink={"https://www.linkedin.com/in/steven-tran-26735b206"} githubLink={"https://www.github.com/Tran-Steven/"}/>
            <Card Name={"Owen Na"} email={"zhizhengwang28@gmail.com"} linkdinLink={"www.linkedin.com/in/zhizheng-wang28"} githubLink={"https://github.com/Zhizheng28"}/>
            </div>
        </div>
    )
}