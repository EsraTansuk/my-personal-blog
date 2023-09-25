'use client'

// React Imports
import React from "react";

// Package Imports
import {
  faBriefcase,
  faComments,
  faEnvelopeOpen,
  faHouse,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { SideBarItem } from "./SideBarItem";


interface Pages {
  title: string;
  icon: IconDefinition;
  url: string;
}

const pages: Pages[] = [
  {
    title: "Home",
    icon: faHouse,
    url: "/",
  },
  {
    title: "About",
    icon: faUser,
    url: "/about",
  },
  {
    title: "Portfolio",
    icon: faBriefcase,
    url: "/portfolio",
  },
  {
    title: "Contact",
    icon: faEnvelopeOpen,
    url: "/contact",
  },
  {
    title: "Blog",
    icon: faComments,
    url: "/blog",
  },
];

export const SideBar = () => {
  return (
    <ul className="text-3xl w-full text-textLight dark:text-tWhite flex flex-row border-x-fuchsia-50 border-t-2 dark:border-t-0 shadow-shadowColor  shadow-2xl lg:shadow-none lg:flex-col lg:w-20 lg:justify-center px-3 lg:px-0 lg:mx-6 bottom-0 bg-tWhite dark:bg-greyBg lg:dark:bg-transparent justify-around lg:h-full fixed right-0 z-50">
      {pages?.map(({ title, icon, url }, index) => (
        <SideBarItem
          title={title.toUpperCase()}
          key={index}
          icon={icon}
          url={url}
          index={index}
          setSelectedTab={() => {}}
        />
      ))}
    </ul>
  );
};
