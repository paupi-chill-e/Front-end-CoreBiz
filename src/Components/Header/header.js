import React, {useContext} from "react";
import logo from "../../statics/logo.png";
import account from "../../statics/account.png";
import shoppingCart from "../../statics/shopping-cart.png";
import './style.css';
import {CounterContext} from '../../App';

const Header = () => {
  const [count, setCount ]= useContext(CounterContext);

  return (
    <div className='ayuda'>
      <div className="container-logo-header">
        <img className="img" src={logo} alt="logo" />
      </div>
      <div>
        <input className="input-header" placeholder="O que está procurando?" />
      </div>
      <div className='container-account'>
        <div className="container-account-img">
          <img  alt="account" src={account} />
        </div>
        <p className='text-account'>Minha Conta</p>
      </div>
      <div className='container-shopping-cart'>
        <div className="container-shopping-cart-img">
          <img alt="shopping-cart" src={shoppingCart} />
        </div>
        <div className='container-counter-mini-cart'>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
