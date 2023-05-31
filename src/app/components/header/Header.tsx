"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faEnvelopeOpenText,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "../tabItem/Tabs";
import { Tab } from "../tabItem/Tab";
import { icon } from "@fortawesome/fontawesome-svg-core";

export const Header = () => {
  const [isOpenPages, setOpenPages] = useState(false);

  const openPages = () => {
    setOpenPages(false);
  };
  return (
    <div className=" text-white w-full flex flex-col lg:flex-row h-screen ">
      

      <Tabs>
        <Tab title={faHouse}>
        <div className="color-block d-none d-lg-block bg-mainColor"></div>
          <p className="w-full z-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            eaque assumenda, vero veritatis praesentium consectetur ab? Sint
            molestias delectus suscipit dolores, sequi necessitatibus magni,
            eos, dolorem modi odio vitae tempore?
          </p>
        </Tab>
        <Tab title={faUser}>Strawberry is red</Tab>
        <Tab title={faBriefcase}>Strawberry is red</Tab>
        <Tab title={faEnvelopeOpenText}>Strawberry is red</Tab>
        <Tab title={faComments}>Strawberry is red</Tab>
      </Tabs>
    </div>
  );
};
