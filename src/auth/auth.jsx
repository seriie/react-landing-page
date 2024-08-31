import React, { useState } from 'react';
import '../style/auth.css';
import useAlert from '../components/hooks/UseAlert';
import MyAlerts from '../components/My_alerts';

export default function Auth({ onLoginSuccess }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { alert, showAlert } = useAlert();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleRegister = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
    
        if (username === '' && password === '') {
            showAlert('All fields are required');
        } else if (username !== '' && password === '') {
            showAlert('Password required');
        } else if (username === '' && password !== '') {
            showAlert('Username required');
        } else if (storedUser && storedUser.username === username) {
            showAlert('Username already exists');
        } else {
            const userData = {
                username,
                password,
            };
            localStorage.setItem('user', JSON.stringify(userData));
            showAlert('Registration successful');
            setIsLogin(true);
        }
    };    

    const handleLogin = () => {
        if (username === '' && password === '') {
            showAlert('All fields are required');
        } else if (username !== '' && password === '') {
            showAlert('Password required');
        } else if (username === '' && password !== '') {
            showAlert('Username required');
        } else {
            const storedUser = JSON.parse(localStorage.getItem('user'));
    
            if (storedUser && storedUser.username === username && storedUser.password === password) {
                showAlert('Login successful');
                setTimeout(() => {
                    location.reload();
                    onLoginSuccess();
                }, 1500);
            } else {
                showAlert('Invalid username or password');
            }
        }
    };    

    return (
        <div className="auth-form">
            <MyAlerts alert={alert} /> {/* Include MyAlerts component */}
            {isLogin ? (
                <>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <p>Don't have an account? <a onClick={toggleForm} className='register-here'>Register here.</a></p>
                </>
            ) : (
                <>
                    <h2>Register</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}>Register</button>
                    <p>Already have an account? <a onClick={toggleForm} className='login-here'>Login here.</a></p>
                </>
            )}
        </div>
    );
}