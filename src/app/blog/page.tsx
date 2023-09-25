import React from "react";
import { SideBar } from "../components/sideBar";
import { BlogSection } from "../components/header/components/tab-section";

// Package Imports
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Esra Tansuk",
};


const BlogPage = () => {
  return (
    <>
      <SideBar />
      <BlogSection />
    </>
  );
};

export default BlogPage;
