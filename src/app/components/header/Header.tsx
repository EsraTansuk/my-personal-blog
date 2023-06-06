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
    <div className=" text-white w-full flex h-screen ">
      <Tabs>
        <Tab icon={faHouse} title="HOME">
          <div className="color-block d-none d-lg-block bg-mainColor hidden lg:block"></div>
          <div className="z-10 px-10 py-10 align-middle w-full">
            <div className="flex flex-col lg:flex-row w-full items-center">
              <div
                className="items-center w-72 h-72 border-4 border-greyBg lg:border-none lg:w-2/6 lg:h-calc-vh bg-[url('/img/my-photo.jpeg')] rounded-full lg:rounded-3xl"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "box-shadow: 0 0 7px rgba(0,0,0,.9)",
                }}
              ></div>
              <div className="max-w-full lg:w-4/6 items-center text-center lg:text-left md:px-12 lg:px-20 2xl:px-48 mb-10">
                <h1 className=" text-5xl 2xl:text-6xl relative mt-6 uppercase text-mainColor font-bold ps-8">
                  I'm Esra Tansuk. <br />{" "}
                  <span className=" text-white my-4">Frontend Developer</span>
                </h1>
                <p className=" mt-4 mb-7 leading-8 text-lg">
                  I'm a Tunisian based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </p>
                <button className="border border-solid border-mainColor rounded-full text-lg font-semibold ps-[35px] pe-[70px] py-[16px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor transition duration-300 ease-in-out">
                  <span className="relative">MORE ABOUT ME</span>
                  <span className="rounded-full bg-mainColor w-[56px] h-[56px] flex justify-center items-center -mt-10 ml-[158px] absolute">
                    <FontAwesomeIcon
                      icon={faRightLong}
                      style={{ width: "50px", height: "30px" }}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Tab>
        <Tab icon={faUser} title="ABOUT">
          <div className="flex flex-col items-center w-full">
            <div className="w-full text-center relative py-20 ">
              <h1 className="font-black text-6xl m-0">
                ABOUT <span className=" text-mainColor">ME</span>
              </h1>
              <span className="absolute text-9xl tracking-wider text-center font-extrabold text-transparentGray top-[50%] -translate-x-[50%] -translate-y-[50%] ">
                RESUME
              </span>
            </div>
            <div className="w-full mx-auto md:max-w-7xl flex flex-col xl:flex-row gap-5">
              <div className="flex flex-col items-start w-full xl:w-1/2 xl:mx-0 ps-3">
                <div className="">
                  <h1 className=" text-3xl font-extrabold mb-6 pb-1 border-b-2 border-mainColor">
                    PERSONAL INFOS
                  </h1>
                </div>
                <div className="w-full">
                  <ul className=" text-base flex flex-wrap">
                    <li className="pb-5 w-2/4 ">
                      <span className="opacity-70 ">
                        First Name :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        Esra
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">
                        Last Name :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        Tansuk
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">Age :</span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        24
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">
                        Nationality :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        Turkey
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">
                        Freelance :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        Available
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">
                        Address :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        Ankara, Turkey
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">Phone :</span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        +90 555 555 55 55
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">Email :</span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        esra.balkis@outlook.com
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">
                        GitHub Name :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        EsraTansuk
                      </span>
                    </li>
                    <li className="pb-5 w-2/4">
                      <span className="opacity-70">
                        Languages :
                      </span>
                      <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                        {" "}
                        English, German
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start w-full xl:w-1/2 pe-4">
                <div className="w-full flex flex-wrap mx-auto">
                  <div className="w-full lg:w-1/2">
                    <div className=" mb-8 pt-5 pe-7 pb-6 ps-10 border divide-solid border-borderColor rounded-md ">
                      <h3 className="text-mainColor font-black text-6xl relative w-6">
                        1
                        <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                      </h3>
                      <span className="before:content-['--'] text-transparentGray absolute"></span><p className=" pl-11"> YEARS OF <span>EXPERIENCE</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab icon={faBriefcase} title="PORTFOLIO">
          Strawberry is red
        </Tab>
        <Tab icon={faEnvelopeOpenText} title="CONTACT">
          Strawberry is red
        </Tab>
        <Tab icon={faComments} title="BLOG">
          Strawberry is red
        </Tab>
      </Tabs>
    </div>
  );
};
