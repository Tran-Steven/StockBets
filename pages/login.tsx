import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/login.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Login() {

    const [data: session, status: loading] = useSession({required: true});
    const router = useRouter();

    if (status === 'loading') {
        return (
            <>
                <div>Loading...</div>;
            </>
        ) 
    } else if (status === 'authenticated') {
        router.push('/account')
    
    } if (status === 'unauthenticated') {
    // User is not authenticated, show login form or redirect to login page
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
}
