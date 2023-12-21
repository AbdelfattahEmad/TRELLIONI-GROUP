import React from 'react'
import "./Compaines.scss"
import COMPAINES from "../../assets/images/COMPAINES.png"
import seseam1 from "../../assets/images/seseam1.png"
import ArrowRight from "../../assets/images/ArrowRight.png"
import { useTranslation } from 'react-i18next'
import Asset12 from "../../assets/images/Asset12.png"
import logo1 from "../../assets/images/logo1.png"













const Compaines = () => {

  const {t} = useTranslation()

  return (


    
    <div className='Head_Compaines'>

        <div className='Title_Section'>
            <img src={COMPAINES} alt='COMPAINES' />
                <div className='image'>
                <h3>{t("OUR COMPAINES ")}</h3>
                </div>

        </div>


  <div className='Compaines_Card_container'>



    <div className='Compaines_Card'>

        <div className='image'>
        <img src={seseam1} alt='Image' />

        </div>

      <div className='content'>
      

      <h4>{t("TRILLIONI SESAME ")}</h4>
      <p> {t("The areas of work of Trillion Group include")}<br/>
        {t("various kinds, white sesame, red sesame and")}<br/>
        <br/> {t("Sudanese sesame")} </p>

        <div className='visit'>
          <p>{t("Visit Website")}</p>
          
          <img src={ArrowRight} alt='arrow' />
        </div>


      </div>


    </div>



  <div className='Compaines_Card'>

  <div className='image'>
  <img src={Asset12} alt='Image' />

  </div>

  <div className='content'>


  <h4>{t("TRILLIONI CHAD")}</h4>

  <p> {t("Trillioni Group Export and Import is a company")}<br/>
  {t("specialized in international trade; it deals in a")}<br/>
  {t("wide range of diversified commodities.It")}
  <br/> {t("headquartered in the Republic of Chad")} </p>

  <div className='visit'>
    <p>{t("Visit Website")}</p>
    
    <img src={ArrowRight} alt='arrow' />
  </div>


  </div>


      </div>




      <div className='Compaines_Card'>

      <div className='image'>
      <img className='img3' src={logo1} alt='Image' />

      </div>

      <div className='content'>
      <h4>{t("TRILLIONI PHARMA ")}</h4>
      <p> {t("Connecting Pharma Future, Redefining Tomorrow")}<br/>
      {t(" within the next few years,we aspire to be")}<br/>
      {t("recognized not just as a platform but as industry")}<br/>
      <br/> {t("experts and trusted collaborators.")} </p>

      <div className='visit'>
        <p>{t("Visit Website")}</p>
        
        <img src={ArrowRight} alt='arrow' />
      </div>


      </div>


      </div>






  </div>



        
    </div>


  )
}

export default Compaines