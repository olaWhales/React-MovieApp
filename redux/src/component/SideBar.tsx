    //racfa to import this
import { Link } from "react-router-dom"
import style from "../styles/sidebar.module.css"
// import 'animate.css'

const SideBar = () => {
  return (
    <div className={style.sideBarContainer}>
      <Link to={"/movie/popular"}><button><p>Popular</p></button></Link>
      <Link to={"/movie/popular"}><button><p>Upcoming</p></button></Link>
      <Link to={"/movie/popular"}><button><p>Top_rated</p></button></Link>
      <Link to={"/movie/popular"}><button><p>Now_playing</p></button></Link>

      {/* <button><p>Upcoming</p></button>
      <button><p>Top_rated</p></button>
      <button><p>Now_playing</p></button> */}

    </div>
  )
}

export default SideBar
