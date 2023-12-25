import React from 'react'
import "./Footer.scss"
import Layer2 from "../../assets/images/Layer2.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
import LinkedIn from "../../assets/images/LinkedIn.png"
import YouTube from "../../assets/images/YouTube.png"
import { useTranslation } from 'react-i18next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {

    const {t}=useTranslation()
  return (
    <footer>
            <Container>
           


         
        <div className='Head_Container'>
        <div className='Head'>


        <Row >

        <Col xs={12} sm={6} lg={3}>
            <div className='Logo'>
                <img src={Layer2} alt='logo' />
            </div>
        </Col>

            <Col xs={12} sm={6} lg={3}>
                <div className='Content'>
                <h4>{t("Content")}</h4>
                    <hr />
                    <ul className='Content_items'>
                        <li>{t("About")}</li>
                        <li> {t("Compaines")}</li>
                        <li> {t("Contact")}</li>
                    </ul>

                </div>
            </Col>

            <Col xs={12} sm={6} lg={3}>
                <div className='Our_Compaines'>
                <h4>{t("COMPAINES ")}</h4>
                    <hr />
                    <ul className='Compaines_item'>
                        <li> {t("Trillioni Sesame")}</li>
                        <li> {t("Trillioni Chad")}</li>
                        <li> {t("Trillioni Pharma")}</li>
                        <li> {t("Trillionaire Signals")}</li>
                    </ul>

                </div>
            </Col>


            <Col xs={12} sm={6} lg={3}>

            <div className='social'>


                <h3>{t("SOCIAL MEDIA")}</h3>
                <hr />

                <ul className='images'>
                    <li><img src={Facebook} alt='FaceBook' /></li>
                    <li><img src={Instagram} alt='instgram' /></li> 
                    <li><img src={LinkedIn} alt='LinkedIn' /></li>
                    <li><img src={YouTube} alt='Youtube' /></li>

                </ul>

            </div>
            </Col>

            </Row >


        </div>
        </div>

        <hr className='hr'/>
        
        <p className='p'>{t("Copyright © Trillioni Group | All Rights Reserved | Terms and Conditions | Privacy Policy")}</p>
        
        </Container>

        </footer>
  )
}

export default Footer