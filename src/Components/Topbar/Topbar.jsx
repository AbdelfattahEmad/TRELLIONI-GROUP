import React, { useEffect, useState } from 'react'
import Group from "../../assets/images/Group.png"
import Arrow from "../../assets/images/Arrow.png"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import Ellipse from "../../assets/images/Ellipse.png"
import Search from "../../assets/images/Search.png"
import"./Topbar.scss"
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import impor from "../../assets/images/impor.png"

const Topbar = () => {

    const {t} = useTranslation()
  
    useEffect(() => {
      i18next.on('languageChanged', (lng) => {
        setLang(lng);
      });
    }, []);
  
  return (

    <header>

    <div className='Topbar_Container'>


        <div className='Logo'>
            <img src={Group} alt='Logo' />
        </div>

        <div className='Topbar_Links'>
            <ul className='Link_head'>
                <li> <Link to="Home" className='Link'>{t('Home')}</Link></li>
                <li> <Link to="About" className='Link'>{t('About')}</Link></li>
                <li> <Link className='Link'> {t('Compaines')}</Link></li>
                <li> <Link className='Link'>{t('Contact')}</Link></li>
            </ul>
    
        </div>
        
        <div className='Lang'>
             <img  className="circle" src={Ellipse} alt='circel'/>
                <div className='icon'>
                   <img  className="Search" src={Search} alt='circel'/>
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

    <div className='title'>
        <img src={logo} alt="logo" />
         <p className='Logo_title'>{t('WELCOME TO TRILLIONI GROUP')}</p>
    </div>

    <div className='Contact_us'>

        <span className='OurBtn'>
            <p> {t("Our Company")}</p>
            <img src={Arrow} alt='arrow'/>
        </span>

        <button className='contactBTn'> {t("Contact us")}</button>
        
    </div>

    <div className='Arrow'>
        <img src={impor} alt='Aroow'/>
    </div>

    

    </header>

    
  )
}

export default Topbar