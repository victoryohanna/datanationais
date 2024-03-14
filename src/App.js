import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home";
import Analytics from "./pages/services/analytics";
import BusinessIntelligence from "./pages/services/businessIntelligence";
import Consultancy from "./pages/services/consultancy";
import Research from "./pages/services/research";
import Training from "./pages/services/training";
import WebDesign from "./pages/services/webdesign";
import Services from "./pages/services";

export default function App() {
  // let pathName = window.location.pathname;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
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
      <a
        href="https://wa.me/2348134552628"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

const Root = () => {
  return <Outlet />;
};
