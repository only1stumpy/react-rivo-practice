import '../style/style.css';
import React, { useState } from 'react';
import video from '../img/Video.png'
import video1 from '../img/Video(1).png'
import arrnav from '../img/Arrow_nav.png'
import pagin from '../img/Ellipse 27.png'
import paginActive from '../img/Progress bar.png'
import clutch from '../img/Cluch rating.png'

export default function Reviews() {
    return (
        <section id='reviews-section'>
            <div className='reviews-section-content'>
                <h1 className='reviews-section-title'>Отзывы</h1>
                <h1 className='reviews-section-title-under'>отзывы</h1>
                <Review/>
            </div>
        </section>
    )
}
const CardReviews = ({title, name, message, imgSrc}) =>{
    return(
        <div className='card-reviews-container'>
            <div className='card-reviews-content'>
                <h1 className='card-reviews-title'>{title}</h1>
                <h1 className='card-reviews-name'>{name}</h1>
                <p className='card-reviews-message'>{message}</p>
                <a href='#'><img src={clutch} alt=''/></a>
            </div>
            <img className='card-reviews-img' src={imgSrc} alt=''/>
        </div>
    )
}
const Review = () => {
    const reviews = [
        { title: "Collective Filmsfotografie", name: "Charlotte Preisel", message: "Лучший дизайн, профессиональная помощь и отличные предложения.", imgSrc: video1 },
        { title: "Пример отзыва 2", name: "Джон Доу", message: "Отличное обслуживание и превосходный дизайн!", imgSrc: video },
        { title: "Пример отзыва 3", name: "Джейн Смит", message: "Очень довольна профессиональной помощью.", imgSrc: video1 },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };
    return(
        <div>
            <CardReviews 
                title={reviews[currentIndex].title}
                name={reviews[currentIndex].name}
                message={reviews[currentIndex].message}
                imgSrc={reviews[currentIndex].imgSrc}
            />
            <div className='reviews-container'>
                <div className='reviews-pagination'>
                {reviews.map((_, index) => (
                        <img
                            key={index}
                            src={index === currentIndex ? paginActive : pagin}
                            className={index === currentIndex ? 'pagin-active' : 'pagin'}
                            alt={`Page ${index + 1}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                <div className='reviews-navigation'>
                    <img src={arrnav} onClick={handlePrev} className='arrnav1' />
                    <img src={arrnav} onClick={handleNext} className='arrnav2' />
                </div>
            </div>
        </div>
    )
}