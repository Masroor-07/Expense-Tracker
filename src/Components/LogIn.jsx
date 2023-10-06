
import React, { useState } from 'react';

function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleLogin = () => {
        
        if (credentials.username === 'masroor' && credentials.password === '12345') {
            onLogin(true); 
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;