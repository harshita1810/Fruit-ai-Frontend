import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('login'); 
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'abc@gmail.com' && password === 'pass') {
          navigate('/home');
        } else {
          alert('Invalid credentials!');
        }
      };

    return (
        <div className='main'>
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
            
                <h2>{activeTab === 'login' ? 'Login' : 'Register'}</h2>
                <p>By signing in you are agreeing to our <a href="/terms" className='term'>Terms and Privacy Policy</a></p>

                <div className="tab-switch">
                    <button 
                        type="button" 
                        className={activeTab === 'login' ? 'active' : ''}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button 
                        type="button" 
                        className={activeTab === 'register' ? 'active' : ''}
                        onClick={() => setActiveTab('register')}
                    >
                        Register
                    </button>
                </div>

                
                <div style={{ position: 'relative', display: 'inline-block' }}>
  <i className="fa-regular fa-envelope" style={{ color: "#c6c8cd", position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
  
  <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className='email'
    required
    style={{ paddingLeft: '35px' }}  
  />
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <i className="fa-solid fa-lock" style={{ color: "#c6c8cd", position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
  
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className='pass'
    required
    style={{ paddingLeft: '35px' }}  
  />
</div>
                {activeTab === 'login' && (
                    <div className="actions">
                    <label> <input type="checkbox" /> Remember password </label>
                        <a href="/forgot-password" className='forgot'>Forget password</a>
                    </div>
                )}

                <button type="submit" className="login-button">
                    {activeTab === 'login' ? 'Login' : 'Register'}
                </button>

                <div className="social-login">
    <p>or connect with</p>
    <button className="social-button">
        <i className="fa-brands fa-facebook" style={{color: "#1d92ed",fontSize:"30px"}}></i>
    </button>
    <button className="social-button">
        <i className="fa-brands fa-square-instagram" style={{color: "#ec74d6", fontSize: "30px"}} ></i>
    </button>
    <button className="social-button">
        <i className="fa-brands fa-pinterest" style={{color: "#f73636", fontSize: "30px"}}></i>
    </button>
    <button className="social-button">
        <i className="fa-brands fa-linkedin" style={{color: "#185ed8", fontSize: "30px"}} ></i>
    </button>
</div>


            </form>
        </div>
        </div>
    );
}

export default Login;
