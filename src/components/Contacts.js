import '../style/style.css';
import facebook from '../img/Facebook_icon.png'
import linkedin from '../img/LinkedIn_icon.png'
import instagram from '../img/Instagram_icon.png'
import twitter from '../img/twitter_icon.png'

export default function Contacts(){
    return(
        <div className='contact-container'>
            <h1 className='contact-title'>давайте создадим<br/>что-то важное</h1>
            <p>Rivne, A. Melnyk str.1, 33016</p>
            <p className='telephone-1'>+1 347 705 79 35</p>
            <p className='telephone-2'>+380 96 424 71 50</p>
            <div className='social-icons'>
                <a href='#'><img src={facebook} alt=''/></a>
                <a href='#'><img src={linkedin} alt=''/></a>
                <a href='#'><img src={instagram} alt='' className='black-to-white'/></a>
                <a href='#'><img src={twitter} alt=''/></a>
            </div>
        </div>
    )
}