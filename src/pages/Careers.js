import '../style/style.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormContacts from '../components/HomeFormContacts';

export default function Careers() {
    return (
        <div className='bg-careers'>
            <Header />
            <div className='careers-title-container'>
                <div className='careers-titles'>
                    <h1 className='careers-title'>Вакансии</h1>
                    <h1 className='careers-title-under'>Вакансии</h1>
                </div>
                <div className='careers-titles-content'>
                    <h2>Хотите присоединиться к нашей команде?</h2>
                    <p>Так как мы постоянно растем, нам требуются новые таланты для пополнения нашей профессиональной команды. Пожалуйста, предоставьте нам свою информацию и портфолио, и мы свяжемся с вами в ближайшее время.</p>
                </div>
            </div>
            <div className='vacancies-container'>
                <h1 className='vacancies-title'>Текущие вакансии</h1>
                <div className='vacancies-content'>
                    <div className='vacancies-card'>
                        <h1 className='vacancies-hug'>SENIOR</h1>
                        <h1 className='vacancies-card-title'>react developer</h1>
                        <h1 className='vacancies-hug-hot'>HOT</h1>
                        <p className='vacancies-salary'>Зарплата: $ 1500</p>
                        <p className='vacancies-location'>Луцк, Ровно, удаленно</p>
                        <a href='/career/senior-react' className='vacancies-button'>Просмотреть детали</a>
                    </div>
                    <div className='vacancies-card'>
                        <h1 className='vacancies-hug'>MIDDLE</h1>
                        <h1 className='vacancies-card-title'>php developer</h1>
                        <p className='vacancies-salary'>Зарплата: $ 1100</p>
                        <p className='vacancies-location'>Луцк, Ровно, удаленно</p>
                        <a href='/career/middle-php' className='vacancies-button'>Просмотреть детали</a>
                    </div>
                    <div className='vacancies-card'>
                        <h1 className='vacancies-hug'>SENIOR</h1>
                        <h1 className='vacancies-card-title'>wordpress developer</h1>
                        <p className='vacancies-salary'>Зарплата: $ 1100</p>
                        <p className='vacancies-location'>Луцк, Ровно, удаленно</p>
                        <a href='/career/senior-wp' className='vacancies-button'>Просмотреть детали</a>
                    </div>
                    <div className='vacancies-card'>
                        <h1 className='vacancies-hug'>JUNIOR</h1>
                        <h1 className='vacancies-card-title'>laravel developer</h1>
                        <p className='vacancies-salary'>Зарплата: $ 550</p>
                        <p className='vacancies-location'>Луцк, Ровно, удаленно</p>
                        <a href='/career/junior-laravel' className='vacancies-button'>Просмотреть детали</a>
                    </div>
                </div>
            </div>
            <FormContacts/>
            <Footer />
        </div>

    );
}