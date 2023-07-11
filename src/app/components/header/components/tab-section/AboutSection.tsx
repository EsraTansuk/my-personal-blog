import React from "react";
import { Progressbar } from "../progressbar";
import { Title } from "../title";

export const AboutSection = () => {
    const htmlPercentage: number = 90;
    const cssPercentage: number = 80;
    const scssPercentage: number = 75;
    const jsPercentage: number = 60;
    const bootstrapPercentage: number = 90;
    const reactPercentage: number = 60;
    const typscriptPercentage: number = 40;
    const githubPercentage: number = 80;
    const tailwindPercentage: number = 80;
    const nextjsPercentage: number = 40;
    
  return (
    <div className="flex flex-col items-center w-full pb-7 overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title titleOne="ABOUT" titleTwo="ME" titleBackground="RESUME" />
        <div className="w-full mx-auto md:max-w-7xl flex flex-col xl:flex-row gap-12">
          <div className="flex flex-col items-start px-4 w-full xl:w-1/2 xl:mx-0">
            <h1 className=" text-3xl font-semibold mb-6 pb-1 border-b-2 border-mainColor">
              PERSONAL INFOS
            </h1>
            <div className="w-full">
              <ul className="text-base flex flex-wrap">
                <li className="pb-5 w-2/4 ">
                  <span className="opacity-70 ">First Name :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    Esra
                  </span>
                </li>
                <li className="pb-5 w-2/4">
                  <span className="opacity-70">Last Name :</span>
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
                  <span className="opacity-70">Nationality :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Turkey
                  </span>
                </li>
                <li className="pb-5 w-2/4">
                  <span className="opacity-70">Freelance :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Available
                  </span>
                </li>
                <li className="pb-5 w-2/4">
                  <span className="opacity-70">Address :</span>
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
                  <span className="opacity-70">GitHub Name :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    EsraTansuk
                  </span>
                </li>
                <li className="pb-5 w-2/4">
                  <span className="opacity-70">Languages :</span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    English, German
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" items-center lg:items-start w-full lg:w-9/12 xl:w-1/2 flex flex-col px-4">
            <div className="w-full gap-10 flex flex-row ">
              <div className=" w-1/2 mb-8 pt-5 pe-16 pb-6 ps-12 border divide-solid border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-6xl relative w-6">
                  1
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>
                <span className="before:content-['--'] text-transparentGray absolute"></span>
                <p className=" pl-11 text-lg">
                  {" "}
                  YEARS OF <span>EXPERIENCE</span>
                </p>
              </div>
              <div className="w-1/2 mb-8 pt-5 pe-16 pb-6 ps-12 border divide-solid border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-6xl relative w-10">
                  4
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>
                <span className="before:content-['--'] text-transparentGray absolute"></span>
                <p className=" pl-11 text-lg">
                  {" "}
                  COMPLETED <span>PROJECT</span>
                </p>
              </div>
            </div>
            <div className="w-full gap-10 flex flex-row ">
              <div className="w-1/2 mb-8 pt-5 pe-16 pb-6 ps-12 border divide-solid border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-6xl relative w-6">
                  1
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>
                <span className="before:content-['--'] text-transparentGray absolute"></span>
                <p className=" pl-11 text-lg">
                  {" "}
                  HAPPY <span>CUSTOMER</span>
                </p>
              </div>
              <div className="w-1/2 mb-8 pt-5 pe-18 pb-6 ps-12 border divide-solid border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-6xl relative w-10">
                  2
                  <span className="text-mainColor after:content-['_+'] -right-7 absolute text-4xl "></span>
                </h3>
                <span className="before:content-['--'] text-transparentGray absolute"></span>
                <p className=" pl-11 text-lg">
                  {" "}
                  CERTIFICATE OF <span>ACHIEVEMENT</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-6 px-4">
          <div className=" text-center">
            <div className="border-t-2 border-borderColor w-6/12 flex mx-auto"></div>
            <h2 className="text-4xl font-semibold my-10">My Skills</h2>
          </div>
          <div className="w-full flex flex-col gap-12 mx-auto">
            <div className="w-full flex flex-wrap gap-14 mx-auto">
              <div className="px-8">
                <Progressbar
                  percentage={htmlPercentage}
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
                  strokeWidth={8}
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
      </div>
    </div>
  );
};
