import '../style/style.css';
import React, { useState} from 'react';

import proj1 from '../img/proj1.png'
import proj2 from '../img/proj2.png'
import proj3 from '../img/proj3.png'
import proj4 from '../img/proj4.png'
import proj5 from '../img/proj5.png'
import arrow from '../img/Arrow_icon.png'

export default function Projects() {
    return(
        <section id='projects'>
        <div className='projects-section-content'>
            <h1 className='projects-section-title'>проекты</h1>
            <h1 className='projects-section-title-under'>проекты</h1>
            <CardProj title="Mens" imgSrc={proj1} />
            <CardProj title="Saltmine" imgSrc={proj2} />
            <CardProj title="Haul Cars" imgSrc={proj3} />
            <CardProj title="Skyline Energy" imgSrc={proj4} />
            <CardProj title="Jotul" imgSrc={proj5} />
            <a href='#' className='proj-cases-button'>показать больше проектов<img src={arrow} alt=''/></a>
        </div>
    </section>
    )
}

const CardProj = ({title, imgSrc}) => {
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className='card-container'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <h1 className='card-title'>{title}</h1>
            <a href='#' className='card-project'><img className='card-img' src={imgSrc} alt=''/>
            {(isHovered && 
                <h2 className='view-proj'>посмотреть проект<img src={arrow} alt='' className='view-proj-img'/></h2>
                )}
            </a>
        </div>
    )
}