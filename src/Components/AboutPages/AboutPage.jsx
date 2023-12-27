import React from 'react'
import"./AboutPage.scss"
import business1 from "../../assets/images/business1.png"
import { useTranslation } from 'react-i18next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import second from "../../assets/images/second.png"





const AboutPage = () => {

  const {t} =useTranslation()
  return (
    
    <Container>

    <div className='AboutPage'>


      <div className='Title'>

        <h3><span> {t("ABOUT")}</span>{t("TRILLIONI GROUP")}</h3>

      </div>


      <div className='Descreption_Group'>

          <Row>
            <Col xs={12} sm={12} md={12} xl={6}>
              <div className='Descreption_item'>


                <p><span>{t("Trillioni Group")}</span> {t("Trillioni ONE")} </p>                 


                    <p><span> {t("Trillioni Group")}</span>
                    {t("Trillioni TWO")}

                    </p>

                    <p><span>{t("Trillioni Group")}</span>
                    {t("Trillioni THREE")}
                    </p>

              </div>
            </Col>

              <Col xs={12} sm={12} md={12} xl={6}>
                <div className='Descreption_img'>


                    <div className='images'>


                      <img className='img_one' src={second} alt='frame' />







                    </div>



                </div>
              </Col>
          </Row>
        </div>

    </div>

    </Container>
  )
}

export default AboutPage