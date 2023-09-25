import React from "react";
import { SideBar } from "../components/sideBar";
import { PortfolioSection } from "../components/header/components/tab-section";

// Package Imports
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Esra Tansuk",
};


const PortfolioPage = () => {
  return (
    <>
      <SideBar />
      <PortfolioSection />
    </>
  );
};

export default PortfolioPage;
