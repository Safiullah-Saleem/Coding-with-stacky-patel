import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Table from "../Table/Table";

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Contact/>
        <Table/>
        <Footer/>
    </div>
  )
}
export default Home