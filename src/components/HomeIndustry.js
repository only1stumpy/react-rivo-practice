import '../style/style.css';


export default function Industry(){
    return(
        <section id='industry-section'>
            <div className='industry-section-content'>
                <h1 className='industry-section-title'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1>
                <h1 className='industry-section-title-under'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1>
                <div className='industry-buttons'>
                    <a href='/exterprise/retail-ecommerce'>Розничная торговля и <br/>e-commerce</a>
                    <a href='/exterprise/real-estate' className='right-zero'>Недвижимость</a>
                    <a href='/exterprise/custom-crm'>Индивидуальная CRM</a>
                    <a href='/exterprise/education-elearning' className='right-zero'>Образование и<br/>e-learning</a>
                    <a href='/exterprise/food-restaurant'>Питание и<br/>рестораны</a>
                    <a href='/exterprise/healthcare-fitness' className='right-zero'>Здравоохранение<br/>и фитнес</a>
                    <a href='/exterprise/logistic-distribution'>Логистика и дистрибуция</a>
                </div>
            </div>
        </section>
)
}