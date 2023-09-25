import React from "react";
import { SideBar } from "../components/sideBar";
import { ContactSection } from "../components/header/components/tab-section";

// Package Imports
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Esra Tansuk",
};


const ContactPage = () => {
  return (
    <>
      <SideBar />
      <ContactSection />
    </>
  );
};

export default ContactPage;
