import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar";
import NavLinks from "./components/nav";
import Home from "./pages/home";
import Analytics from "./pages/analytics";
import BusinessIntelligence from "./pages/businessIntelligence";
import Consultancy from "./pages/consultancy";
import Research from "./pages/research";
import Training from "./pages/training";
import WebDesign from "./pages/webdesign";
import Footer from "./components/footer";

export default function App() {
  console.log(window.location.pathname);
  let pathName = window.location.pathname;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root pathName={pathName} />}>
        <Route index element={<Home />} />
        <Route path="/data-analytics" element={<Analytics />} />
        <Route
          path="/business-intelligence"
          element={<BusinessIntelligence />}
        />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/research" element={<Research />} />
        <Route path="/training" element={<Training />} />
        <Route path="/web-design" element={<WebDesign />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = ({ pathName }) => {
  return (
    <>
      {pathName === "/" ? <Navbar /> : <NavLinks />}
      <Outlet />
      <Footer />
    </>
  );
};
