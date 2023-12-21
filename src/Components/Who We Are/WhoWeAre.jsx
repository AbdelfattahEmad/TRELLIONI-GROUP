import React from 'react'
import "./WhoWeAre.scss"
import who from "../../assets/images/who.png"
import Frame from "../../assets/images/Frame.png"
import Frame1 from "../../assets/images/frame1.png"
import Arrow from "../../assets/images/Arrow.png"






const WhoWeAre = () => {
  return (
    <div className='Head'>
        <div className='Title_Section'>
        <img src={who} alt='dd' />
            <div className='image'>
            <h3>WHO WE ARE</h3>

            </div>

        </div>

        <div className='Tile_Group'>
            <h3>TRILLIONI GROUP</h3>
            <div className='Descreption_Group'>

                <div className='Descreption_item'>
                <p>Trillioni Group company operates in many fields and mainly targets African <br /> markets along with other markets as it has many partners in many African <br />
                 countries. The company's main goal is to build bridges of integration and<br /> 
                 interdependence with markets in Africa by providing the products and<br />
                  services required in these promising countries and helping in upgrading the <br />
                   commercial market. Because of its bright future and its high ambitions ... </p>

                   <button className='Desc_Btn'>Know more<img src={Arrow} alt='img'/> </button>
                   </div>

                   <div className='Descreption_img'>

                    <div className='images'>
                    <img  className="img_one" src={Frame1} alt="frame" />
                   <img  className="img_two" src={Frame1} alt="frame" />
                    <img className="img_three" src={Frame} alt="frame" />


                    </div>


                   </div>




            </div>

        </div>





    </div>
  )
}

export default WhoWeAre