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
            <a href='#'><img src={logo} alt='logo' className='header-logo'/></a>
            <div className='header-nav'>
                <a href ="#services-section" className='navItem'>Услуги</a>
                <a href ="#projects" className='navItem'>Проекты</a>
                <div className='dropdown' ref={dropdownRef}>
                <a onClick={handleExterpriseOpen} className='navItem exterprise-nav'>Exterprise<img src={arr} alt='arrow' className='arrExterprise' /></a>
                {isDropdownOpen && (
                  <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                    <a href='#' className='navItem'>Healthcare & Fitness</a>
                    <a href='#' className='navItem'>Retail & Ecommerce</a>
                    <a href='#' className='navItem'>Real Estate</a>
                    <a href='#' className='navItem'>Custom CRM</a>
                    <a href='#' className='navItem'>Education & E-Learning</a>
                    <a href='#' className='navItem'>Food & Restaurant</a>
                    <a href='#' className='navItem'>Retail & E-Commerce</a>
                    <a href='#' className='navItem'>Logistic & Distribution</a>
                  </div>
                )}
              </div>
                <a href ="#contacts-section" className='navItem'>Contacts</a>
                <a href ="#" className='navItem'>Careers</a>
                <a href ="#" className='orderItem'>Make order<img src={arrow} alt='arrow' className='orderArrow'/></a>
                <a onClick={handleMenuOpen} className='menuItem'><img src={menu} alt='arrow'/>Menu</a>
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
          <a href='#'><img src={logo} alt='logo' className='header-logo'/></a>
          <img src={close} alt='' className='close-menu' onClick={handleMenuOpen}/>
        </div>
        <div className='menu-items'>
          <div className='menu-nav'>
            <a href='#' onClick={handleMenuOpen}><h1 className='menu-item-nav'>home</h1></a>
            <a href='#who-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>кто мы</h1></a>
            <a href='#services-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>услуги</h1></a>
            <a href='#industry-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>ОТРАСЛЕВАЯ ЭКСПЕРТИЗА</h1></a>
            <a href='#stack-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>ТЕХНОЛОГИИ</h1></a>
            <a href='#projects' onClick={handleMenuOpen}><h1 className='menu-item-nav'>проекты</h1></a>
            <a href='#reviews-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>Отзывы</h1></a>
            <a href='#contacts-section' onClick={handleMenuOpen}><h1 className='menu-item-nav'>контакты</h1></a>
            <a href='#' onClick={handleMenuOpen}><h1 className='menu-item-nav'>career</h1></a>
            <a href='#' onClick={handleMenuOpen}><h1 className='menu-item-nav'>blog</h1></a>
            <div className='menu-item-policy'>
                <p>2024 © Rivo Agency</p>
                <a href='#'><p>Privacy Policy & Term of Use</p></a>
            </div>
          </div>
          <Contacts/>
        </div>
        <a href='#' className='menu-contacts'><img src={contact} alt='contact' className='rotate'/></a>

      </div>
      
  )
}