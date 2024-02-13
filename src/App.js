import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
// import Navbar from "./components/navbar";
// import NavLinks from "./components/nav";
import Home from "./pages/home";
import Analytics from "./pages/analytics";
import BusinessIntelligence from "./pages/businessIntelligence";
import Consultancy from "./pages/consultancy";
import Research from "./pages/research";
import Training from "./pages/training";
import WebDesign from "./pages/webdesign";
import Footer from "./components/footer";
import Services from "./pages/services";

export default function App() {
  // let pathName = window.location.pathname;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/data-analytics" element={<Analytics />} />
          <Route
            path="/services/business-intelligence"
            element={<BusinessIntelligence />}
          />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/research" element={<Research />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/web-design" element={<WebDesign />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
