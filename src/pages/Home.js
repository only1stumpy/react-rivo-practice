import '../style/style.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stack from '../components/HomeStack';
import Projects from '../components/HomeProjects';
import Reviews from '../components/HomeReviews';
import FormContacts from '../components/HomeFormContacts';
import Industry from '../components/HomeIndustry';
import Services from '../components/HomeServices';
import Who from '../components/HomeWho';
import Main from '../components/HomeMain';

export default function Home() {
    // Метод для плавной прокрутки
    useEffect(() => {
        const smoothScroll = (target, duration) => {
            const targetElement = document.querySelector(target);
            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;
          
            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
          
            const ease = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
          
            requestAnimationFrame(animation);
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((each) => {
            each.addEventListener('click', (e) => {
                e.preventDefault();
                const target = each.getAttribute('href').slice(1);
                smoothScroll(`#${target}`, 1000); 

            });
        });
    }, []);
    return (
        <div className='background-elements'>
            <div className='main-bg'>
                <Header />
                <Main/>
                <Who/>
                <Services/>
                <Industry/>
                <Stack />
                <Projects/>
                <Reviews/>
                <FormContacts/>
                <Footer />
            </div>
        </div>
    );
}

