import HeaderComponent from "../components/header";
import About from "../components/aboutus";
import Services from "../components/services";
import ContactUs from "../components/contact";
import Courses from "../components/courses";
import Clients from "../components/clients";

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
    </div>
  );
};

export default Home;
