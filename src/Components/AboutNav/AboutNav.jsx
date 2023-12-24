import React from 'react'
import "./AboutNav.scss"
import Group188 from "../../assets/images/Group188.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Ellipse1 from "../../assets/images/Ellipse1.png"
import Search1 from "../../assets/images/Search1.png"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';




const AboutNav = () => {

    

    const {t} = useTranslation()


  return (
    <div className='Nav_Container'>

        <div className='Topbar_Container'>


            <div className='Logo'>
                <img src={Group188} alt='Logo' />
            </div>

            <div className='Topbar_Links'>

                <ul className='Link_head'>

                    <li> <Link to="/Home" className='Link'>{t('Home')}</Link></li>
                    <li> <Link to="/About" className='Link'>{t('About')}</Link></li>
                    <li> <Link className='Link'> {t('Compaines')}</Link></li>
                    <li> <Link className='Link'>{t('Contact')}</Link></li>
                </ul>

            </div>

            <div className='Lang'>
                
                <div className='icon'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.3857" stroke="white" stroke-width="1.22858"/>
                        <path d="M23.889 32.4173C28.7982 32.4173 32.7778 28.4376 32.7778 23.5284C32.7778 18.6192 28.7982 14.6395 23.889 14.6395C18.9798 14.6395 15.0001 18.6192 15.0001 23.5284C15.0001 28.4376 18.9798 32.4173 23.889 32.4173Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M35.0004 34.6395L30.1671 29.8062" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>

                <div className='lang_Button'>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle className='DropBtn'>
                        <Dropdown.Item className='DropItem' >En</Dropdown.Item>
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item className='DropItem'>Ar</Dropdown.Item>
                            <Dropdown.Item className='DropItem'>Tr</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>

        </div>


    </div>
  )
}

export default AboutNav