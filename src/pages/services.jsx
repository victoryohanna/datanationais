import React from "react";
import { Outlet } from "react-router-dom";
import NavLinks from "../components/nav";
import Footer from "../components/footer";
import ScrollToTop from "../components/elements/pageScroll";

export default function Services() {
  return (
    <ScrollToTop>
      <NavLinks />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
}
