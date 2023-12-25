import React from 'react'
import"./AboutPage.scss"
import business1 from "../../assets/images/business1.png"
import Frame29 from "../../assets/images/frame29.png"
import { useTranslation } from 'react-i18next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




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
            <Col xs={12} sm={12} xl={6}>
              <div className='Descreption_item'>


                <p><span>{t("Trillioni Group ")}</span>
                  {t("is an institution that works on balancing the needs of the")}<br />
                  {t("  markets in many products and services, since its launch, and it focuses on")} <br />

                  {t("supporting the market with all its requirements, as the company combines")}<br />

                  {t("its ability to know the needs of different markets and cover its needs to")}<br />

                  {t(" develop its operations using the most effective business models and")}<br/>

                  {t("partnerships to achieve this.")}


                </p>                 


                    <p><span> {t("Trillioni Group")}</span>
                    {t("is headquartered in Turkey, and has chosen Turkey as a ")} <br/>
                    {t(" headquarters to manage its operations. The Company’s approach is")}<br/>
                    {t("characterized by continuous intelligence, maintaining integrity in all")}<br/>
                    {t(" of its business, as it works with its partners to test and meet")}<br/>
                    {t("market needs, in addition to expanding to more international markets.")} <br/>

                    {t("Trillioni group is wide in this field with a keen focus on opportunities.")}

                    </p>

                    <p><span>{t("Trillioni Group")}</span>
                      {t("has positioned its management team to take greater")} <br/>
                      {t("advantage by nurturing the growth and development of its high-potential")} <br/>
                      {t("strategy with unparalleled expertise in many markets. Trillioni Group")} <br/>
                      {t("delivers sustainable success to its companies and partners")}
                    </p>

              </div>
            </Col>

              <Col xs={12} sm={12} xl={6}>
                <div className='Descreption_img'>


                    <div className='images'>


                      <img className='img_one' src={Frame29} alt='frame' />
                      <img  className='img_two' src={Frame29} alt='frame' />
                      <img  className='img_three' src={business1} alt='frame' />







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