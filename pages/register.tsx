import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/register.module.css"
import { createUser } from "./api/register";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createUser({ username, email, password })
    console.log(result)
    // Handle success or error based on result
  }
    return (
        <div>
            <Header />
            <form className={style.form} onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}/> {/* onChange={event => setEmail(event.target.value)} */}
            <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>    
            <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/> {/* onChange={event => setPassword(event.target.value)} */}
            <button type="submit">Create Account</button>
            </form>
            <Copyright />
        </div>
    )
}
