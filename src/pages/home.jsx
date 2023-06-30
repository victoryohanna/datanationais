import HeaderComponent from "../components/header";
import About from "../components/aboutus";
import Services from "../components/services";
import ContactUs from "../components/constact";


const Home = () => {
  return (
    <>
      <HeaderComponent />
      <About />
      <Services/>
      <ContactUs/>
    </>
  );
};

export default Home;
