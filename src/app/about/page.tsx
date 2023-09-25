// Component Imports
import { AboutSection } from "../components/header/components/tab-section";
import { SideBar } from "../components/sideBar";

// Package Imports
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Esra Tansuk",
};

const AboutPage = () => {
  return (
    <>
      <SideBar />
      <AboutSection />
    </>
  );
};

export default AboutPage;
