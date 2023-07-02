import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";  
import Home from "./pages/home";
import Footer from "./components/footer";
// import Courses from "./components/courses";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/register" element={<RegisterCourse/>}/> */}
      </Routes>
      
      <Footer/>
    </div>

  );
}

export default App;
