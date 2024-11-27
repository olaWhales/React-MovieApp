import { Outlet } from "react-router-dom";  // this is where we like all component to come in before so we can all them in 
import Footer from "../component/Footer";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import style from "../styles/layout.module.css";


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

