import React from 'react';
import Styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleAbourClick = () => {
        navigate('/About');
    }

    const handleContactClick = () => {
        navigate('/Contact');
    }

    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}

export default Home;