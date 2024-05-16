import { Outlet } from "react-router-dom"
import Header from "../src/Components/Header/Header"
import Footer from "../src/Components/Footer/Footer"

const Applayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout