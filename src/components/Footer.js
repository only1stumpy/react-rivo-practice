import '../style/style.css';

export default function Footer() {
    return (
        <footer id='footer'>
            <a href='/'><h1 className='footer-nav'>home</h1></a>
            <a href='/#who-section'><h1 className='footer-nav'>кто мы</h1></a>
            <a href='/#services-section'><h1 className='footer-nav'>услуги</h1></a>
            <a href='/#industry-section'><h1 className='footer-nav'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1></a>
            <a href='/#stack-section'><h1 className='footer-nav'>ТЕХНОЛОГИИ</h1></a>
            <a href='/#projects'><h1 className='footer-nav'>проекты</h1></a>
            <a href='/#reviews-section'><h1 className='footer-nav'>Отзывы</h1></a>
            <a href='/#contacts-section'><h1 className='footer-nav'>контакты</h1></a>
            <a href='/career'><h1 className='footer-nav'>вакансии</h1></a>
            <a href='/blog'><h1 className='footer-nav'>блог</h1></a>
            <div className='footer-policy'>
                <p>2024 © Rivo Agency</p>
                <a href='/policy'><p>Политика конфиденциальности и Условия использования</p></a>
            </div>
        </footer>
    )
}