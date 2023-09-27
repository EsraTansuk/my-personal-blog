"use client";

/* eslint-disable react/no-unescaped-entities */
import { Progressbar } from "../progressbar";
import { Title } from "../title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const AboutSection = () => {
  const htmlPercentage: number = 80;
  const cssPercentage: number = 80;
  const scssPercentage: number = 80;
  const jsPercentage: number = 60;
  const bootstrapPercentage: number = 85;
  const reactPercentage: number = 70;
  const typscriptPercentage: number = 50;
  const githubPercentage: number = 75;
  const tailwindPercentage: number = 80;
  const nextjsPercentage: number = 55;

  return (
    <div className="flex flex-col items-center w-full pb-7 overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title titleOne="ABOUT" titleTwo="ME" titleBackground="RESUME" />
        <div className="w-full mx-auto md:max-w-7xl flex flex-col xl:flex-row gap-12">
          <div className="flex flex-col items-start px-4 w-full xl:w-1/2 xl:mx-0">
            <h1 className=" text-2xl md:text-3xl font-semibold mb-6 pb-1 border-b-2 border-mainColor text-textLight dark:text-tWhite">
              PERSONAL INFOS
            </h1>
            <div className="w-full">
              <ul className="text-base flex flex-wrap text-textLight dark:text-tWhite">
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70 ">Full Name :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    Esra Tansuk
                  </span>
                </li>
                {/* <li className="pb-5 w-2/4">
                  <span className="opacity-70">Last Name :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Tansuk
                  </span>
                </li> */}
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">Age :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    29
                  </span>
                </li>
                <li className="md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">Nationality :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Turkey
                  </span>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">Freelance :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Available
                  </span>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">Address :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Ankara, Turkey
                  </span>
                </li>
                {/* <li className="pb-5 w-2/4">
                  <span className="opacity-70">Phone :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    +90 555 555 55 55
                  </span>
                </li> */}
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">Email :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    esra.tansuk@gmail.com
                  </span>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">GitHub Profile :</span>
                  <Link
                    href="https://github.com/EsraTansuk"
                    target="_blank"
                    className=" hover:underline font-semibold md:block md:ps-0 lg:inline-block lg:ps-2"
                  >
                    {" "}
                    EsraTansuk
                  </Link>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">Languages :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    English, German
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" items-center lg:items-start w-full lg:w-9/12 xl:w-1/2 flex flex-col px-4 text-textLight dark:text-tWhite">
            <div className="w-full gap-2 md:gap-10 flex flex-row ">
              <div className=" w-1/2 mb-8 pt-5 pe-12 md:pe-16 pb-6 ps-4 md:ps-12 border divide-solid dark:border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-5xl md:text-6xl relative w-6">
                  1
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>

                <p className=" pl-11 text-base md:text-lg">
                  {" "}
                  YEARS OF <span>EXPERIENCE</span>
                </p>
              </div>
              <div className="w-1/2 mb-8 pt-5 pe-12 md:pe-16 pb-6 ps-3 md:ps-12 border divide-solid dark:border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-5xl md:text-6xl relative w-10">
                  4
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>

                <p className=" pl-11 text-base md:text-lg ">
                  {" "}
                  COMPLETED <span>PROJECTS</span>
                </p>
              </div>
            </div>
            <div className="w-full gap-2 md:gap-10 flex flex-row ">
              <div className="w-1/2 mb-8 pt-5 pe-12 md:pe-16 pb-6 ps-3 md:ps-12 border divide-solid dark:border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-5xl md:text-6xl relative w-6">
                  1
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>

                <p className=" pl-11 text-base md:text-lg">
                  {" "}
                  HAPPY <span>CUSTOMER</span>
                </p>
              </div>
              <div className="w-1/2 mb-8 pt-5 pe-18 pb-6 ps-3 md:ps-12 border divide-solid dark:border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-5xl md:text-6xl relative w-10">
                  2
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>

                <p className=" pl-11 text-base md:text-lg">
                  {" "}
                  CERTIFICATE OF <span>ACHIEVEMENT</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-6 px-4 text-textLight dark:text-tWhite">
          <div className=" text-center">
            <div className="border-t-2 border-borderColor w-6/12 flex mx-auto"></div>
            <h2 className="text-2xl md:text-3xl font-semibold my-10">
              MY SKILLS
            </h2>
          </div>
          <div className="w-full flex flex-col gap-12 mx-auto">
            <div className="w-full flex flex-wrap gap-14 mx-auto items-center justify-center">
              <div className="px-8">
                <Progressbar
                  percentage={htmlPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="HTML"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: { width: "100px" },
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={cssPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="CSS"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={scssPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="SASS"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={jsPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="JAVASCRİPT"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={tailwindPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="TAILWIND"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={bootstrapPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="BOOTSTRAP"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={reactPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="REACT JS"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={typscriptPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="TYPESCRIPT"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={githubPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="GITHUB"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
              <div className="px-8">
                <Progressbar
                  percentage={nextjsPercentage}
                  strokeWidth={7}
                  trailColor="#252525"
                  pathColor={`rgba(255, 180, 0`}
                  textColor="#fff"
                  text="NEXT JS"
                  background={false}
                  backgroundPadding={0}
                  circleRatio={0}
                  classes={{
                    root: "",
                    trail: "",
                    path: "",
                    text: "",
                    background: "",
                  }}
                  className={""}
                  counterClockwise={false}
                  maxValue={0}
                  minValue={0}
                  styles={{
                    root: undefined,
                    trail: undefined,
                    path: undefined,
                    text: undefined,
                    background: undefined,
                  }}
                  value={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-14 px-4 text-textLight dark:text-tWhite">
          <div>
            <div className="border-t-2 border-borderColor w-6/12 flex mx-auto"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-textLight dark:text-tWhite my-10">
              EXPERIENCE & EDUCATION
            </h2>
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className=" lg:w-2/4 w-full px-4">
              <div className=" box-border">
                <ul className=" list-none m-0 p-0 block">
                  <li className="relative py-0 pr-5 pl-16 mx-0 mt-0 mb-12">
                    <div className=" w-11 h-11 absolute left-0 right-0 leading-10 text-center rounded-full bg-mainColor">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" my-3 text-lGray text-2xl"
                      />
                    </div>
                    <span className="text-textLight dark:text-lGray text-xs py-1 px-3 mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                      2023 - PRESENT
                    </span>
                    <h5 className=" text-lg mt-2 mx-0 mb-3 font-medium">
                      Frontend Developer Intern
                      <span className="before:content-['-'] opacity-80 relative pl-4 text-[15px]">
                        {" "}
                        POINTO
                      </span>
                    </h5>
                    <p className="text-textLight dark:text-lGray text-base m-0">
                      I am working as a Frontend Developer Intern at Pointo.
                    </p>
                  </li>

                  <li className="relative py-0 pr-5 pl-16 mx-0 mt-0 mb-12">
                    <div className=" w-11 h-11 absolute left-0 right-0 leading-10 text-center rounded-full bg-mainColor">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" my-3 text-lGray text-2xl"
                      />
                    </div>
                    <span className=" text-textLight dark:text-lGray text-xs py-1 px-3 mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                      2018 - PRESENT
                    </span>
                    <h5 className=" text-lg mt-2 mx-0 mb-3 font-medium">
                      WEB DEVELOPER{" "}
                      <span className="before:content-['-'] opacity-80 relative pl-4 text-[15px]">
                        {" "}
                        ENVATO
                      </span>
                    </h5>
                    <p className="text-textLight dark:text-lGray text-sm m-0">
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt
                      ut labore adipisicing elit
                    </p>
                  </li>

                  <li className="relative py-0 pr-5 pl-16 mx-0 mt-0 mb-12">
                    <div className=" w-11 h-11 absolute left-0 right-0 leading-10 text-center rounded-full bg-mainColor">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" my-3 text-lGray text-2xl"
                      />
                    </div>
                    <span className="text-textLight dark:text-lGray text-xs py-1 px-3 mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                      2018 - PRESENT
                    </span>
                    <h5 className=" text-lg mt-2 mx-0 mb-3 font-medium">
                      WEB DEVELOPER{" "}
                      <span className="before:content-['-'] opacity-80 relative pl-4 text-[15px]">
                        {" "}
                        ENVATO
                      </span>
                    </h5>
                    <p className="text-textLight dark:text-lGray text-sm m-0">
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt
                      ut labore adipisicing elit
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" lg:w-2/4 w-full px-4">
              <div className=" box-border">
                <ul className=" list-none m-0 p-0 block">
                  <li className="relative py-0 pr-5 pl-16 mx-0 mt-0 mb-12">
                    <div className=" w-11 h-11 absolute left-0 right-0 leading-10 text-center rounded-full bg-mainColor">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" my-3 text-lGray text-2xl"
                      />
                    </div>
                    <span className=" text-textLight dark:text-lGray text-xs py-1 px-3 mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                      2018 - PRESENT
                    </span>
                    <h5 className=" text-lg mt-2 mx-0 mb-3 font-medium">
                      WEB DEVELOPER{" "}
                      <span className="before:content-['-'] opacity-80 relative pl-4 text-[15px]">
                        {" "}
                        ENVATO
                      </span>
                    </h5>
                    <p className="text-textLight dark:text-lGray text-sm m-0">
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt
                      ut labore adipisicing elit
                    </p>
                  </li>

                  <li className="relative py-0 pr-5 pl-16 mx-0 mt-0 mb-12">
                    <div className=" w-11 h-11 absolute left-0 right-0 leading-10 text-center rounded-full bg-mainColor">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" my-3 text-lGray text-2xl"
                      />
                    </div>
                    <span className=" text-textLight dark:text-lGray text-xs py-1 px-3 mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                      2018 - PRESENT
                    </span>
                    <h5 className=" text-lg mt-2 mx-0 mb-3 font-medium">
                      WEB DEVELOPER{" "}
                      <span className="before:content-['-'] opacity-80 relative pl-4 text-[15px]">
                        {" "}
                        ENVATO
                      </span>
                    </h5>
                    <p className="text-textLight dark:text-lGray text-sm m-0">
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt
                      ut labore adipisicing elit
                    </p>
                  </li>

                  <li className="relative py-0 pr-5 pl-16 mx-0 mt-0 mb-12">
                    <div className=" w-11 h-11 absolute left-0 right-0 leading-10 text-center rounded-full bg-mainColor">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" my-3 text-lGray text-2xl"
                      />
                    </div>
                    <span className=" text-textLight dark:text-lGray text-xs py-1 px-3 mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                      2018 - PRESENT
                    </span>
                    <h5 className=" text-lg mt-2 mx-0 mb-3 font-medium">
                      WEB DEVELOPER{" "}
                      <span className="before:content-['-'] opacity-80 relative pl-4 text-[15px]">
                        {" "}
                        ENVATO
                      </span>
                    </h5>
                    <p className="text-textLight dark:text-lGray text-sm m-0">
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt
                      ut labore adipisicing elit
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
