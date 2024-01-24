import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  // useParams,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Analytics from "./pages/analytics";
import BusinessIntelligence from "./pages/businessIntelligence";
import Consultancy from "./pages/consultancy";
import Research from "./pages/research";
import Training from "./pages/training";
import WebDesign from "./pages/webdesign"
import Footer from "./components/footer";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
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
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

