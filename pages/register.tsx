import Header from "@components/Header/Header"
import Copyright from "@components/Copyright/Copyright"
import style from "@styles/register.module.css"
import { useState } from 'react';
import axios from 'axios';

// function createPost() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//   function handleSubmit(event: any) {
//     event.preventDefault();
//     axios.post('/posts', { email, password })
//       .then(response => {
//         console.log(response.data);
//         // do something with response, like show a success message
//       })
//       .catch(error => {
//         console.error(error);
//         // handle error, like showing an error message
//       });
// }

export default function register() {
    return (
        <div>
            <Header />
            <form className={style.form}>
            <h2>Create an account</h2>
            <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required/> {/* onChange={event => setEmail(event.target.value)} */}
            <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>    
            <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/> {/* onChange={event => setPassword(event.target.value)} */}
            <button type="submit">Create Account</button>
            </form>
            <Copyright />
        </div>
    )
}
