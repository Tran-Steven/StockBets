import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/login.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {

    const {data: session} = useSession();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loading = session === null;
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    }

    // if (loading || !session) {
        if (!session) {
        return (
            <div>
                <Header />
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={username} required onChange={(e) => setUsername(e.target.value)}/>   
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                </form>
                <Copyright />
            </div>
    )} else if (loading) {
        return (
            <div>Loading...</div>
        )
        // loading aninmation???
    }
 else {
        router.push('./account');
        return null;
    // User is authenticated, redirect to accountStats
} 
}

