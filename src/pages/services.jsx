import React from "react";
import { Outlet } from "react-router-dom";
import NavLinks from "../components/nav";

export default function Services() {
  return (
    <>
      <NavLinks />
      <Outlet />
    </>
  );
}
