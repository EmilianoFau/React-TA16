import React from 'react';
import Styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <div className="about">
            <h1>About</h1>
        </div>
    )
}

export default About;