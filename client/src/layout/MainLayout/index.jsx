import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import "./index.scss"
import Footer from "../Footer"

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default MainLayout