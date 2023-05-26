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
    <div className="ml-96 text-white">
      {/* <ul className="text-3xl text-white flex flex-col m-0 p-0">
        <li
          className=" w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative my-3 px-4 py-3 hover:bg-mainColor focus-within:bg-mainColor"
          onClick={openPages}
        >
          <Link href="/" className="text-white">
            <FontAwesomeIcon icon={faHouse} style={{ width: "24px" }} />
          </Link>
        </li>
        <li className=" w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative my-3 px-4 py-3 focus-within:bg-mainColor">
          <Link href="/" className="text-white">
            <FontAwesomeIcon icon={faUser} style={{ width: "22px" }} />
          </Link>
        </li>
        <li className=" w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative my-3 px-4 py-3 focus-within:bg-mainColor">
          <Link href="/" className="text-white">
            <FontAwesomeIcon icon={faBriefcase} style={{ width: "24px" }} />
          </Link>
        </li>
        <li className=" w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative my-3 px-4 py-3 focus-within:bg-mainColor">
          <Link href="/" className="text-white">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              style={{ width: "24px" }}
            />
          </Link>
        </li>
        <li className=" w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative my-3 px-4 py-3 focus-within:bg-mainColor">
          <Link href="/" className="text-white">
            <FontAwesomeIcon icon={faComments} style={{ width: "26px" }} />
          </Link>
        </li>
      </ul> */}

      <Tabs>
        <Tab title={faHouse}>
        <div className="color-block d-none d-lg-block bg-mainColor"></div>
          <p className="w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            eaque assumenda, vero veritatis praesentium consectetur ab? Sint
            molestias delectus suscipit dolores, sequi necessitatibus magni,
            eos, dolorem modi odio vitae tempore?
          </p>
        </Tab>
        <Tab title={faUser}>Strawberry is red</Tab>
      </Tabs>
    </div>
  );
};
