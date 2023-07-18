import React from "react";
import { Outlet } from "react-router-dom";
import BarNav from "../components/landing/BarNav";
import FooterHero from "../components/landing/FooterHero";

export default function HomePageLayout() {
  return (
    <>
      <BarNav />
      <Outlet />
      <FooterHero />
    </>
  );
}
