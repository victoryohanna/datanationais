import HeaderComponent from "../components/header";
import About from "../components/aboutus";
import Services from "../components/services";
import ContactUs from "../components/contact";
import RegisterCourse from "../components/register";

import "../sass/home.scss"
const Home = () => {
  return (
    <div className="home-wrapper">
      {/* <RegisterCourse/> */}
      <HeaderComponent />
      <About />
      <Services/>
      <ContactUs/>
    </div>
  );
};

export default Home;
