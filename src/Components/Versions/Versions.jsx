import React from 'react'
import "./Versions.scss"
import { useTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Versions = () => {

  const {t} =useTranslation()
  

  return (

      <div className='Versions_container'>  
        <Row>
        <Col sm={12}>
          <div className='Versions'>


         

          
            <div className='Version_items'>
              <div className='icon'>
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="84" height="84" rx="8" fill="#A3A073" fill-opacity="0.22"/>
            <path d="M13.6666 42C13.6666 42 22.1666 22.1667 42 22.1667C61.8333 22.1667 70.3333 42 70.3333 42C70.3333 42 61.8333 61.8334 42 61.8334C22.1666 61.8334 13.6666 42 13.6666 42Z" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M41.5 51C46.1944 51 50 46.7467 50 41.5C50 36.2533 46.1944 32 41.5 32C36.8056 32 33 36.2533 33 41.5C33 46.7467 36.8056 51 41.5 51Z" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

              </div>
            <div className='desc_Version'>
              <h3>{t("Our Vision")}</h3>

              <p>{t("Trillioni Group is the balanced vision between")}<br />

              {t("knowing the needs of the market and the")} <br />
              {t("ability to cover its needs.")}
              
            </p>
            </div>





            </div>
            
            <div className='Version_items'>

                <div className='icon'>
                  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="84" height="84" rx="8" fill="#A3A073" fill-opacity="0.22"/>
                  <path d="M42 44.8334V13.6667L64.6667 25L42 36.3334" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M66.225 36.985C67.7327 41.632 67.8738 46.6144 66.6314 51.3394C65.389 56.0643 62.8155 60.3329 59.2169 63.6373C55.6184 66.9416 51.1463 69.1427 46.3328 69.9787C41.5193 70.8146 36.567 70.2502 32.0651 68.3525C27.5631 66.4549 23.7011 63.3039 20.9384 59.2745C18.1757 55.2451 16.6286 50.5069 16.4813 45.6236C16.334 40.7403 17.5926 35.9174 20.1074 31.7288C22.6222 27.5402 26.2873 24.1622 30.6667 21.9966" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M30.6667 36.3333C29.2469 38.2232 28.3226 40.4383 27.978 42.7769C27.6333 45.1154 27.8793 47.503 28.6936 49.7221C29.5078 51.9412 30.8643 53.9213 32.6396 55.482C34.4149 57.0427 36.5525 58.1344 38.8577 58.6576C41.1628 59.1808 43.5622 59.1189 45.8373 58.4775C48.1124 57.8361 50.1909 56.6356 51.8833 54.9854C53.5757 53.3352 54.8283 51.2877 55.527 49.0295C56.2256 46.7714 56.3482 44.3743 55.8834 42.0566" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>


                <div className='desc_Version'>
                  <h3>{t("Our Mission ")}</h3>
                  <p>  {t("Trillioni Group's mission is to maintain a")}<br />
                  {t("flexible, integrated business model and")}  <br />
                  {t("performance that translates into prosperity..")}
                  </p>
                </div>
            </div>





          </div>
          </Col>

          <Col sm={12}>
          <div className='Versions'>




            <div className='Version_items'>
              <div className='icon'>
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="84" height="84" rx="8" fill="#A3A073" fill-opacity="0.22"/>
                <path d="M34.9167 13.6667C35.8469 13.6667 36.768 13.8499 37.6274 14.2059C38.4868 14.5618 39.2676 15.0836 39.9254 15.7414C40.5831 16.3991 41.1049 17.18 41.4608 18.0393C41.8168 18.8987 42 19.8198 42 20.75V63.25C41.9962 65.0177 41.3316 66.72 40.1368 68.0226C38.942 69.3253 37.3033 70.1342 35.5426 70.2904C33.7819 70.4466 32.0264 69.9388 30.6209 68.8668C29.2155 67.7948 28.2616 66.236 27.9467 64.4967C26.7598 64.7609 25.525 64.7151 24.3609 64.3638C23.1969 64.0125 22.1429 63.3675 21.3003 62.4908C20.4578 61.6141 19.8552 60.5353 19.5504 59.3582C19.2456 58.1812 19.2489 56.9454 19.56 55.77C17.9304 55.2466 16.4968 54.2433 15.4468 52.8916C14.3968 51.5399 13.7794 49.9027 13.6753 48.1942C13.5712 46.4858 13.9853 44.7857 14.8634 43.3165C15.7415 41.8473 17.0427 40.6775 18.5967 39.96C17.6727 39.0472 17.0175 37.898 16.7027 36.638C16.3879 35.3779 16.4256 34.0555 16.8116 32.8155C17.1977 31.5754 17.9173 30.4653 18.8917 29.6066C19.8661 28.748 21.0579 28.1737 22.3367 27.9467C22.1304 27.0191 22.1128 26.0595 22.2851 25.125C22.4573 24.1905 22.8158 23.3002 23.3393 22.5071C23.8627 21.714 24.5404 21.0343 25.3319 20.5086C26.1235 19.9828 27.0127 19.6217 27.9467 19.4467C28.251 17.8211 29.1145 16.3533 30.3875 15.2976C31.6606 14.2419 33.2629 13.6649 34.9167 13.6667Z" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M49.0833 13.6667C47.2047 13.6667 45.403 14.413 44.0747 15.7414C42.7463 17.0697 42 18.8714 42 20.75V63.25C42.0038 65.0177 42.6684 66.72 43.8632 68.0226C45.058 69.3253 46.6967 70.1342 48.4574 70.2904C50.2181 70.4466 51.9736 69.9388 53.3791 68.8668C54.7846 67.7948 55.7384 66.236 56.0533 64.4967C57.2402 64.7609 58.4751 64.7151 59.6391 64.3638C60.8031 64.0125 61.8572 63.3675 62.6997 62.4908C63.5422 61.6141 64.1449 60.5353 64.4497 59.3582C64.7545 58.1812 64.7511 56.9454 64.44 55.77C66.0696 55.2466 67.5032 54.2433 68.5532 52.8916C69.6032 51.5399 70.2206 49.9027 70.3247 48.1942C70.4288 46.4858 70.0147 44.7857 69.1366 43.3165C68.2585 41.8473 66.9573 40.6775 65.4033 39.96C66.3273 39.0472 66.9825 37.898 67.2973 36.638C67.6121 35.3779 67.5744 34.0555 67.1884 32.8155C66.8023 31.5754 66.0827 30.4653 65.1083 29.6066C64.1339 28.748 62.9421 28.1737 61.6633 27.9467C61.8696 27.0191 61.8872 26.0595 61.7149 25.125C61.5427 24.1905 61.1842 23.3002 60.6608 22.5071C60.1373 21.714 59.4597 21.0343 58.6681 20.5086C57.8766 19.9828 56.9873 19.6217 56.0533 19.4467C55.749 17.8211 54.8855 16.3533 53.6125 15.2976C52.3394 14.2419 50.7371 13.6649 49.0833 13.6667Z" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>




            <div className='desc_Version'>
              <h3>{t("Philosophy ")}</h3>
              <p> 
                  {t(" Trillioni Group works on balancing science and")} <br />
                  {t("business by understanding the concept of time")} <br />
                  {t("as part of the basic structure of the universe,")}<br />
                  {t("and realizes the potential power and dread of")}<br />
                  {t("the present moment. And believes that work is")} <br />

                  {t("the achiever of results, as the company devotes ")} <br />
                  
                  {t("its maximum capabilities to reach its goals and")} <br />
                  {t("those of partners.")}
              </p>
            </div>





            </div>
            


            <div className='Version_items'>
              <div className='icon'>

                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="84" height="84" rx="8" fill="#A3A073" fill-opacity="0.22"/>
                <path d="M16.5 16.5V67.5H67.5" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M61.8333 33.5L47.6666 47.6667L36.3333 36.3333L27.8333 44.8333" stroke="#A3A073" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>



              </div>
            <div className='desc_Version'>
              

              <h3>{t("SCOPE OF BUSINESS")}</h3>
              <p> 
                {t("Trillioni Group operates in agricultural crops it")}<br />
                {t("focuses on the sesame crop of various types ,")}<br />
                {t("white sesame, red sesame and Sudanese")} <br />
                {t("sesame.")}

              </p>
            </div>





            </div>



          </div>
          </Col>
          </Row>

          

      </div>
  )
}

export default Versions