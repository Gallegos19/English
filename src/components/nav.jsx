import React from 'react';
import "../css/nav.css";
import img from "../assets/img/LogoUp.jpeg"

export default function Nav() {
  return (
    <div className="NavContainer">

      <div className='NavLogo'>

        <img src={img} alt=""  className='imagenLogo'/>

      </div>

      <div className='DivTitulo'>

         <p className='Titulo1'>
          Universida Politecnica News
          </p>   
      </div>


    </div>
  );
}
