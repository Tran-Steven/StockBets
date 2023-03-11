import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/register.module.css"

export default function register() {
    return (
        <div>
            <Header />
            <form className={style.form}>
            <h2>Create an account</h2>
            <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required/>
            <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>    
            <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
            <button type="submit">Create Account</button>
            </form>
            <Copyright />
        </div>
    )
}