import style from "@styles/leagues.module.css"
import NavBar from "@components/Header/Header";
import Copyright from "@components/Copyright/Copyright";

export default function leagues() {

    return (
        <>
        <NavBar />
        <div className={style.parent}>
            <p>Leagues are a way to compete with others around the world or with close friends!
            We will continue to ship out updates as this passion project progresses. </p>
        </div>
        <Copyright />
        </>
    )
}