/* eslint-disable react/no-unescaped-entities */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faEnvelopeOpen,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Tabs } from "../tabItem/Tabs";
import { Tab } from "../tabItem/Tab";
import { AboutSection, BlogSection, ContactSection, HomeSection, PortfolioSection } from "./components/tab-section";


export const Header: React.FC = () => {
  return (
    <div className=" text-white w-full flex h-screen">
      <Tabs>
        <Tab icon={faHouse} title="HOME">
          <HomeSection />
        </Tab>
        <Tab icon={faUser} title="ABOUT">
          <AboutSection />
        </Tab>
        <Tab icon={faBriefcase} title="PORTFOLIO">
          <PortfolioSection />
        </Tab>
        <Tab icon={faEnvelopeOpen} title="CONTACT">
          <ContactSection />
        </Tab>
        <Tab icon={faComments} title="BLOG">
          <BlogSection />
        </Tab>
      </Tabs>
    </div>
  );
};
