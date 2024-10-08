// import HeaderComponent from "../components/header";
import About from "../components/aboutus";
import Services from "../components/services";
import ContactUs from "../components/contact";
import Courses from "../components/courses";
import Clients from "../components/clients";
import HeroSection from "../components/hero"
// import OurTeam from "../components/team";

import "../sass/home.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      {/* <HeaderComponent /> */}
      <HeroSection/>
      <About />
      <Services />
      <Courses />
      <ContactUs />
      <Clients />
      {/* <OurTeam/> */}
      <Footer />
     
    </div>
  );
};

export default Home;
