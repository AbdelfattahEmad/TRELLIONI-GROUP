import React from 'react'
import "./ContactUs.scss"
import { useTranslation } from 'react-i18next'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const ContactUs = () => {

const {t} = useTranslation()

  return (

    <Container>


    <div className='Contact_Container'>

        <div className='Title_Section'>
            
            <h2>{t("CONTACT")}</h2>

            <div className='image'>
            <h3>{t("CONTACT US ")}</h3>
            </div>
        </div>



        <div className='Contact_us'>
        <Row>

        <Col xs={12} md={12} lg={12} xl={6} >
            <div className='Contact_inputs'>
                <form>
                    <input className='input' type="text" placeholder='Enter Full Name' />
                    <input className='input' type="text" placeholder='Enter E-mail' />
                    <input className='input' type="phoneNumber" placeholder='Enter Number Phone' />
                    <FloatingLabel controlId="floatingTextarea2" label="Please type your messsage here ...">
                        <Form.Control
                        as="textarea"
                        placeholder="Please type your messsage here ..."
                        style={{ height: '100px'}}
                        className='input_TextArea'
                        />
                    </FloatingLabel>

                    <div className='Btn_Input'>
                        <button className='Btn'>
                            {t("Send message")} 
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4043 2.65435L15.7499 9L9.4043 15.3457" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.7499 9L2.25 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </button>
                    </div>
                </form>


            </div>
            </Col>

            <Col xs={12} md={12} lg={12} xl={6}>
            <div className='Contact_social'>

                <div className='social'>
                    <div className='icon'>
                    <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="52" height="52" rx="10" fill="#A3A073" fillOpacity="0.13"/>
                        <path d="M40.3666 20.0834C38.6166 12.3834 31.8999 8.91675 25.9999 8.91675C25.9999 8.91675 25.9999 8.91675 25.9832 8.91675C20.0999 8.91675 13.3666 12.3667 11.6166 20.0667C9.66658 28.6667 14.9332 35.9501 19.6999 40.5334C21.4666 42.2334 23.7332 43.0834 25.9999 43.0834C28.2666 43.0834 30.5332 42.2334 32.2832 40.5334C37.0499 35.9501 42.3166 28.6834 40.3666 20.0834ZM25.9999 28.4334C23.0999 28.4334 20.7499 26.0834 20.7499 23.1834C20.7499 20.2834 23.0999 17.9334 25.9999 17.9334C28.8999 17.9334 31.2499 20.2834 31.2499 23.1834C31.2499 26.0834 28.8999 28.4334 25.9999 28.4334Z" fill="#A3A073"/>
                </svg>
                    </div>
                    <p>Cumhuriyet Mah. Yeni Yol 1 Sk. Now Bomonti<br/> Blok No: 2 İç Kapı No: 62 Şişli/İstanbul, Turkey.</p>

                </div>

                <div className='social'>

                    <div className='icon'>


                        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="52" height="52" rx="10" fill="#F3F3ED"/>
                                <path d="M35.3666 23.9166C34.6499 23.9166 34.0833 23.3333 34.0833 22.6333C34.0833 22.0166 33.4666 20.7333 32.4333 19.6166C31.4166 18.5333 30.2999 17.8999 29.3666 17.8999C28.6499 17.8999 28.0833 17.3166 28.0833 16.6166C28.0833 15.9166 28.6666 15.3333 29.3666 15.3333C31.0333 15.3333 32.7833 16.2333 34.3166 17.8499C35.7499 19.3666 36.6666 21.2499 36.6666 22.6166C36.6666 23.3333 36.0833 23.9166 35.3666 23.9166Z" fill="#A3A073"/>
                                <path d="M41.3834 23.9166C40.6668 23.9166 40.1001 23.3333 40.1001 22.6333C40.1001 16.7166 35.2834 11.9166 29.3834 11.9166C28.6668 11.9166 28.1001 11.3333 28.1001 10.6333C28.1001 9.93325 28.6668 9.33325 29.3668 9.33325C36.7001 9.33325 42.6668 15.2999 42.6668 22.6333C42.6668 23.3333 42.0834 23.9166 41.3834 23.9166Z" fill="#A3A073"/>
                                <path d="M24.4166 30.9166L21.3333 33.9999C20.6833 34.6499 19.6499 34.6499 18.9833 34.0166C18.7999 33.8333 18.6166 33.6666 18.4333 33.4833C16.7166 31.7499 15.1666 29.9333 13.7833 28.0333C12.4166 26.1333 11.3166 24.2333 10.5166 22.3499C9.73325 20.4499 9.33325 18.6333 9.33325 16.8999C9.33325 15.7666 9.53325 14.6833 9.93325 13.6833C10.3333 12.6666 10.9666 11.7333 11.8499 10.8999C12.9166 9.84992 14.0833 9.33325 15.3166 9.33325C15.7833 9.33325 16.2499 9.43325 16.6666 9.63325C17.0999 9.83325 17.4833 10.1333 17.7833 10.5666L21.6499 16.0166C21.9499 16.4333 22.1666 16.8166 22.3166 17.1833C22.4666 17.5333 22.5499 17.8833 22.5499 18.1999C22.5499 18.5999 22.4333 18.9999 22.1999 19.3833C21.9833 19.7666 21.6666 20.1666 21.2666 20.5666L19.9999 21.8833C19.8166 22.0666 19.7333 22.2833 19.7333 22.5499C19.7333 22.6833 19.7499 22.7999 19.7833 22.9333C19.8333 23.0666 19.8833 23.1666 19.9166 23.2666C20.2166 23.8166 20.7333 24.5333 21.4666 25.3999C22.2166 26.2666 23.0166 27.1499 23.8833 28.0333C24.0499 28.1999 24.2333 28.3666 24.3999 28.5333C25.0666 29.1833 25.0833 30.2499 24.4166 30.9166Z" fill="#A3A073"/>
                                <path d="M42.6167 36.5499C42.6167 37.0166 42.5333 37.4999 42.3667 37.9666C42.3167 38.0999 42.2667 38.2332 42.2 38.3666C41.9167 38.9666 41.55 39.5332 41.0667 40.0666C40.25 40.9666 39.35 41.6166 38.3333 42.0332C38.3167 42.0332 38.3 42.0499 38.2833 42.0499C37.3 42.4499 36.2333 42.6666 35.0833 42.6666C33.3833 42.6666 31.5667 42.2666 29.65 41.4499C27.7333 40.6332 25.8167 39.5332 23.9167 38.1499C23.2667 37.6666 22.6167 37.1832 22 36.6666L27.45 31.2166C27.9167 31.5666 28.3333 31.8332 28.6833 32.0166C28.7667 32.0499 28.8667 32.0999 28.9833 32.1499C29.1167 32.1999 29.25 32.2166 29.4 32.2166C29.6833 32.2166 29.9 32.1166 30.0833 31.9332L31.35 30.6832C31.7667 30.2666 32.1667 29.9499 32.55 29.7499C32.9333 29.5166 33.3167 29.3999 33.7333 29.3999C34.05 29.3999 34.3833 29.4666 34.75 29.6166C35.1167 29.7666 35.5 29.9832 35.9167 30.2666L41.4333 34.1832C41.8667 34.4832 42.1667 34.8332 42.35 35.2499C42.5167 35.6666 42.6167 36.0832 42.6167 36.5499Z" fill="#A3A073"/>
                        </svg>

                    </div>
                    <p>Phone: +905346073494  /  +905332844899</p>
                </div>



                <div className='social'>
                    <div className='icon'>
                    <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="52" rx="10" fill="#A3A073" fillOpacity="0.13"/>
                        <path d="M38.4999 19.3333C40.8011 19.3333 42.6666 17.4679 42.6666 15.1667C42.6666 12.8655 40.8011 11 38.4999 11C36.1987 11 34.3333 12.8655 34.3333 15.1667C34.3333 17.4679 36.1987 19.3333 38.4999 19.3333Z" fill="#A3A073"/>
                        <path d="M38.4999 19.3333C40.8011 19.3333 42.6666 17.4679 42.6666 15.1667C42.6666 12.8655 40.8011 11 38.4999 11C36.1987 11 34.3333 12.8655 34.3333 15.1667C34.3333 17.4679 36.1987 19.3333 38.4999 19.3333Z" fill="#A3A073"/>
                        <path d="M40.5333 21.5166C39.3666 21.8833 38.0833 21.9499 36.7499 21.6166C34.5166 21.0333 32.6999 19.2499 32.0833 17.0166C31.7833 15.9333 31.7666 14.8666 31.9499 13.8999C32.1666 12.8333 31.4166 11.8333 30.3499 11.8333H17.6666C12.6666 11.8333 9.33325 14.3333 9.33325 20.1666V31.8333C9.33325 37.6666 12.6666 40.1666 17.6666 40.1666H34.3333C39.3333 40.1666 42.6666 37.6666 42.6666 31.8333V23.0999C42.6666 21.9999 41.5999 21.1666 40.5333 21.5166ZM31.8666 24.5833L29.8999 26.1499C28.7999 27.0333 27.3999 27.4666 25.9999 27.4666C24.5999 27.4666 23.1833 27.0333 22.0999 26.1499L16.8833 21.9833C16.3499 21.5499 16.2666 20.7499 16.6833 20.2166C17.1166 19.6833 17.8999 19.5833 18.4333 20.0166L23.6499 24.1833C24.9166 25.1999 27.0666 25.1999 28.3333 24.1833L30.2999 22.6166C30.8333 22.1833 31.6333 22.2666 32.0499 22.8166C32.4833 23.3499 32.3999 24.1499 31.8666 24.5833Z" fill="#A3A073"/>
                    </svg>


                    </div>
                    

                    <p>Email: info@trillioni.com</p>
                </div>



                <div className='social'>
                    <div className='icon'>

                    <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="52" rx="10" fill="#A3A073" fillOpacity="0.13"/>
                        <g clipPath="url(#clip0_48_854)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M32.4578 18.7306C30.8058 17.155 28.6011 16.2966 26.3201 16.3319C22.1459 16.3319 18.6008 19.148 17.3368 22.94C16.6666 24.9271 16.6666 27.0789 17.3368 29.0661H17.3427C18.6125 32.8522 22.1518 35.6683 26.3259 35.6683C28.4806 35.6683 30.3305 35.1172 31.7641 34.1437V34.1398C33.4514 33.0228 34.6038 31.2649 34.9624 29.2778H26.3201V23.1165H41.4118C41.5999 24.1865 41.6881 25.28 41.6881 26.3676C41.6881 31.2341 39.9489 35.3484 36.9228 38.1351L36.926 38.1375C34.2745 40.5833 30.6353 42.0001 26.3201 42.0001C20.2704 42.0001 14.7382 38.5902 12.0221 33.1873C9.75273 28.6663 9.75274 23.3398 12.0221 18.8188C14.7382 13.41 20.2704 10.0001 26.3201 10.0001C30.2943 9.95307 34.1334 11.4464 37.0259 14.1625L32.4578 18.7306Z" fill="#A3A073"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_48_854">
                        <rect width="32" height="32" fill="white" transform="translate(10 10)"/>
                        </clipPath>
                        </defs>
                    </svg>


                    </div>
                    

                    <p>Email: trillionigroup@gmail.com</p>
                </div>

                <div className='social'>
                    <div className='icon'>
                        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="10" fill="#A3A073" fillOpacity="0.13"/>
                            <mask id="mask0_48_878" style={{'maskType':'alpha'}}  maskUnits="userSpaceOnUse" x="6" y="6" width="40" height="40">
                            <rect x="6" y="6" width="40" height="40" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_48_878)">
                            <path d="M25.9999 42.6666C23.7221 42.6666 21.5694 42.2288 19.5416 41.3533C17.5138 40.4788 15.7433 39.2844 14.2299 37.7699C12.7155 36.2566 11.521 34.486 10.6466 32.4583C9.77103 30.4305 9.33325 28.2777 9.33325 25.9999C9.33325 23.6944 9.77103 21.5349 10.6466 19.5216C11.521 17.5071 12.7155 15.7433 14.2299 14.2299C15.7433 12.7155 17.5138 11.5205 19.5416 10.6449C21.5694 9.77047 23.7221 9.33325 25.9999 9.33325C28.3055 9.33325 30.4649 9.77047 32.4783 10.6449C34.4927 11.5205 36.2566 12.7155 37.7699 14.2299C39.2844 15.7433 40.4788 17.5071 41.3533 19.5216C42.2288 21.5349 42.6666 23.6944 42.6666 25.9999C42.6666 28.2777 42.2288 30.4305 41.3533 32.4583C40.4788 34.486 39.2844 36.2566 37.7699 37.7699C36.2566 39.2844 34.4927 40.4788 32.4783 41.3533C30.4649 42.2288 28.3055 42.6666 25.9999 42.6666ZM25.9999 39.2499C26.7221 38.2499 27.3471 37.2083 27.8749 36.1249C28.4027 35.0416 28.8333 33.8888 29.1666 32.6666H22.8333C23.1666 33.8888 23.5971 35.0416 24.1249 36.1249C24.6527 37.2083 25.2777 38.2499 25.9999 39.2499ZM21.6666 38.5833C21.1666 37.6666 20.7294 36.7149 20.3549 35.7283C19.9794 34.7427 19.6666 33.7222 19.4166 32.6666H14.4999C15.3055 34.0555 16.3121 35.2638 17.5199 36.2916C18.7288 37.3194 20.111 38.0833 21.6666 38.5833ZM30.3333 38.5833C31.8888 38.0833 33.2705 37.3194 34.4783 36.2916C35.6872 35.2638 36.6944 34.0555 37.4999 32.6666H32.5833C32.3333 33.7222 32.021 34.7427 31.6466 35.7283C31.271 36.7149 30.8333 37.6666 30.3333 38.5833ZM13.0833 29.3333H18.7499C18.6666 28.7777 18.6038 28.2288 18.5616 27.6866C18.5205 27.1455 18.4999 26.5833 18.4999 25.9999C18.4999 25.4166 18.5205 24.8544 18.5616 24.3133C18.6038 23.771 18.6666 23.2221 18.7499 22.6666H13.0833C12.9444 23.2221 12.8399 23.771 12.7699 24.3133C12.701 24.8544 12.6666 25.4166 12.6666 25.9999C12.6666 26.5833 12.701 27.1455 12.7699 27.6866C12.8399 28.2288 12.9444 28.7777 13.0833 29.3333ZM22.0833 29.3333H29.9166C29.9999 28.7777 30.0627 28.2288 30.1049 27.6866C30.146 27.1455 30.1666 26.5833 30.1666 25.9999C30.1666 25.4166 30.146 24.8544 30.1049 24.3133C30.0627 23.771 29.9999 23.2221 29.9166 22.6666H22.0833C21.9999 23.2221 21.9377 23.771 21.8966 24.3133C21.8544 24.8544 21.8333 25.4166 21.8333 25.9999C21.8333 26.5833 21.8544 27.1455 21.8966 27.6866C21.9377 28.2288 21.9999 28.7777 22.0833 29.3333ZM33.2499 29.3333H38.9166C39.0555 28.7777 39.1599 28.2288 39.2299 27.6866C39.2988 27.1455 39.3333 26.5833 39.3333 25.9999C39.3333 25.4166 39.2988 24.8544 39.2299 24.3133C39.1599 23.771 39.0555 23.2221 38.9166 22.6666H33.2499C33.3333 23.2221 33.3955 23.771 33.4366 24.3133C33.4788 24.8544 33.4999 25.4166 33.4999 25.9999C33.4999 26.5833 33.4788 27.1455 33.4366 27.6866C33.3955 28.2288 33.3333 28.7777 33.2499 29.3333ZM32.5833 19.3333H37.4999C36.6944 17.9444 35.6872 16.736 34.4783 15.7083C33.2705 14.6805 31.8888 13.9166 30.3333 13.4166C30.8333 14.3333 31.271 15.2844 31.6466 16.2699C32.021 17.2566 32.3333 18.2777 32.5833 19.3333ZM22.8333 19.3333H29.1666C28.8333 18.111 28.4027 16.9583 27.8749 15.8749C27.3471 14.7916 26.7221 13.7499 25.9999 12.7499C25.2777 13.7499 24.6527 14.7916 24.1249 15.8749C23.5971 16.9583 23.1666 18.111 22.8333 19.3333ZM14.4999 19.3333H19.4166C19.6666 18.2777 19.9794 17.2566 20.3549 16.2699C20.7294 15.2844 21.1666 14.3333 21.6666 13.4166C20.111 13.9166 18.7288 14.6805 17.5199 15.7083C16.3121 16.736 15.3055 17.9444 14.4999 19.3333Z" fill="#A3A073"/>
                            </g>
                        </svg>


                    </div>
    
                    <p>Website: www.trillioni.com</p>
                </div>

            </div>
            </Col>
            </Row>


        </div>






        
        
        </div>
        </Container>

  )
}

export default ContactUs