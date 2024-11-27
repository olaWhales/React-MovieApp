import React from "react";
import style from '../styles/header.module.css'

const Header = () => {
  return (
    <div className={style.outletContainer}>
      <div className={style.button}>

        <input type='text' placeholder='Search'/>
          <button className={style.button}>Search</button>

          
      </div>
    </div>
    )
}

export default Header
