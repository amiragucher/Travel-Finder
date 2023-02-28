import NavBar from './Components/NavBar/NavBar'
import Style from "../styles/Home.module.css"
import About from "./Components/About/About.jsx"
import Footer from "./Components/Footer/Footer.jsx"

export default function Home() {
  return (
    <div className={Style.container}>
      <NavBar />
      <About/>
      <Footer/>
    </div>
  )
}
