import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/login.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
// import { useEffect } from 'react'


export default function Login() {

    const { data: session} = useSession({required: true});
    const loading = session === null;
    const router = useRouter();

    if (loading || !session) {
        if (!session) {
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
    )} else {
        // loading aninmation???
    }
} else {
        router.push('./account');
    // User is authenticated, redirect to accountStats
} 
}
