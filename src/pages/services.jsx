import React from "react";
import { Outlet } from "react-router-dom";
import NavLinks from "../components/nav";
import Footer from "../components/footer";

export default function Services() {
  return (
    <>
      <NavLinks />
      <Outlet />
      <Footer/>
    </>
  );
}
