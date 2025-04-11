"use client";

// React Imports
import React from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <ul className="text-xl sm:text-2xl lg:text-3xl w-full text-textLight dark:text-tWhite flex flex-row gap-2 sm:gap-3 lg:gap-6 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.25)] lg:shadow-[2px_0_10px_rgba(0,0,0,0.1)] dark:lg:shadow-[2px_0_10px_rgba(0,0,0,0.25)] lg:flex-col lg:w-20 lg:justify-center px-2 sm:px-3 lg:px-0 lg:ms-6 lg:me-0 bottom-0 bg-tWhite dark:bg-greyBg lg:dark:bg-transparent justify-around lg:h-full fixed right-0 z-50 py-2 sm:py-3 lg:py-4">
      {pages?.map(({ title, icon, url }, index) => (
        <SideBarItem
          title={title.toUpperCase()}
          key={index}
          icon={icon}
          url={url}
          index={index}
          isActive={pathname === url}
          setSelectedTab={() => {}}
        />
      ))}
    </ul>
  );
};
