import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className="homepage-container">
            <h2 className='hh'>Fruit.AI</h2>
            <p className="tagline">"Be Healthy!"</p>
            <div className="services-grid">
                <div className="service-card chat-card" onClick={() => handleClick('/chatbot')}>
                    <p>Chat.</p>
                </div>
                <div className="service-card empty1">
                </div>
                <div className="service-card empty2">
                </div>
                <div className="service-card translate-card" onClick={() => handleClick('/translator')}>
                    <img src="https://static.vecteezy.com/system/resources/previews/017/395/360/original/google-translate-icons-free-png.png" alt="Translate" />
                </div>
                <div className="service-card faq-card" onClick={() => handleClick('/faq')}>
                    <p>FAQs</p>
                </div>
                <div className="service-card about-card" onClick={() => handleClick('/about')}>
                    <p>About</p>
                </div>
            </div>
            <i className="fa-solid fa-circle sol" style={{color: "#fff", fontSize: "9px"}} />
            <i className="fa-solid fa-circle sol" style={{color: "#fff", fontSize: "9px"}} />
            <i className="fa-solid fa-circle sol" style={{color: "#fff", fontSize: "9px"}} />
        </div>
    );
};

export default Home;
