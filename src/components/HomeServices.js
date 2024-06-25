

import webdev from '../img/Web_development_icon.png'
import arrow from '../img/Arrow_icon.png'
import mobdev from '../img/Mobile_development_icon.png'
import customdev from '../img/Custom_development_icon.png'

export default function Services(){
    return(
        <section id='services-section'>
                    <div className='services-section-content'>
                        <h1 className='services-section-title'>Услуги</h1>
                        <h1 className='services-section-title-under'>Услуги</h1>
                        <div className='row-container'>
                            <div className='webdev-container'>
                                <img src={webdev} alt='webdev_icon'/>
                                <h1>Веб-разработка</h1>
                                <p>Начните разработку вашего программного обеспечения с нами, чтобы повысить эффективность вашего бизнеса и привлечь потенциальных клиентов. Имея более 10 лет опыта в разработке веб и мобильных приложений, мы знаем, как создавать быстрые и мощные веб-приложения, которые будут служить вашему бизнесу годами.</p>
                                <a href='#' className='order-button'>Сделать заказ<img src={arrow} alt='arrow'/></a>
                            </div>
                            <div className='mobdev-container'>
                                <img src={mobdev} alt='mobdev_icon'/>
                                <h1>Мобильная разработка</h1>
                                <p>Закажите разработку мобильных приложений в Rivo Agency, чтобы привлечь широкую аудиторию, поддерживать связь с клиентами, узнавать их потребности и завоевывать их лояльность. Наши разработчики приложений создают индивидуальные решения для устройств iOS и Android, которые упрощают взаимодействие с клиентами.</p>
                                <a href='#' className='order-button'>Сделать заказ<img src={arrow} alt='arrow'/></a>
                            </div>
                            <div className='customdev-container'>
                                <img src={customdev} alt='customdev_icon'/>
                                <h1>Индивидуальная разработка</h1>
                                <p>Используя наш обширный опыт в различных технологических стеках и отраслях, мы разрабатываем индивидуальное программное обеспечение, отвечающее специфическим потребностям вашего бизнеса. Наши эксперты разрабатывают быстро загружаемые, безопасные и масштабируемые SaaS-решения, которые легко интегрируются с сервисами сторонних производителей.</p>
                                <a href='#' className='order-button'>Сделать заказ<img src={arrow} alt='arrow'/></a>
                            </div>
                        </div>
                    </div>
                </section>
    )
}