
import clutch from '../img/Cluch rating.png'
import video from '../img/Video.png'
import contactmini from  '../img/Contact-Main-Button-small.png'

export default function Who(){
    return(
        <section id='who-section'>
                    <div className='who-section-content'>
                        <h1 className='who-section-title'>Кто мы?</h1>
                        <h1 className='who-section-title-under'>Кто мы?</h1>
                        <div className='row-container'>
                            <div className='team-container'>
                                <h1>Привет! Мы команда профессионалов</h1>
                                <p>С доказанной экспертизой в предоставлении эффективных, защищенных и высококачественных цифровых решений для различных отраслей и цифрового маркетинга.</p>
                            </div>
                            <div className='company-container'>
                                <h1>Наша Компания</h1>
                                <p>Предлагает разработку различных продуктов, начиная с простых промо-сайтов для частных лиц или компаний и заканчивая сложными решениями для различных целей, например,</p>
                                <p>CRM и ERP системы, масштабируемые веб-платформы, мобильные приложения, Интернет вещей и т.д.</p>
                                <p>Мы применяем наш опыт и знания, чтобы превратить вашу идею в прототип и в готовый продукт.</p>
                                <img src={clutch} alt='clutch'/>
                            </div>
                        </div>
                        <img src={video} alt='video' className='who-section-video'/>
                        <a href='/contacts-section' className='mini-contacts'><img src={contactmini} alt='contact' className='rotate'/></a>
                    </div>
                </section>
    )
}