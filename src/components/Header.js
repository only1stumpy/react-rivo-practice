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
        <header className='flex justify-between items-center pt-[50px] px-[20px] pb-[10px] line-clamp-1'>
            <a href='/'><img src={logo} alt='logo' className='ml-[60px]'/></a>
            <div className='flex items-center mh-[55px]'>
                <a href ="/#services-section" className='font-gilroy font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Услуги</a>
                <a href ="/#projects" className='font-gilroy font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Проекты</a>
                <div className='dropdown' ref={dropdownRef}>
                <p onClick={handleExterpriseOpen} className='font-gilroy font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden cursor-pointer box-border grid grid-flow-col items-center gap-1'>Предприятие<img src={arr} alt='arrow' className='ml-[0px]'/></p>
                {isDropdownOpen && (
                  <div className={`mt-[10px] absolute flex flex-col items-start bg-[#0C0C0C] py-4 pl-5 z-20  transition-opacity duration-300 ease-in `}>
                  <a href='/exterprise/healthcare-fitness' className='m-[24px] font-gilroy font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Здравоохранение и фитнес</a>
                  <a href='/exterprise/retail-ecommerce' className='font-gilroy m-[24px]  font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Розничная торговля и e-commerce</a>
                  <a href='/exterprise/real-estate' className='font-gilroy font-normal m-[24px] text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Недвижимость</a>
                  <a href='/exterprise/custom-crm' className='font-gilroy font-normal text-[18px] m-[24px]  mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Индивидуальная CRM</a>
                  <a href='/exterprise/education-elearning' className='font-gilroy font-normal text-[18px] m-[24px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Образование и e-learning</a>
                  <a href='/exterprise/food-restaurant' className='font-gilroy font-normal text-[18px] mx-[1.4vw] m-[24px] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Питание и рестораны</a>
                  <a href='/exterprise/logistic-distribution' className='font-gilroy font-normal text-[18px] mx-[1.4vw] m-[24px] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Логистика и дистрибуция</a>
              </div>
                )}
              </div>
                <a href ="/#contacts-section" className='font-gilroy font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Контакты</a>
                <a href ="/career" className='font-gilroy font-normal text-[18px] mx-[1.4vw] transition ease-in duration-300 text-white relative hover:text-[#FDDD0A] before:content-[""] before:block before:absolute before:w-full before:h-[2px] before:bg-[#FDDD0A] before:bottom-[-10px] before:left-0 before:scale-x-0 before:transition before:ease-in before:duration-300 hover:before:scale-x-100 md:hidden'>Вакансии</a>
                <a href ="/order" className='font-road font-normal text-[17px] text-[#FDDD0A] border border-[#FDDD0A] p-[15px] mx-[3vw] transition ease-in duration-300 hover:filter hover:grayscale hover:brightness-[1000%] grid grid-flow-col items-center gap-2 '>Сделать заказ<img src={arrow} alt='arrow'/></a>
                <p onClick={handleMenuOpen} className='font-road font-bold text-[18px] mr-[4vw] transition ease-in duration-300 cursor-pointer text-white relative grid grid-flow-col items-center gap-2 '><img src={menu} alt='arrow'/>Меню</p>
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