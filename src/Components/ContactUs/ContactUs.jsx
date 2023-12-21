import React from 'react'
import "./ContactUs.scss"
import CONTACT from "../../assets/images/CONTACT.png"
import { useTranslation } from 'react-i18next'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Arrows from "../../assets/images/Arrows.png"
import location from "../../assets/images/location.png"
import call from "../../assets/images/call.png"
import sms from "../../assets/images/sms.png"
import Google from "../../assets/images/Google.png"
import Website from "../../assets/images/Website.png"




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

            <div className='Contact_inputs'>
                <form>
                    <input className='input' type="text" placeholder='Enter Full Name' />
                    <input className='input' type="text" placeholder='Enter E-mail' />
                    <input className='input' type="phoneNumber" placeholder='Enter Number Phone' />
                    <FloatingLabel controlId="floatingTextarea2" label="Please type your messsage here ...">
                        <Form.Control
                        as="textarea"
                        placeholder="Please type your messsage here ..."
                        style={{ height: '100px' }}
                        className='input_TextArea'
                        />
                    </FloatingLabel>

                    <div className='Btn_Input'>
                    <button className='Btn'>
                        Send message<img className='m-1' src={Arrows} alt='arrow'/>
                    </button>
                    </div>
                </form>


            </div>

            <div className='Contact_social'>

                <div className='social'>
                    <div className='icon'>
                    <img src={location} alt='location'/>

                    </div>
                    

                    <p>Cumhuriyet Mah. Yeni Yol 1 Sk. Now Bomonti<br/> Blok No: 2 İç Kapı No: 62 Şişli/İstanbul, Turkey.</p>
                </div>

                <div className='social'>

                    <div className='icon'>
                    <img src={call} alt='location'/>
                    </div>
                    <p>Phone: +905346073494  /  +905332844899</p>
                </div>



                <div className='social'>
                    <div className='icon'>
                    <img src={sms} alt='location'/>

                    </div>
                    

                    <p>Email: info@trillioni.com</p>
                </div>

                <div className='social'>
                    <div className='icon'>
                    <img src={Google} alt='location'/>

                    </div>
                    

                    <p>Email: trillionigroup@gmail.com</p>
                </div>

                <div className='social'>
                    <div className='icon'>
                    <img src={Website} alt='location'/>

                    </div>
                    

                    <p>Website: www.trillioni.com</p>
                </div>

            </div>

        </div>




        
        
        </div>
  )
}

export default ContactUs