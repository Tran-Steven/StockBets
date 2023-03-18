import style from "@styles/LeaderBoard.module.css"


function pfpRetriever() {
    // no idea i need this yet?
}

function userInsert() {
    return (
        <>
            <div className={style.playerCard}>
                <p>pfp holder</p> {/* will need to change markup once returning proper pfp */}
                <div>
                    <h2>Steven</h2>
                    <p>80.8%</p>
                </div>
                    <p>122</p>
            </div>
        </>
    )
    // actually inserts users as a bar into the leaderboard
}

function leaderBoardType() {
    // weekly vs lifetime vs leagues (last is very optional)
}

export default function LeaderBoard() {
    return (
        <div className={style.parent}>
            <div>
                {userInsert()}
                {userInsert()}
                {userInsert()}
                {userInsert()}
                {userInsert()}
            </div> 
        </div>
    )
}