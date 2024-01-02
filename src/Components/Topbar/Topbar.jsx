import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import"./Topbar.scss"
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import impor from "../../assets/images/impor.png"
import i18n from "../../i18n"
import header from "../../assets/images/header.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'





const Topbar = () => {

    const {t} = useTranslation()
    const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));

    useEffect(() => {

      i18next.on('languageChanged',(lng) => {
        setLang(lng);
      });
    }, []);
  
  return (

    <header>

    <div className='Topbar_Container'>


        <div className='Logo animate__animated animate__flash animate__repeat-2'>
          <img src={header} alt="logo" />

        </div>

        <div className='Topbar_Links animate__animated animate__fadeInRight'>
            <ul className='Link_head'>
                <li> <Link to="/Home" className='Link'>{t('Home')}</Link></li>
                <li> <Link to="/About" className='Link'>{t('About')}</Link></li>
                <li> <Link to="/comp" className='Link'> {t('Compaines')}</Link></li>
                <li> <Link to="/contact" className='Link'>{t('Contact')}</Link></li>
            </ul>

    
        </div>
        
        <div className='Lang animate__animated animate__fadeInRight'>

                <div className='icon'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.3857" stroke="#C4BD54" stroke-width="1.22858"/>
                    <path d="M23.8889 32.4173C28.7981 32.4173 32.7778 28.4376 32.7778 23.5284C32.7778 18.6192 28.7981 14.6395 23.8889 14.6395C18.9797 14.6395 15 18.6192 15 23.5284C15 28.4376 18.9797 32.4173 23.8889 32.4173Z" stroke="#C4BD54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.0003 34.6395L30.167 29.8062" stroke="#C4BD54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            <div className='lang_Button'>
                <Dropdown as={ButtonGroup}

                              onSelect={(eventKey) => {
                                console.log(eventKey)
                                if (eventKey === 'ar') {
                                  document.documentElement.setAttribute('dir', 'rtl');
                                  document.documentElement.setAttribute('lang', 'ar');
                                  localStorage.setItem('i18nextLng', 'ar');
                                  i18n.changeLanguage('ar');

                                } else if(eventKey === 'tr'){
                                  document.documentElement.setAttribute('dir', 'ltr');
                                  document.documentElement.setAttribute('lang', 'tr');
                                  localStorage.setItem('i18nextLng', 'tr');
                                  i18n.changeLanguage('tr');
                                }
                                 else if(eventKey === 'en'){
                                document.documentElement.setAttribute('dir', 'ltr');
                                document.documentElement.setAttribute('lang', 'en');
                                localStorage.setItem('i18nextLng', 'en');
                                i18n.changeLanguage('en');
                              }

                              }}
                

                
                >
                    <Dropdown.Toggle className='DropBtn'> 
                            {lang}
                    </Dropdown.Toggle>

                    <Dropdown.Menu >

                      <Dropdown.Item as="button" className='DropItem' eventKey="ar">Ar</Dropdown.Item>
                            <Dropdown.Item as="button" className='DropItem' eventKey="en">En</Dropdown.Item>
                              <Dropdown.Item as="button" className='DropItem' eventKey="tr" >Tr</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div>

        <div className='Toggle_Btn'>
              <Dropdown>
              <Dropdown.Toggle  className='Drop_Toggle' >
              <FontAwesomeIcon icon={faBars} style={{color: "#fffff", marginRight: 10,cursor:"pointer" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu className='Menu_toggle'>
                <Dropdown.Item>
                  <Link to="/Home" className='Link'>{t('Home')}</Link>
                  </Dropdown.Item>

                <Dropdown.Item>
                <Link to="/About" className='Link'>{t('About')}</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                <Link to="/comp" className='Link'> {t('Compaines')}</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                <Link to="/contact" className='Link'>{t('Contact')}</Link>
                </Dropdown.Item>


              </Dropdown.Menu>
    </Dropdown>




            </div>

    </div>






    



    <div className='title'>
        <img src={logo} alt="logo"  className=' animate__animated animate__flip animate__repeat-2'  />
         <p className='Logo_title animate__animated animate__heartBeat'>{t('WELCOME TO TRILLIONI GROUP')}</p>
    </div>

    <div className='Contact_us'>

        <button className='OurBtn animate__animated animate__backInLeft'>{t("Our Company")} 
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4043 2.65435L15.7499 9L9.4043 15.3457" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.7499 9L2.25 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button className='contactBTn animate__animated animate__backInRight'>{t("Contact us")}</button>
    </div>
    

    <div className='Arrow  animate__animated animate__fadeOutDown animate__repeat-3'>
        <img src={impor} alt='Aroow'/>
    </div>
    </header>

    
  )
}

export default Topbar