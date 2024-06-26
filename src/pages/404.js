import '../style/style.css'
import Header from '../components/Header'
import React from 'react'
import icon from '../img/404.png'
import arrow from '../img/Arrow_icon.png'
import Footer from '../components/Footer'
import scrolldown from '../img/Scroll down button.png'
export default function NotFound() {
    return(
        <div className='bg-404'>
            <div className='container-404'>
                <Header />
                <div className='content-404'>
                    <img src={icon} alt='404' className='img-404'/>
                    <h1 className='title-404'>Ошибка 404</h1>
                    <p>К сожалению, страница которую вы ищите не существует, либо произошла ошибка в ссылке, по которой вы перешли.<br/>(а возможно еще разработчик до сих пор не сделал страничку..)</p>
                    <a href='/'><h1 className='button-404'>GO TO HOME PAGE<img src={arrow} alt=''/></h1></a>
                    <a href='#footer'><img src={scrolldown} alt='' className='scroll-down-404'/></a>
                    <h1 className='bg-text-404'>error 404</h1>
                </div>
                <Footer/>
            </div>
        </div>
    )
}