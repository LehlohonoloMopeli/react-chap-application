import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function LoginForm() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': '36613617-517c-4915-b5b9-04fb03edae95', 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();           // We have the infor locally. Next time he/she visits, they won't need to log in again

        } catch (error) {
            setError('Username or Password is incorrect!');
        }

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>IBS Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className='input' type='text' value={username} onChange={handleChangeUsername} placeholder='Username' required />
                    <input className='input' type='password' value={password} onChange={handleChangePassword} placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
