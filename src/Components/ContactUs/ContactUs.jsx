import React from 'react'
import "./ContactUs.scss"
import CONTACT from "../../assets/images/CONTACT.png"
import { useTranslation } from 'react-i18next'


const ContactUs = () => {

const {t} = useTranslation()

  return (
    <div className='Contact_Container'>

        <div className='Title_Section'>
            <img src={CONTACT} alt='COMPAINES' />
            <div className='image'>
            <h3>{t("CONTACT US ")}</h3>
            </div>
        </div>

        <div className='Contact_us'>

            <div className='Contact_inputs'></div>
            
            <div className='Contact_social'></div>

        </div>




        
        
        </div>
  )
}

export default ContactUs