
import contact from '../img/Contact-Main-Button.png'
import scrolldown from '../img/Scroll down button.png';

export default function Main(){
    return(
        <main>
            <div className='main-content'>
                <div className='main-title-1'>Мы агентство Rivo</div>
                <div className='main-title-2'>Помогаем</div>
                <div className='main-title-3'>идеям</div>
                <div className='main-title-4'>изменить</div>
                <div className='main-title-5'>весь мир</div>
            </div>
            <a href='#who-section' className='scroll-down'><img src={scrolldown} alt='scroll down'/></a>
            <a href='#' className='main-contacts'><img src={contact} alt='contact' className='rotate'/></a>
        </main>
    )
}