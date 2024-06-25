import '../style/style.css';


export default function Industry(){
    return(
        <section id='industry-section'>
            <div className='industry-section-content'>
                <h1 className='industry-section-title'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1>
                <h1 className='industry-section-title-under'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1>
                <div className='industry-buttons'>
                    <a href='/industry'>Розничная торговля и <br/>e-commerce</a>
                    <a href='/industry'>Недвижимость</a>
                    <a href='/industry'>Индивидуальная CRM</a>
                    <a href='/industry'>Образование и<br/>e-learning</a>
                    <a href='/industry'>Питание и<br/>рестораны</a>
                    <a href='/industry'>Здравоохранение<br/>и фитнес</a>
                    <a href='/industry'>Логистика и дистрибуция</a>
                </div>
            </div>
        </section>
)
}