/* eslint-disable react/no-unescaped-entities */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faEnvelopeOpenText,
  faHouse,
  faRightLong,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "../tabItem/Tabs";
import { Tab } from "../tabItem/Tab";

export const Header = () => {
  return (
    <div className=" text-white w-full flex flex-col lg:flex-row h-screen ">
      <Tabs>
        <Tab title={faHouse}>
          <div className="color-block d-none d-lg-block bg-mainColor hidden lg:block"></div>
          <div className="z-10 px-10 py-10 align-middle w-full">
            <div className="flex flex-col lg:flex-row w-full items-center">
              <div
                className="items-center w-72 h-72 border-4 border-greyBg lg:border-none lg:w-2/6 lg:h-calc-vh bg-[url('/img/img-1.jpg')] rounded-full lg:rounded-3xl"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  // height: "calc(100vh - 80px)",
                  boxShadow: "box-shadow: 0 0 7px rgba(0,0,0,.9)",
                }}
              ></div>
              <div className="max-w-full lg:w-4/6 items-center text-center lg:text-left px:2 md:px-20 lg:px-52 mb-10">
                <h1 className=" text-5xl lg:text-5xl xl:text-6xl relative mt-6 uppercase text-mainColor font-bold ps-8">
                  I'm Esra Tansuk. <br/> <span className=" text-white my-4">Frontend Developer</span>
                </h1>
                <p className=" mt-4 mb-7 leading-8 text-lg">
                  I'm a Tunisian based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me. 
                </p>
                <button className="border border-solid border-mainColor rounded-full text-lg font-semibold ps-[35px] pe-[70px] py-[16px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor">
                  <span className="relative">MORE ABOUT ME</span>
                  <span className="rounded-full bg-mainColor w-[56px] h-[56px] flex justify-center items-center -mt-10 ml-[158px] absolute">
                    <FontAwesomeIcon icon={faRightLong} style={{width:"50px", height:"30px"}} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Tab>
        <Tab title={faUser}>Strawberry is red</Tab>
        <Tab title={faBriefcase}>Strawberry is red</Tab>
        <Tab title={faEnvelopeOpenText}>Strawberry is red</Tab>
        <Tab title={faComments}>Strawberry is red</Tab>
      </Tabs>
    </div>
  );
};
