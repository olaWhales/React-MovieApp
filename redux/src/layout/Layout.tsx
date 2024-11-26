import { Outlet } from "react-router-dom";  // this is where we like all component to come in before so we can all them in 
import React from 'react' 
import Footer from "../component/Footer";
import Header from "../component/Header";
import SideBar from "../component/SideBar";


const Layout = () => {
  return (
    <>
      <Header/>
      <div className={style.outletContainer}>
          <SideBar/>
          <Outlet/>

      </div>
      <Footer/>
    </>
  )
}

export default Layout

