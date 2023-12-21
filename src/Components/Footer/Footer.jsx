import React from 'react'
import "./Footer.scss"
import Layer2 from "../../assets/images/Layer2.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
import LinkedIn from "../../assets/images/LinkedIn.png"
import YouTube from "../../assets/images/YouTube.png"





const Footer = () => {
  return (
    <footer>
         
        <div className='Head_Container'>
        <div className='Head'>
            <div className='Logo'>
                <img src={Layer2} alt='logo' />
            </div>
            <div className='Content'>
                <h4>Content</h4>
                <hr />
                <p>Home</p>
                <p>About</p>
                <p>Compaines</p>
                <p>Contact </p>

            </div>
            <div className='Our_Compaines'>
            <h4>OUR COMPAINES</h4>
                <hr />
                <p>Trillioni Sesame</p>
                <p>Trillioni Chad</p>
                <p>Trillioni Pharma</p>
                <p>Trillionaire Signals </p>

            </div>
            <div className='social'>
                <h3>SOCIAL MEDIA</h3>
                <hr />
                <div className='images'>
                    <img src={Facebook} alt='FaceBook' />
                    <img src={Instagram} alt='instgram' />
                    <img src={LinkedIn} alt='LinkedIn' />
                    <img src={YouTube} alt='Youtube' />


                </div>

            </div>


        </div>
        </div>

        <hr className='hr'/>
        <p className='p'>Copyright © Trillioni Group | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        
        
        </footer>
  )
}

export default Footer