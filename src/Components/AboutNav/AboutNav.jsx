import React, { useEffect, useState } from 'react'
import "./AboutNav.scss"
import Group188 from "../../assets/images/Group188.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import i18n from "../../i18n"
import i18next from 'i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'







const AboutNav = () => {

    

    const {t} = useTranslation()
    const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));

    useEffect(() => {

      i18next.on('languageChanged',(lng) => {
        setLang(lng);
      });
    }, []);
  



  return (
    <div className='Nav_Container'>

        <div className='Topbar_Container'>


            <div className='Logo animate__animated animate__flash'>
                <img src={Group188} alt='Logo' />
            </div>

            <div className='Topbar_Links animate__animated animate__wobble'>

                <ul className='Link_head'>

                    <li> <Link to="/Home" className='Link'>{t('Home')}</Link></li>
                    <li> <Link to="/About" className='Link'>{t('About')}</Link></li>
                    <li> <Link to="/comp" className='Link'> {t('Compaines')}</Link></li>
                    <li> <Link to="/contact" className='Link'>{t('Contact')}</Link></li>
                </ul>

            </div>

            <div className='Lang animate__animated animate__flash'>
                
                <div className='icon'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.3857" stroke="white" strokwidth="1.22858"/>
                        <path d="M23.889 32.4173C28.7982 32.4173 32.7778 28.4376 32.7778 23.5284C32.7778 18.6192 28.7982 14.6395 23.889 14.6395C18.9798 14.6395 15.0001 18.6192 15.0001 23.5284C15.0001 28.4376 18.9798 32.4173 23.889 32.4173Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M35.0004 34.6395L30.1671 29.8062" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                        <Dropdown.Item className='DropItem' eventKey="en" >En</Dropdown.Item>
                            <Dropdown.Item className='DropItem' eventKey="ar">Ar</Dropdown.Item>
                            <Dropdown.Item className='DropItem' eventKey="tr">Tr</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>


            <div className='Toggle_Btn'>
              <Dropdown>
              <Dropdown.Toggle  className='Drop_Toggle_nav' >
              <FontAwesomeIcon icon={faBars} style={{color: "#C4BD54", marginRight: 10,cursor:"pointer" }} />
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


    </div>
  )
}

export default AboutNav