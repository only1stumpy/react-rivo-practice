import '../style/style.css';
import React, { useState, useEffect, useRef } from 'react';
import logo from '../img/Rivo_logotype.png';
import arrow from '../img/Arrow_icon.png';
import menu from '../img/Burger_menu_icon.png';
import arr from '../img/Arrow_icon (1).png';
import close from '../img/Burger menu.png'
import contact from '../img/Contact-Main-Button.png'

import Contacts from './Contacts';


export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen]  = useState(false);
  const dropdownRef = useRef(null);

  const handleExterpriseOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  const handleMenuOpen = ()  =>  {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
        <header>
            <a href='/'><img src={logo} alt='logo' className='header-logo'/></a>
            <div className='header-nav'>
                <a href ="/#services-section" className='navItem'>Услуги</a>
                <a href ="/#projects" className='navItem'>Проекты</a>
                <div className='dropdown' ref={dropdownRef}>
                <p onClick={handleExterpriseOpen} className='navItem exterprise-nav'>Предприятие<img src={arr} alt='arrow' className='arrExterprise' /></p>
                {isDropdownOpen && (
                  <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                  <a href='/exterprise/healthcare-fitness' className='navItem'>Здравоохранение и фитнес</a>
                  <a href='/exterprise/retail-ecommerce' className='navItem'>Розничная торговля и e-commerce</a>
                  <a href='/exterprise/real-estate' className='navItem'>Недвижимость</a>
                  <a href='/exterprise/custom-crm' className='navItem'>Индивидуальная CRM</a>
                  <a href='/exterprise/education-elearning' className='navItem'>Образование и e-learning</a>
                  <a href='/exterprise/food-restaurant' className='navItem'>Питание и рестораны</a>
                  <a href='/exterprise/logistic-distribution' className='navItem'>Логистика и дистрибуция</a>
              </div>
                )}
              </div>
                <a href ="/#contacts-section" className='navItem'>Контакты</a>
                <a href ="/career" className='navItem'>Вакансии</a>
                <a href ="/order" className='orderItem'>Сделать заказ<img src={arrow} alt='arrow' className='orderArrow'/></a>
                <p onClick={handleMenuOpen} className='menuItem'><img src={menu} alt='arrow'/>Меню</p>
                {isMenuOpen &&
                  <div className={`menu-container ${isMenuOpen ? 'show' : ''}`}>
                    <Menu handleMenuOpen={handleMenuOpen}/>
                  </div>
                }
            </div>
        </header>
  );
}
function Menu({handleMenuOpen})  {
  return (
    
      <div className='menu'>
        <div className='menu-logos'>
          <a href='/'><img src={logo} alt='logo' className='header-logo'/></a>
          <img src={close} alt='' className='close-menu' onClick={handleMenuOpen}/>
        </div>
        <div className='menu-items'>
          <div className='menu-nav'>
            <a href='/' onClick={handleMenuOpen}><h1 className='menu-item-nav'>home</h1></a>
            <a href='/#who-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>кто мы</h1></a>
            <a href='/#services-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>услуги</h1></a>
            <a href='/#industry-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1></a>
            <a href='/#stack-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>ТЕХНОЛОГИИ</h1></a>
            <a href='/#projects' onClick={handleMenuOpen}><h1 className='menu-item-nav'>проекты</h1></a>
            <a href='/#reviews-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>Отзывы</h1></a>
            <a href='/#contacts-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>контакты</h1></a>
            <a href='/career' onClick={handleMenuOpen}><h1 className='menu-item-nav'>вакансии</h1></a>
            <a href='/blog' onClick={handleMenuOpen}><h1 className='menu-item-nav'>блог</h1></a>
          </div>
          <Contacts/>
          <div className='menu-item-policy'>
                <p className='policy-menu-rivo'>2024 © Rivo Agency</p>
                <a href='/policy'><p className='policy-menu-a'>Политика конфиденциальности и Условия использования</p></a>
            </div>
        </div>
        <a href='/#contacts-section' className='menu-contacts'><img src={contact} alt='contact' className='rotate'/></a>

      </div>
      
  )
}