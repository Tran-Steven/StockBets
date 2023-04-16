import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/register.module.css"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsDisabled(true)
    router.push('./account');
    // Handle success or error based on result
  }
    return (
        <div>
            <Header />
            <form className={style.form} onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}/> 
            <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>    
            <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" disabled={isDisabled}>Register</button> 
            </form>
            <Copyright />
        </div>
    )
}
