import React from 'react'
import "./Compaines.scss"
import ArrowRight from "../../assets/images/ArrowRight.png"
import { useTranslation } from 'react-i18next'
import logo1 from "../../assets/images/logo1.png"


const Compaines = () => {

  const {t} = useTranslation()

  return (


    
    <div className='Head_Compaines'>

        <div className='Title_Section'>
           <h2>{t("COMPAINES")}</h2>
                <div className='image'>
        <h3>{t("OUR COMPAINES ")}</h3> 

                </div>

        </div>


  <div className='Compaines_Card_container'>



    <div className='Compaines_Card'>

        <div className='image'>
          <svg width="132" height="133" viewBox="0 0 132 133" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_102_632)">
  <path d="M66.0009 133C48.552 133 32.1508 126.08 19.8044 113.509C13.7127 107.337 8.88618 100.006 5.60234 91.9389C2.31849 83.8713 0.642168 75.2259 0.669769 66.5C0.669769 48.739 7.45802 32.039 19.8044 19.491C32.1508 6.94294 48.552 0 66.0009 0C83.4499 0 99.8511 6.91988 112.197 19.491C118.289 25.663 123.116 32.9936 126.4 41.0611C129.683 49.1287 131.36 57.7741 131.332 66.5C131.332 84.261 124.544 100.961 112.197 113.509C106.166 119.708 98.9736 124.626 91.0407 127.973C83.1079 131.32 74.5948 133.029 66.0009 133ZM66.0009 3.6906C31.9914 3.6906 4.31447 31.8776 4.31447 66.5C4.31447 101.122 31.9914 129.309 66.0009 129.309C100.011 129.309 127.687 101.122 127.687 66.5C127.687 31.8776 100.033 3.6906 66.0009 3.6906Z" fill="#A8A16D"/>
  <path d="M70.8078 33.1V34.484C70.7981 35.8597 71.3273 37.1833 72.2794 38.1647C73.2315 39.1462 74.529 39.7054 75.8876 39.72H80.6029C78.3022 45.6481 72.6529 49.7077 66.5481 49.8461V28.925H76.2065L75.9332 28.4868C74.817 26.6645 72.7668 24.7501 69.6233 22.6741C69.271 22.4425 68.8587 22.3221 68.4388 22.3281H36.9805V22.628C36.9805 26.111 40.853 28.9481 45.6366 28.9481H60.4888V48.6698C54.7939 46.2478 50.9898 40.5274 50.8303 34.0919V33.8151H45.1127V34.1149C45.2949 43.7566 51.6276 52.3373 60.4888 54.9899V66.523H61.7872C64.4296 66.523 66.5936 63.1554 66.5936 59.0034V55.8203C72.1746 55.7511 77.4138 53.3983 81.3547 49.2233C85.3165 45.0268 87.5136 39.4361 87.4823 33.6306V33.1H70.8078Z" fill="#A8A16D"/>
  <path d="M84.4069 22.3281C80.58 15.6389 73.6095 11.4869 66.2062 11.4869C63.4773 11.4878 60.7757 12.0367 58.2576 13.1018C55.7395 14.1668 53.4551 15.7269 51.5363 17.6918L51.0352 18.1992H61.582L61.6503 18.1762C63.1226 17.6975 64.66 17.4562 66.2062 17.4611C68.3451 17.4732 70.4578 17.9393 72.4078 18.8292C74.3578 19.7192 76.1019 21.0133 77.5275 22.6279L77.6642 22.7894C79.0649 24.5639 80.1375 26.5799 80.8305 28.7405L80.8989 28.9481H89.5095C92.5847 28.9481 95.0676 26.5953 95.0676 23.7121V22.3281H84.4069Z" fill="#A8A16D"/>
  <path d="M18.119 75.6111H9.62231L9.82733 73.489H18.324L18.119 75.6111ZM17.6634 79.9706H10.579L10.8296 77.8485H17.8912L17.6634 79.9706ZM17.2306 84.3071H11.5586L11.7636 82.185H17.4356L17.2306 84.3071ZM16.775 88.6205H12.5609L12.7659 86.4984H16.98L16.775 88.6205ZM16.3194 92.9569H13.5176L13.7682 90.8348H16.5472L16.3194 92.9569ZM32.675 77.8485H28.4836L26.684 95.1482H22.356L24.1555 77.8485H19.873L20.3286 73.5121H33.1306L32.675 77.8485Z" fill="#A8A16D"/>
  <path d="M44.9305 95.1253H40.648L40.9441 92.3112L38.7345 86.4293H37.3222L36.411 95.1022H32.1057L34.3609 73.4661H47.1629L45.7961 86.4293H43.7915L45.3177 91.1117L44.9305 95.1253ZM41.992 82.1159L42.402 77.8256H38.2106L37.755 82.1159H41.992Z" fill="#A8A16D"/>
  <path d="M51.0354 95.1252H46.7756L49.0308 73.489H53.2905L51.0354 95.1252Z" fill="#A8A16D"/>
  <path d="M65.7051 95.1252H52.9031L55.1582 73.489H59.418L57.6184 90.7887H66.2062L65.7051 95.1252Z" fill="#A8A16D"/>
  <path d="M79.4412 95.1252H66.6392L68.8943 73.489H73.1541L71.3545 90.7887H79.9423L79.4412 95.1252Z" fill="#A8A16D"/>
  <path d="M84.6577 95.1252H80.3979L82.6531 73.489H86.9128L84.6577 95.1252Z" fill="#A8A16D"/>
  <path d="M99.3274 95.1252H86.5254L88.7805 73.489H101.583L99.3274 95.1252ZM95.5005 90.7887L96.8217 77.8255H92.653L91.3091 90.7887H95.5005Z" fill="#A8A16D"/>
  <path d="M113.997 95.1252H109.783L111.583 77.8255H107.323L105.524 95.1252H101.218L103.473 73.489H116.275L113.997 95.1252Z" fill="#A8A16D"/>
  <path d="M120.148 95.1252H115.888L118.143 73.489H122.403L120.148 95.1252Z" fill="#A8A16D"/>
  <path d="M31.8937 111.837C34.6409 111.99 36.5004 112.067 37.4723 112.067C37.5731 112.075 37.6743 112.061 37.7691 112.026C37.8639 111.99 37.9499 111.934 38.0214 111.862C38.0928 111.79 38.1479 111.703 38.1829 111.607C38.2179 111.511 38.2319 111.408 38.2241 111.306V109.934H34.7662C33.7137 109.934 32.9499 109.692 32.4745 109.209C31.9992 108.727 31.7608 107.953 31.7593 106.889V106.428C31.7593 105.362 31.9977 104.588 32.4745 104.105C32.9514 103.622 33.7153 103.381 34.7662 103.383H40.0441V105.514H35.3675C34.7601 105.514 34.4564 105.822 34.4564 106.437V106.741C34.4564 107.356 34.7601 107.664 35.3675 107.664H38.0737C39.0563 107.664 39.7776 107.895 40.2378 108.356C40.6933 108.817 40.9211 109.553 40.9211 110.55V111.311C40.9211 112.304 40.6933 113.035 40.2378 113.502C39.7822 113.97 39.0608 114.2 38.0737 114.194C37.5635 114.194 37.0221 114.183 36.4495 114.162L35.0668 114.102C34.0433 114.051 32.9856 113.98 31.8937 113.89V111.837Z" fill="#A7A06D"/>
  <path d="M52.1309 114.044H43.7869V103.388H52.1309V105.519H46.4931V107.574H50.9282V109.705H46.4931V111.913H52.1309V114.044Z" fill="#A7A06D"/>
  <path d="M54.5205 111.837C57.2677 111.99 59.1272 112.067 60.0991 112.067C60.1999 112.075 60.3011 112.061 60.3959 112.026C60.4906 111.99 60.5767 111.934 60.6481 111.862C60.7196 111.79 60.7747 111.703 60.8097 111.607C60.8447 111.511 60.8587 111.408 60.8508 111.306V109.934H57.3907C56.3383 109.934 55.5744 109.692 55.0991 109.209C54.6237 108.727 54.3853 107.953 54.3838 106.889V106.428C54.3838 105.362 54.6222 104.588 55.0991 104.105C55.5759 103.622 56.3398 103.383 57.3907 103.388H62.6686V105.519H57.9943C57.3869 105.519 57.0831 105.826 57.0831 106.441V106.746C57.0831 107.361 57.3869 107.669 57.9943 107.669H60.7005C61.6831 107.669 62.4044 107.899 62.8645 108.361C63.3201 108.822 63.5479 109.558 63.5479 110.554V111.315C63.5479 112.309 63.3201 113.039 62.8645 113.507C62.409 113.974 61.6876 114.205 60.7005 114.199C60.1902 114.199 59.6489 114.188 59.0763 114.166L57.6936 114.106C56.6701 114.056 55.6124 113.985 54.5205 113.894V111.837Z" fill="#A7A06D"/>
  <path d="M67.9922 114.044H65.0605L69.0447 103.388H72.0515L76.0356 114.044H73.1085L72.4251 112.141H68.6665L67.9922 114.044ZM69.3453 110.162H71.7417L70.539 106.585L69.3453 110.162Z" fill="#A7A06D"/>
  <path d="M87.3114 108.107L85.2066 111.913H83.1018L80.997 108.107V114.044H78.2908V103.388H81.1473L84.1542 109.02L87.1611 103.388H90.0176V114.044H87.3114V108.107Z" fill="#A7A06D"/>
  <path d="M101.669 114.044H93.3252V103.388H101.669V105.519H96.0314V107.574H100.467V109.705H96.0314V111.913H101.669V114.044Z" fill="#A7A06D"/>
  </g>
  <defs>
  <clipPath id="clip0_102_632">
  <rect width="130.662" height="133" fill="white" transform="translate(0.670166)"/>
  </clipPath>
  </defs>
          </svg>


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
      <svg width="131" height="130" viewBox="0 0 131 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_102_738)">
    <path d="M46.4853 127.267C32.1957 123.04 19.7298 113.781 11.3219 101.599C4.44595 91.6376 0.64903 80.0668 0.0732094 67.992C-0.203426 62.2349 0.291843 56.4669 1.54609 50.8385C3.84719 40.5947 8.38128 31.4439 15.1484 23.3861C20.6748 16.7889 27.4595 11.3333 35.1152 7.33035C35.7555 6.99437 36.4078 6.66992 37.0722 6.35701C45.9888 2.12912 55.4023 0.0101326 65.3125 3.87742e-05C70.0926 -0.00513041 74.8589 0.506564 79.5267 1.52602C89.8477 3.77334 99.3865 8.54378 107.432 15.3009C112.064 19.1864 116.134 23.6847 119.526 28.6691C125.19 37.028 128.887 46.6218 130.132 56.6623C131.443 67.2256 130.317 77.4186 126.752 87.2413C124.991 92.0925 122.641 96.7137 119.753 101.003C116.36 106.053 112.278 110.616 107.625 114.563C103.604 117.98 99.1749 120.897 94.4379 123.249C92.6052 124.167 90.7239 124.986 88.8021 125.703C87.8111 126.071 86.8353 126.451 85.829 126.767C81.6071 128.1 77.4496 129.039 73.0746 129.547C64.013 130.591 55.1499 129.831 46.4853 127.267ZM75.0272 4.37032C68.7183 3.37382 62.2914 3.35266 55.9759 4.3076C54.3894 4.5448 52.9326 4.82202 51.6054 5.13926C49.6681 5.60214 47.6839 6.09854 45.8045 6.76149C45.0222 7.03907 44.2322 7.32494 43.4346 7.61911C41.6758 8.27388 39.9519 9.01711 38.2697 9.84589C36.7793 10.5784 35.5774 11.2136 34.664 11.7515C33.8882 12.2086 33.0928 12.6895 32.2777 13.1942C31.4134 13.7349 30.5611 14.3427 29.7121 14.9245C29.1352 15.3218 28.5481 15.7494 27.9508 16.2072C20.0685 22.2505 13.9687 29.72 9.65129 38.6156C7.09166 43.9197 5.32565 49.5644 4.4088 55.3721C3.57499 60.6844 3.43142 66.0805 3.98158 71.4289C4.05442 72.1802 4.14511 72.916 4.25365 73.6362C5.79864 84.1029 9.73214 93.5118 16.0542 101.863C22.1285 109.888 29.7908 116.111 39.0411 120.529C39.6967 120.842 40.3672 121.144 41.0527 121.436C50.1762 125.315 59.7466 126.912 69.7639 126.226C83.8786 125.26 97.2099 119.347 107.514 109.747C114.387 103.341 119.567 95.643 123.053 86.653C123.304 86.0041 123.552 85.3167 123.795 84.5906C125.481 79.6139 126.514 74.4436 126.871 69.2065C127.561 58.817 125.735 48.8828 121.396 39.404C121.097 38.7551 120.78 38.1015 120.445 37.4432C116.316 29.3065 110.422 22.1729 103.184 16.5522C94.9964 10.1904 85.3059 5.99797 75.0272 4.37032Z" fill="#E74344"/>
    <path d="M83.7082 21.7661C83.7187 21.7836 83.7335 21.7982 83.7513 21.8084C83.7691 21.8186 83.7892 21.8242 83.8098 21.8245H94.3472C94.3606 21.8245 94.3733 21.8297 94.3828 21.8391C94.3922 21.8484 94.3975 21.861 94.3975 21.8742C94.4062 22.3357 94.4062 22.7928 94.3975 23.2456C94.3516 25.6757 92.5455 27.5931 90.2684 28.1296C89.7512 28.2514 89.0501 28.3102 88.1651 28.3058C85.3133 28.2943 82.691 28.2914 80.2981 28.2972C80.276 28.2984 80.2542 28.2921 80.2363 28.2793C80.2184 28.2665 80.2055 28.248 80.1997 28.2269C79.6329 26.4773 78.8114 24.8189 77.761 23.304C76.1876 21.0155 73.8067 19.2333 71.2128 18.1939C67.881 16.8594 64.4887 16.7087 61.0359 17.7419C60.9071 17.7716 60.7744 17.7811 60.6426 17.77C57.38 17.7787 53.9884 17.7859 50.4679 17.7916C50.4622 17.7916 50.4566 17.7905 50.4514 17.7883C50.4461 17.7861 50.4414 17.7829 50.4374 17.7789C50.4334 17.7749 50.4303 17.7701 50.4282 17.7648C50.4262 17.7596 50.4252 17.754 50.4253 17.7484C50.4255 17.7377 50.4293 17.7274 50.4362 17.7192C54.8669 13.1023 61.0545 10.7133 67.4399 11.32C74.2765 11.97 80.2227 15.9228 83.7082 21.7661Z" fill="#E74344"/>
    <path d="M79.8293 38.8459C78.6325 38.8236 77.1909 38.8163 75.5046 38.8243C74.8866 38.8402 74.2699 38.7588 73.6777 38.5831C71.8825 38.0045 70.6183 36.5391 70.2359 34.7027C70.0949 34.0214 70.1266 33.1584 70.1266 32.4046C70.1255 32.3972 70.1262 32.3897 70.1285 32.3827C70.1309 32.3756 70.1349 32.3692 70.1402 32.3639C70.1455 32.3587 70.152 32.3547 70.1591 32.3524C70.1663 32.3501 70.1738 32.3494 70.1813 32.3505H86.7817C86.7878 32.3505 86.7937 32.3529 86.798 32.3572C86.8023 32.3614 86.8047 32.3672 86.8047 32.3732C86.865 34.5809 86.5865 36.7848 85.9786 38.9097C84.6129 43.7086 81.8936 47.6135 77.821 50.6244C76.7136 51.434 75.5234 52.1263 74.2699 52.69C73.705 52.9485 73.1281 53.1356 72.5523 53.3681C72.3403 53.4532 72.1262 53.5307 71.9098 53.6006C69.9985 54.203 68.0086 54.5258 66.003 54.5588C65.9927 54.559 65.9825 54.5611 65.973 54.5652C65.9635 54.5692 65.9549 54.5751 65.9477 54.5824C65.9405 54.5897 65.9348 54.5984 65.931 54.6079C65.9272 54.6174 65.9253 54.6275 65.9254 54.6378C65.9422 55.7762 65.9375 56.9053 65.9112 58.025C65.8719 59.7554 65.4429 61.3113 64.6241 62.6927C63.9423 63.8455 62.8147 64.8665 61.4391 64.9984C60.9126 65.0444 60.3833 65.0513 59.8558 65.0189C59.8458 65.0184 59.8363 65.014 59.8294 65.0068C59.8225 64.9996 59.8187 64.99 59.8187 64.98V53.8407C59.8186 53.8129 59.8094 53.7858 59.7924 53.7636C59.7755 53.7413 59.7517 53.7251 59.7247 53.7174C54.5336 52.2196 50.0559 48.5003 47.3866 43.8629C45.5434 40.6816 44.5295 37.096 44.4365 33.4298C44.4365 33.3217 44.4365 33.207 44.4431 33.0978C44.4429 33.0906 44.4442 33.0834 44.4471 33.0767C44.4499 33.07 44.4542 33.064 44.4596 33.0591C44.4649 33.0542 44.4713 33.0505 44.4783 33.0482C44.4852 33.0459 44.4926 33.0451 44.4999 33.0459H50.0909C50.0988 33.0449 50.1068 33.0456 50.1144 33.0481C50.122 33.0506 50.1288 33.0548 50.1345 33.0603C50.1402 33.0658 50.1446 33.0726 50.1472 33.08C50.1499 33.0874 50.1508 33.0954 50.1499 33.1032C50.292 39.4007 53.8758 45.0147 59.7411 47.5346C59.7475 47.5374 59.7544 47.539 59.7613 47.5392C59.7683 47.5394 59.7753 47.5382 59.7818 47.5356C59.7883 47.5331 59.7943 47.5293 59.7993 47.5245C59.8043 47.5197 59.8083 47.5139 59.811 47.5075C59.8127 47.5008 59.8127 47.4937 59.811 47.487V28.3447C59.811 28.3317 59.8059 28.3192 59.7967 28.3099C59.7875 28.3006 59.775 28.2952 59.7619 28.2949C55.0832 28.2856 50.4016 28.2856 45.7171 28.2949C44.9905 28.3073 44.2638 28.2788 43.5405 28.2095C40.1971 27.8115 36.2406 25.7275 36.2952 21.8687C36.2944 21.8614 36.2952 21.854 36.2976 21.8471C36.3 21.8401 36.304 21.8338 36.3093 21.8286C36.3146 21.8234 36.3209 21.8194 36.328 21.817C36.335 21.8146 36.3425 21.8138 36.3499 21.8147H67.8682C68.4462 21.8147 68.8515 22.0959 69.329 22.4052C71.6989 23.9376 74.0208 25.7945 75.4762 28.1706C75.4849 28.1822 75.4889 28.1966 75.4875 28.211C75.4861 28.2253 75.4793 28.2387 75.4686 28.2484C75.4649 28.2529 75.4602 28.2565 75.4549 28.259C75.4496 28.2614 75.4438 28.2626 75.438 28.2625C72.1797 28.2574 69.0154 28.2574 65.9451 28.2625C65.9266 28.2625 65.9088 28.2698 65.8957 28.2828C65.8825 28.2957 65.8752 28.3133 65.8752 28.3317V48.6561C65.8752 48.6747 65.8827 48.6926 65.896 48.7058C65.9093 48.719 65.9274 48.7264 65.9462 48.7264C68.9071 48.6208 71.7727 47.6632 74.1923 45.9707C76.7373 44.2212 78.7117 41.7754 79.8741 38.9324C79.9101 38.8762 79.8916 38.847 79.8293 38.8459Z" fill="#E74344"/>
    <path d="M43.1932 84.4771C43.1866 84.4771 43.18 84.4784 43.1739 84.4809C43.1678 84.4834 43.1623 84.487 43.1576 84.4916C43.153 84.4963 43.1493 84.5017 43.1467 84.5078C43.1442 84.5138 43.1429 84.5203 43.1429 84.5268C43.1424 84.5319 43.1424 84.5369 43.1429 84.542L44.5961 88.8895C44.6324 88.9967 44.6451 89.1102 44.6333 89.2226L44.2705 92.9116C44.2689 92.9311 44.2599 92.9493 44.2453 92.9625C44.2307 92.9757 44.2116 92.983 44.1919 92.983H40.101C40.0734 92.9851 40.0458 92.9794 40.0212 92.9667C40.0072 92.9583 39.9959 92.9461 39.9885 92.9315C39.9812 92.917 39.9781 92.9007 39.9797 92.8845C40.0759 92.0381 40.1655 91.219 40.2485 90.4274C40.263 90.2914 40.245 90.154 40.1961 90.0262L38.1015 84.5722C38.0926 84.5432 38.0741 84.5179 38.0489 84.5006C38.0237 84.4834 37.9933 84.475 37.9627 84.4771H36.7215C36.7037 84.4772 36.6865 84.4838 36.6733 84.4955C36.66 84.5072 36.6515 84.5234 36.6494 84.5409L35.7501 92.9181C35.749 92.9301 35.7433 92.9413 35.7342 92.9493C35.725 92.9574 35.7132 92.9616 35.7009 92.9613H31.5063C31.4604 92.9613 31.4386 92.9386 31.4429 92.8921L33.6861 71.8464C33.6875 71.833 33.6938 71.8206 33.7039 71.8116C33.714 71.8026 33.7272 71.7977 33.7408 71.7977H46.4296C46.4755 71.7977 46.4951 71.8194 46.4897 71.8637L45.1435 84.3711C45.1403 84.4023 45.1256 84.4312 45.1022 84.4523C45.0789 84.4735 45.0485 84.4854 45.0168 84.4857L43.1932 84.4771ZM41.2756 80.2593C41.2889 80.2593 41.3017 80.2545 41.3116 80.2457C41.3215 80.2369 41.3278 80.2248 41.3291 80.2117L41.7214 76.1367C41.7221 76.1297 41.7215 76.1226 41.7195 76.1159C41.7175 76.1092 41.7141 76.103 41.7097 76.0975C41.7052 76.0921 41.6997 76.0876 41.6934 76.0843C41.6872 76.081 41.6804 76.0789 41.6733 76.0783L37.5978 76.0858C37.5845 76.086 37.5718 76.0909 37.562 76.0997C37.5521 76.1084 37.5458 76.1204 37.5442 76.1334L37.1006 80.202C37.0999 80.2089 37.1005 80.216 37.1025 80.2227C37.1045 80.2294 37.1079 80.2357 37.1123 80.2411C37.1168 80.2465 37.1223 80.251 37.1286 80.2543C37.1348 80.2576 37.1416 80.2597 37.1487 80.2604H41.2811L41.2756 80.2593Z" fill="#E74344"/>
    <path d="M17.4035 73.9034H9.01421C8.99885 73.9034 8.98412 73.8974 8.97326 73.8867C8.9624 73.8759 8.9563 73.8613 8.9563 73.8461V73.8407L9.15407 71.8767C9.15566 71.8626 9.16243 71.8495 9.1731 71.8399C9.18376 71.8304 9.19759 71.825 9.21198 71.8248H17.5969C17.6045 71.8248 17.6121 71.8263 17.6192 71.8293C17.6262 71.8323 17.6326 71.8366 17.6379 71.8421C17.6432 71.8475 17.6473 71.854 17.65 71.861C17.6528 71.8681 17.654 71.8757 17.6537 71.8832L17.4614 73.8461C17.4614 73.8613 17.4553 73.8759 17.4444 73.8867C17.4336 73.8974 17.4189 73.9034 17.4035 73.9034Z" fill="#E74344"/>
    <path d="M46.1094 92.917L48.3515 71.8789C48.3528 71.8638 48.3599 71.8497 48.3712 71.8395C48.3825 71.8293 48.3973 71.8237 48.4127 71.8237H52.5559C52.5642 71.8237 52.5724 71.8254 52.58 71.8285C52.5877 71.8317 52.5946 71.8363 52.6004 71.8422C52.6062 71.848 52.6107 71.8549 52.6138 71.8625C52.6169 71.8701 52.6184 71.8783 52.6182 71.8865L50.3707 92.93C50.3693 92.9451 50.3623 92.9592 50.3509 92.9694C50.3396 92.9796 50.3248 92.9852 50.3095 92.9852H46.1727C46.1646 92.985 46.1565 92.9833 46.149 92.9801C46.1415 92.9768 46.1347 92.9722 46.129 92.9663C46.1233 92.9605 46.1189 92.9536 46.1159 92.9461C46.1129 92.9386 46.1114 92.9305 46.1116 92.9224L46.1094 92.917Z" fill="#E74344"/>
    <path d="M57.0281 88.7328L65.4698 88.7274C65.4879 88.7273 65.5052 88.7344 65.5181 88.7469C65.531 88.7595 65.5383 88.7765 65.5386 88.7944C65.5392 88.7969 65.5392 88.7995 65.5386 88.802L65.048 92.9224C65.0464 92.9388 65.0387 92.9539 65.0263 92.9649C65.014 92.9759 64.998 92.982 64.9814 92.9819H52.3068C52.2888 92.9819 52.2716 92.9749 52.2589 92.9623C52.2461 92.9497 52.239 92.9327 52.239 92.9149V92.9073L54.4811 71.8843C54.4827 71.8677 54.4906 71.8522 54.5031 71.841C54.5157 71.8298 54.532 71.8237 54.5489 71.8237H58.6747C58.6926 71.824 58.7098 71.8311 58.7226 71.8436C58.7355 71.8561 58.7429 71.873 58.7435 71.8908C58.7435 71.8908 58.7435 71.8908 58.7435 71.8973L56.9603 88.6603C56.9585 88.678 56.9637 88.6958 56.975 88.7098C56.9862 88.7237 57.0025 88.7328 57.0204 88.7349L57.0281 88.7328Z" fill="#E74344"/>
    <path d="M70.7057 88.6819C70.7086 88.6933 70.7152 88.7034 70.7245 88.7106C70.7338 88.7178 70.7452 88.7218 70.757 88.722H79.1704C79.2414 88.722 79.2731 88.7566 79.2643 88.8301L78.7792 92.9106C78.7794 92.9207 78.7775 92.9307 78.7734 92.94C78.7694 92.9492 78.7634 92.9575 78.7558 92.9643C78.7483 92.9711 78.7393 92.9762 78.7296 92.9792C78.7198 92.9822 78.7096 92.9832 78.6994 92.9819H66.0598C65.9964 92.9819 65.968 92.9506 65.9746 92.8889L68.2177 71.8713C68.2193 71.8586 68.2255 71.8469 68.2352 71.8383C68.2448 71.8298 68.2572 71.825 68.2702 71.8248H72.3927C72.4561 71.8248 72.4834 71.8551 72.4769 71.9168C71.8941 77.3811 71.3015 82.9414 70.6991 88.5976C70.6974 88.6259 70.6996 88.6543 70.7057 88.6819Z" fill="#E74344"/>
    <path d="M86.2388 71.894L83.9946 92.9267C83.993 92.942 83.9857 92.9562 83.9742 92.9666C83.9628 92.977 83.9478 92.9828 83.9323 92.983H79.7923C79.7839 92.9828 79.7757 92.9811 79.7681 92.9778C79.7605 92.9745 79.7536 92.9698 79.7478 92.9638C79.742 92.9579 79.7374 92.9509 79.7344 92.9433C79.7313 92.9356 79.7298 92.9274 79.73 92.9192L81.9765 71.8864C81.9781 71.8711 81.9853 71.857 81.9968 71.8466C82.0083 71.8362 82.0232 71.8304 82.0387 71.8302H86.1766C86.1935 71.8305 86.2096 71.8373 86.2214 71.8493C86.2333 71.8612 86.2399 71.8773 86.2399 71.894C86.2396 71.894 86.2392 71.894 86.2388 71.894Z" fill="#E74344"/>
    <path d="M100.906 71.881L98.6654 92.9343C98.6642 92.9472 98.6582 92.9592 98.6484 92.9678C98.6387 92.9765 98.626 92.9811 98.6129 92.9808H85.9088C85.9019 92.9806 85.8951 92.9792 85.8888 92.9764C85.8825 92.9737 85.8768 92.9697 85.872 92.9648C85.8672 92.9599 85.8635 92.9541 85.861 92.9477C85.8585 92.9414 85.8573 92.9346 85.8574 92.9278L88.1028 71.8745C88.1044 71.8618 88.1106 71.8501 88.1202 71.8415C88.1299 71.833 88.1423 71.8282 88.1553 71.828H100.851C100.858 71.828 100.865 71.8294 100.871 71.8321C100.877 71.8347 100.883 71.8387 100.888 71.8436C100.893 71.8485 100.897 71.8544 100.899 71.8608C100.902 71.8672 100.903 71.8741 100.903 71.881C100.904 71.8813 100.905 71.8813 100.906 71.881ZM90.6508 88.644C90.649 88.6635 90.655 88.6829 90.6674 88.6981C90.6799 88.7132 90.6979 88.723 90.7175 88.7251H90.724H94.7603C94.7786 88.7252 94.7963 88.7185 94.8098 88.7063C94.8234 88.694 94.8318 88.6772 94.8335 88.6592L96.1359 76.1594C96.138 76.14 96.1323 76.1206 96.1201 76.1054C96.1078 76.0902 96.0899 76.0804 96.0703 76.0782H92.0494C92.0312 76.0786 92.0138 76.0855 92.0003 76.0977C91.9869 76.1098 91.9783 76.1263 91.9762 76.1442L90.6508 88.644Z" fill="#E74344"/>
    <path d="M110.83 76.0772L106.714 76.0848C106.697 76.0849 106.681 76.091 106.668 76.1019C106.656 76.1129 106.648 76.1279 106.646 76.1442L104.859 92.9224C104.858 92.9389 104.85 92.9543 104.837 92.9653C104.825 92.9763 104.808 92.9822 104.792 92.9819H100.618C100.6 92.9819 100.583 92.9748 100.57 92.9623C100.557 92.9497 100.55 92.9326 100.55 92.9148V92.9073L102.792 71.881C102.794 71.8647 102.802 71.8496 102.815 71.8387C102.827 71.8278 102.843 71.8217 102.86 71.8215H115.535C115.553 71.8215 115.57 71.8286 115.583 71.8411C115.596 71.8536 115.603 71.8707 115.603 71.8886C115.604 71.8911 115.604 71.8937 115.603 71.8962L113.336 92.9224C113.334 92.9389 113.327 92.9543 113.314 92.9653C113.301 92.9763 113.285 92.9822 113.268 92.9819H109.182C109.164 92.9819 109.147 92.9748 109.134 92.9623C109.121 92.9497 109.114 92.9326 109.114 92.9148V92.9083L110.897 76.1453C110.9 76.1277 110.895 76.1099 110.883 76.0959C110.872 76.0819 110.856 76.0729 110.838 76.0707L110.83 76.0772Z" fill="#E74344"/>
    <path d="M121.72 71.8929L119.483 92.9322C119.482 92.9473 119.475 92.9613 119.464 92.9715C119.452 92.9818 119.438 92.9874 119.422 92.9873H115.281C115.273 92.9872 115.265 92.9855 115.257 92.9822C115.25 92.979 115.243 92.9743 115.237 92.9685C115.232 92.9627 115.227 92.9558 115.224 92.9483C115.221 92.9407 115.22 92.9327 115.22 92.9246V92.9192L117.459 71.8789C117.46 71.8638 117.467 71.8497 117.479 71.8395C117.49 71.8293 117.505 71.8237 117.52 71.8237H121.66C121.668 71.8237 121.676 71.8254 121.684 71.8285C121.692 71.8317 121.699 71.8363 121.704 71.8422C121.71 71.848 121.715 71.8549 121.718 71.8625C121.721 71.8701 121.722 71.8783 121.722 71.8865C121.721 71.8886 121.721 71.8907 121.72 71.8929Z" fill="#E74344"/>
    <path d="M19.2107 76.022L19.6477 71.9069C19.6494 71.8909 19.657 71.876 19.6691 71.8652C19.6812 71.8544 19.697 71.8484 19.7133 71.8485H32.3879C32.4053 71.8488 32.422 71.8557 32.4344 71.8678C32.4468 71.8798 32.454 71.8962 32.4546 71.9134C32.4546 71.9134 32.4546 71.9134 32.4546 71.9199L32.0263 76.0295C32.0246 76.0456 32.017 76.0605 32.0049 76.0713C31.9928 76.0821 31.977 76.088 31.9607 76.0879H27.8742C27.8579 76.0879 27.8422 76.0938 27.83 76.1046C27.8179 76.1154 27.8103 76.1303 27.8087 76.1463L26.0266 92.9364C26.0249 92.9525 26.0173 92.9674 26.0052 92.9782C25.9931 92.9889 25.9773 92.9949 25.961 92.9948H21.7598C21.7424 92.9948 21.7258 92.988 21.7135 92.9758C21.7012 92.9636 21.6943 92.9471 21.6943 92.9299V92.9234L23.4785 76.1604C23.4804 76.1433 23.4753 76.1263 23.4645 76.1129C23.4536 76.0995 23.4379 76.0909 23.4206 76.089H19.2763C19.2589 76.089 19.2422 76.0822 19.2299 76.07C19.2176 76.0578 19.2107 76.0413 19.2107 76.0241V76.022Z" fill="#E74344"/>
    <path d="M16.9425 78.1699H9.97913C9.96175 78.1699 9.94507 78.163 9.93278 78.1509C9.92048 78.1387 9.91357 78.1222 9.91357 78.105V78.0974L10.1518 76.1367C10.1536 76.121 10.1612 76.1065 10.1731 76.096C10.1849 76.0854 10.2003 76.0795 10.2162 76.0793L17.1578 76.0945C17.1752 76.0948 17.1918 76.1016 17.2042 76.1137C17.2166 76.1258 17.2239 76.1422 17.2244 76.1594C17.2244 76.1594 17.2244 76.1594 17.2244 76.1659L17.0059 78.1125C17.0041 78.128 16.9966 78.1424 16.985 78.1529C16.9734 78.1634 16.9583 78.1694 16.9425 78.1699Z" fill="#E74344"/>
    <path d="M16.5121 82.4093H10.9549C10.9401 82.4093 10.9259 82.4035 10.9155 82.3931C10.905 82.3828 10.8992 82.3687 10.8992 82.3541L11.0805 80.3858C11.0821 80.3722 11.0887 80.3597 11.0989 80.3505C11.1092 80.3414 11.1225 80.3362 11.1363 80.3361L16.7142 80.3458C16.7215 80.3459 16.7287 80.3475 16.7354 80.3504C16.7421 80.3533 16.7482 80.3575 16.7533 80.3627C16.7584 80.3679 16.7623 80.3741 16.765 80.3808C16.7677 80.3876 16.769 80.3948 16.7688 80.402L16.5678 82.3649C16.5654 82.3777 16.5585 82.3892 16.5483 82.3974C16.538 82.4055 16.5252 82.4097 16.5121 82.4093Z" fill="#E74344"/>
    <path d="M16.0619 86.6184H11.9503C11.9435 86.6184 11.9369 86.6171 11.9306 86.6145C11.9244 86.612 11.9187 86.6082 11.914 86.6035C11.9092 86.5988 11.9054 86.5932 11.9028 86.587C11.9003 86.5809 11.8989 86.5743 11.8989 86.5676L12.089 84.5939C12.0904 84.5812 12.0963 84.5695 12.1058 84.561C12.1153 84.5524 12.1276 84.5476 12.1404 84.5474H16.2607C16.2745 84.5474 16.2876 84.5527 16.2974 84.5622C16.3073 84.5717 16.3129 84.5846 16.3132 84.5982L16.1165 86.5719C16.1154 86.5852 16.109 86.5975 16.0988 86.6062C16.0886 86.6149 16.0753 86.6193 16.0619 86.6184Z" fill="#E74344"/>
    <path d="M13.1422 88.776H15.8301C15.8433 88.776 15.8559 88.7811 15.8653 88.7902C15.8747 88.7993 15.8801 88.8117 15.8804 88.8247L15.6618 90.8049C15.6607 90.8167 15.6552 90.8278 15.6463 90.8358C15.6374 90.8438 15.6258 90.8482 15.6138 90.8481H12.9029C12.8899 90.8481 12.8774 90.843 12.8682 90.8339C12.8589 90.8248 12.8538 90.8124 12.8538 90.7995L13.093 88.8149C13.0953 88.8038 13.1015 88.7938 13.1105 88.7867C13.1195 88.7796 13.1307 88.7758 13.1422 88.776Z" fill="#E74344"/>
    <path d="M43.0665 104.009C42.2328 104.015 42.1115 104.542 42.1203 105.264C42.1399 106.906 42.1399 108.502 42.1203 110.052C42.1137 110.667 42.4149 110.973 43.0239 110.969C44.6089 110.958 46.3441 110.874 48.2292 110.716C48.3159 110.708 48.3585 110.747 48.3571 110.833V112.842C48.3569 112.862 48.3494 112.881 48.3359 112.896C48.3224 112.911 48.3039 112.92 48.2839 112.922C46.1357 113.126 44.11 113.234 42.2066 113.247C40.1983 113.256 39.1865 112.24 39.1767 110.237C39.1643 107.68 39.1672 105.809 39.1855 104.624C39.1947 104.205 39.2684 103.79 39.404 103.393C39.8345 102.104 41.0855 101.731 42.3224 101.728C44.3198 101.728 46.3047 101.728 48.2773 101.728C48.2874 101.726 48.2977 101.727 48.3074 101.73C48.3171 101.734 48.3259 101.739 48.3331 101.746C48.3403 101.753 48.3457 101.762 48.3489 101.772C48.3522 101.781 48.3531 101.791 48.3516 101.801V103.939C48.3527 103.948 48.3519 103.956 48.3493 103.963C48.3467 103.971 48.3422 103.978 48.3364 103.984C48.3306 103.989 48.3235 103.994 48.3157 103.996C48.3079 103.999 48.2996 103.999 48.2915 103.998C46.7203 103.991 44.9786 103.994 43.0665 104.009Z" fill="#E74344"/>
    <path d="M56.4414 108.517V113.021C56.4414 113.037 56.435 113.052 56.4235 113.064C56.412 113.075 56.3965 113.081 56.3803 113.081H53.5492C53.533 113.081 53.5174 113.075 53.506 113.064C53.4945 113.052 53.488 113.037 53.488 113.021V101.785C53.488 101.769 53.4945 101.754 53.506 101.742C53.5174 101.731 53.533 101.725 53.5492 101.725H56.3813C56.3976 101.725 56.4131 101.731 56.4246 101.742C56.4361 101.754 56.4425 101.769 56.4425 101.785V106.127C56.4425 106.143 56.449 106.159 56.4605 106.17C56.4719 106.182 56.4875 106.188 56.5037 106.188H60.4733C60.4895 106.188 60.5051 106.182 60.5165 106.17C60.528 106.159 60.5345 106.143 60.5345 106.127L60.541 101.788C60.541 101.772 60.5475 101.757 60.5589 101.746C60.5704 101.734 60.586 101.728 60.6022 101.728H63.4278C63.444 101.728 63.4596 101.734 63.471 101.746C63.4825 101.757 63.489 101.772 63.489 101.788V113.015C63.489 113.031 63.4825 113.047 63.471 113.058C63.4596 113.07 63.444 113.076 63.4278 113.076H60.5978C60.5816 113.076 60.5661 113.07 60.5546 113.058C60.5431 113.047 60.5367 113.031 60.5367 113.015L60.5421 108.512C60.5421 108.496 60.5357 108.481 60.5242 108.469C60.5127 108.458 60.4972 108.451 60.4809 108.451H56.5026C56.4941 108.451 56.4857 108.453 56.4779 108.457C56.4701 108.46 56.4631 108.465 56.4573 108.471C56.4516 108.477 56.4472 108.485 56.4444 108.493C56.4417 108.501 56.4407 108.509 56.4414 108.517Z" fill="#E74344"/>
    <path d="M76.1886 111.052H72.1459C72.1373 111.053 72.129 111.055 72.122 111.06C72.115 111.065 72.1096 111.072 72.1065 111.08L71.3909 113.055C71.3879 113.063 71.3826 113.07 71.3755 113.075C71.3685 113.08 71.3601 113.083 71.3515 113.082H68.2419C68.2364 113.082 68.231 113.081 68.226 113.079C68.2209 113.077 68.2164 113.074 68.2125 113.07C68.2087 113.067 68.2056 113.062 68.2035 113.057C68.2014 113.052 68.2003 113.047 68.2003 113.041C68.1998 113.037 68.1998 113.032 68.2003 113.027L72.5097 101.748C72.5127 101.741 72.5179 101.734 72.5247 101.729C72.5315 101.724 72.5396 101.722 72.548 101.721H75.78C75.7884 101.721 75.7966 101.724 75.8035 101.729C75.8103 101.734 75.8155 101.741 75.8182 101.748L80.1265 113.026C80.1301 113.036 80.1296 113.048 80.1252 113.057C80.1207 113.067 80.1126 113.075 80.1025 113.079H80.0872H76.9775C76.969 113.079 76.9607 113.076 76.9536 113.072C76.9466 113.067 76.9412 113.06 76.9382 113.052L76.2258 111.073C76.222 111.067 76.2166 111.061 76.2101 111.058C76.2035 111.054 76.1961 111.052 76.1886 111.052ZM72.8779 108.89C72.8748 108.899 72.8756 108.909 72.8801 108.918C72.8846 108.927 72.8924 108.934 72.902 108.937H72.914H75.414C75.4241 108.937 75.4338 108.933 75.441 108.926C75.4482 108.919 75.4522 108.909 75.4522 108.899C75.4527 108.895 75.4527 108.891 75.4522 108.887L74.2022 105.258C74.2006 105.253 74.1981 105.249 74.1948 105.245C74.1915 105.242 74.1875 105.239 74.183 105.236C74.1785 105.234 74.1737 105.233 74.1687 105.233C74.1638 105.233 74.1588 105.233 74.1541 105.235C74.1487 105.237 74.1437 105.24 74.1395 105.244C74.1353 105.248 74.1321 105.253 74.1301 105.258L72.8779 108.89Z" fill="#E74344"/>
    <path d="M91.207 101.724C93.4643 101.724 94.8793 103.001 94.8946 105.242C94.9055 106.756 94.9055 108.224 94.8946 109.646C94.8937 109.853 94.8758 110.059 94.8411 110.263C94.486 112.35 92.9967 113.082 91.0485 113.075C88.9528 113.075 86.8604 113.075 84.7713 113.075C84.7626 113.075 84.7543 113.071 84.7481 113.065C84.742 113.059 84.7385 113.051 84.7385 113.042V101.755C84.7388 101.747 84.7421 101.739 84.7478 101.734C84.7535 101.728 84.7611 101.725 84.7691 101.725C86.9107 101.722 89.0566 101.722 91.207 101.724ZM87.6876 104.065V110.744C87.6876 110.753 87.6893 110.762 87.6928 110.77C87.6963 110.779 87.7013 110.786 87.7077 110.792C87.7141 110.799 87.7217 110.804 87.7301 110.807C87.7384 110.811 87.7474 110.812 87.7564 110.812H90.5907C90.9525 110.812 91.2992 110.669 91.5547 110.416C91.8102 110.162 91.9535 109.819 91.9532 109.46V105.351C91.9535 104.993 91.8102 104.649 91.5547 104.396C91.2992 104.142 90.9525 104 90.5907 103.999H87.7564C87.7381 103.999 87.7206 104.006 87.7077 104.019C87.6948 104.032 87.6876 104.049 87.6876 104.067V104.065Z" fill="#E74344"/>
    </g>
    <defs>
    <clipPath id="clip0_102_738">
    <rect width="130.66" height="130" fill="white"/>
    </clipPath>
    </defs>
      </svg>


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