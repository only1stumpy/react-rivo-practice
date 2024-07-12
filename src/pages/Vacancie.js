import '../style/style.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import arrow from '../img/Arrow_icon_back.png'
import arr from '../img/Arrow_icon.png';


export default function Careers() {
    const {id} = useParams();
    return (
        <div className='bg-vacancie'>
            <Header />
            <div className='container vacancie-container'>
                <a href='/career' className='privacy-back-button'><img src={arrow} alt=''/>back to vacancies</a>
                <a href='/thanks' className='orderItem vacancie-button'>Apply<img src={arr} alt='arr' className='orderArrow'/></a>
                <h1 className='vacancie-title'>Middle PHP Developer {id}</h1>
            </div>
            <Footer />
        </div>

    );
}