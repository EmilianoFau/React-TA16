import React from 'react';
import Styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <div className="contact">
            <h1>Contact</h1>
        </div>
    )
}

export default Contact;