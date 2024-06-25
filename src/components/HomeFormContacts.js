import React, { useState } from 'react';
import Contacts from '../components/Contacts'
import arrow from '../img/Arrow_icon.png'

export default function FormContacts() {
    return (
        <section id='contacts-section'>
                <div className='contacts-section-content'>
                    <h1 className='contacts-section-title'>контакты</h1>
                    <h1 className='contacts-section-title-under'>контакты</h1>
                    <div className='row-container'>
                        <StyledForm/>
                        <Contacts/>
                    </div>
                 </div>
        </section>
    )
}

const StyledForm = () => {
    const [name, setName]  = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.includes('@')) {
            setEmailError('Email должен содержать символ @');
        } else {
            setEmailError('');
        }
    };

    return (
        <form className="styled-form">
            <p>Имя</p>
            <input 
                type='text' 
                placeholder='Имя'
                onChange={(e)  => setName(e.target.value)}
            />
            
            <p>Email</p>
            <input 
                type='email' 
                className={`email-input ${emailError ? 'error-border' : ''}`} 
                placeholder='Email'
                onChange={handleEmailChange}
            />
            {emailError && <span className="error">{emailError}</span>}

            <p>Номер телефона</p>
            <input 
                type='tel' 
                className='phone-input' 
                placeholder='Номер телефона' 
                onChange={(e) => setPhone(e.target.value)}
            />
            
            <p>Сообщение</p>
            <input 
                type='text' 
                placeholder='Введите свое сообщение' 
                onChange={(e)  => setMessage(e.target.value)}
            />

            <button type='submit'>
                <h1>ОТПРАВИТЬ</h1>
                <img src={arrow}/>
            </button>
        </form>
    );
};