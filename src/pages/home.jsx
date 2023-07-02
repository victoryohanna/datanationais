import HeaderComponent from "../components/header";
import About from "../components/aboutus";
import Services from "../components/services";
import ContactUs from "../components/contact";
import Courses from "../components/courses";
import Clients from "../components/clients";
import OurTeam from "../components/team";

import "../sass/home.scss"
const Home = () => {
  return (
    <div className="home-wrapper">
      
      <HeaderComponent />
      <About />
      <Services/>
      <Courses/>
      <ContactUs/>
      <Clients/>
      <OurTeam/>
    </div>
  );
};

export default Home;
