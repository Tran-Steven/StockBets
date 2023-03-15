import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/login.module.css"

export default function login() {
return (
    <div>
            <Header />
            <form className={style.form}>
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required/>   
            <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
            <button type="submit">Login</button>
            </form>
            <Copyright />
        </div>
)
}