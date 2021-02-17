import React from "react";
import mail from '../../statics/mail.png';
import heatset from '../../statics/heatset.png';
import logoAlt from '../../statics/logo_alt.png';
import logoVtex from '../../statics/vtex.png';

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className='container-location'>
        <div className='container-title-footer'>
          <p className='title-footer'>Localizacao</p>
          <div className='container-white'></div>
        </div>
        <p>Avenida Andromeda, 2000. Bloco 6 a 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.arg</p>
        <p>+55 11 3090 1039</p>
        </div>
      <div className='container-btns'>
        <button className='btns-footer'><img className='icon-btn' src={mail} alt='mail'/>ENTRE EM CONTATO</button>
        <button className='btns-footer'><img className='icon-btn' src={heatset} alt='heatset'/>FALE COM O NOSSO CONSULTOR ONLINE</button>
      </div>
      <div className='container-info'>
        <div className='container-each-logo'>
          <p>Created by</p>
          <img src={logoAlt} alt='logoCoreBiz'/>
        </div>
        <div className='container-each-logo'>
          <p>Powered by</p>
          <img src={logoVtex} alt='logoVtex'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
