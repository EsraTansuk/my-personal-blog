"use client";

/* eslint-disable react/no-unescaped-entities */
import { Progressbar } from "../progressbar";
import { Title } from "../title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { translator } from "@/utils/translator";
import { useAppSelector } from "@/hooks";
import { getLanguageState } from "@/app/app/appSelector";

export const AboutSection = () => {
  const currentLanguage = useAppSelector(getLanguageState());

  const htmlPercentage: number = 90;
  const cssPercentage: number = 90;
  const scssPercentage: number = 90;
  const jsPercentage: number = 90;
  const bootstrapPercentage: number = 100;
  const reactPercentage: number = 90;
  const typscriptPercentage: number = 80;
  const githubPercentage: number = 90;
  const tailwindPercentage: number = 90;
  const nextjsPercentage: number = 85;
  const rtkQueryPercentage: number = 70;
  const reduxToolkitPercentage: number = 70;

  return (
    <div className="flex flex-col items-center w-full pb-7 overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title
          titleOne={translator("ABOUT.ABOUT")}
          titleTwo={
            currentLanguage?.name === "en-US"
              ? translator("ABOUT.ME")
              : undefined
          }
          titleBackground={translator("ABOUT.RESUME")}
        />
        <div className="w-full mx-auto md:max-w-7xl flex flex-col xl:flex-row gap-12">
          <div className="flex flex-col items-start px-4 w-full xl:w-1/2 xl:mx-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 pb-1 border-b-2 border-mainColor text-textLight dark:text-tWhite">
              {translator("ABOUT.PERSONAL.INFOS")}
            </h1>
            <div className="w-full">
              <ul className="text-sm sm:text-base flex flex-wrap text-textLight dark:text-tWhite">
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70 ">
                    {translator("ABOUT.FULLNAME")} :
                  </span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    Esra Tansuk
                  </span>
                </li>

                <li className="md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">
                    {translator("ABOUT.NATIONALITY")} :
                  </span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    {translator("ABOUT.TURKEY")}
                  </span>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">
                    {translator("ABOUT.FREELANCE")} :
                  </span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    {translator("ABOUT.AVAILABLE")}
                  </span>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">
                    {translator("ABOUT.ADDRESS")} :
                  </span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    Ankara, {translator("ABOUT.TURKEY")}
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
                  <span className="opacity-70">
                    {translator("ABOUT.EMAIL")} :
                  </span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    esra.tansuk@gmail.com
                  </span>
                </li>
                <li className="pb-1 md:pb-5 w-full md:w-2/4">
                  <span className="opacity-70">
                    {translator("ABOUT.GITHUB.PROFILE")} :
                  </span>
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
                  <span className="opacity-70">
                    {translator("ABOUT.LANGUAGES")} :
                  </span>
                  <span className=" font-semibold md:block md:ps-0 lg:inline-block lg:ps-2">
                    {" "}
                    {translator("ABOUT.ENGLISH")}, {translator("ABOUT.GERMAN")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" items-center lg:items-start w-full lg:w-9/12 xl:w-1/2 flex flex-col px-4 text-textLight dark:text-tWhite">
            <div className="w-full gap-2 md:gap-10 flex flex-row ">
              <div className="w-1/2 mb-6 sm:mb-8 pt-3 sm:pt-5 pe-8 sm:pe-12 md:pe-16 pb-4 sm:pb-6 ps-3 sm:ps-4 md:ps-12 border divide-solid dark:border-borderColor rounded-md">
                <h3 className="text-mainColor font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative w-10">
                  3
                  <span className="text-mainColor after:content-['_+'] -right-5 sm:-right-7 absolute text-2xl sm:text-3xl md:text-4xl"></span>
                </h3>
                <p className="pl-8 sm:pl-11 text-sm sm:text-base md:text-lg">
                  {translator("ABOUT.YEARS.OF.EXPERIENCE")}
                </p>
              </div>
              <div className="w-1/2 mb-8 pt-5 pe-12 md:pe-16 pb-6 ps-3 md:ps-12 border divide-solid dark:border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative w-10">
                  8
                  <span className="text-mainColor after:content-['_+'] -right-5 sm:-right-7 absolute text-2xl sm:text-3xl md:text-4xl"></span>
                </h3>

                <p className=" pl-8 sm:pl-11 text-sm sm:text-base md:text-lg ">
                  {" "}
                  {translator("ABOUT.COMPLETED.PROJECTS")}
                </p>
              </div>
            </div>
            <div className="w-full gap-2 md:gap-10 flex flex-row ">
              <div className="w-1/2 mb-8 pt-5 pe-12 md:pe-16 pb-6 ps-3 md:ps-12 border divide-solid dark:border-borderColor rounded-md  ">
                <h3 className="text-mainColor font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative w-10">
                  4
                  <span className="text-mainColor after:content-['_+'] -right-5 sm:-right-7 absolute text-2xl sm:text-3xl md:text-4xl"></span>
                </h3>

                <p className=" pl-8 sm:pl-11 text-sm sm:text-base md:text-lg">
                  {" "}
                  {translator("ABOUT.HAPPY.CUSTOMERS")}
                </p>
              </div>
              <div className="w-1/2 mb-8 pt-5 pe-18 pb-6 ps-3 md:ps-12 border divide-solid dark:border-borderColor rounded-md ">
                <h3 className="text-mainColor font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative w-10">
                  2
                  <span className="text-mainColor after:content-['_+'] -right-5 sm:-right-7 absolute text-2xl sm:text-3xl md:text-4xl"></span>
                </h3>

                <p className=" pl-8 sm:pl-11 text-sm sm:text-base md:text-lg">
                  {" "}
                  {translator("ABOUT.CERTIFICATION.OF.ACHIEVEMENT")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-4 sm:my-5 md:my-6 px-2 sm:px-3 md:px-4 text-textLight dark:text-tWhite">
          <div className="text-center"></div>
          <div className="border-t-2 border-borderColor w-6/12 flex mx-auto"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-6 sm:my-8 md:my-10 text-center">
            {translator("ABOUT.MY.SKILLS")}
          </h2>
        </div>
        <div className="w-full flex flex-col gap-8 sm:gap-10 md:gap-12 mx-auto">
          <div className="w-full flex flex-wrap gap-8 sm:gap-10 md:gap-14 mx-auto items-center justify-center">
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
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
            <div className="px-4 sm:px-6 md:px-8">
              <Progressbar
                percentage={rtkQueryPercentage}
                strokeWidth={7}
                trailColor="#252525"
                pathColor={`rgba(255, 180, 0`}
                textColor="#fff"
                text="RTK QUERY"
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
            <div className="px-4 sm:px-6 md:px-8">
              <Progressbar
                percentage={reduxToolkitPercentage}
                strokeWidth={7}
                trailColor="#252525"
                pathColor={`rgba(255, 180, 0`}
                textColor="#fff"
                text="REDUX TOOLKIT"
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
      <div className="w-full my-8 sm:my-10 md:my-14 px-2 sm:px-3 md:px-4 text-textLight dark:text-tWhite">
        <div>
          <div className="border-t-2 border-borderColor w-6/12 flex mx-auto"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-textLight dark:text-tWhite my-6 sm:my-8 md:my-10">
            {translator("ABOUT.EXPERIENCE.&.EDUCATION")}
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-2/4 w-full px-2 sm:px-3 md:px-4">
            <div className="box-border">
              <ul className="list-none m-0 p-0 block">
                <li className="relative py-0 pr-3 sm:pr-4 md:pr-5 pl-12 sm:pl-14 md:pl-16 mx-0 mt-0 mb-8 sm:mb-10 md:mb-12">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 absolute left-0 right-0 leading-8 sm:leading-9 md:leading-10 text-center rounded-full bg-mainColor">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="my-2 sm:my-2.5 md:my-3 text-lGray text-lg sm:text-xl md:text-2xl"
                    />
                  </div>
                  <span className="text-textLight dark:text-lGray text-[10px] sm:text-xs py-0.5 sm:py-1 px-2 sm:px-3 mb-2 sm:mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                    {`${translator("MONTH.APRIL")} 2024 - ${translator(
                      "ABOUT.PRESENT"
                    )}`}
                  </span>
                  <h5 className="text-base sm:text-lg mt-2 mx-0 mb-2 sm:mb-3 font-medium">
                    FRONTEND DEVELOPER
                    <span className="before:content-['-'] opacity-80 relative pl-2 sm:pl-4 text-xs sm:text-sm md:text-[15px]">
                      {" "}
                      PROTECTREMOTE.COM
                    </span>
                  </h5>
                  <p className="text-textLight dark:text-lGray text-xs sm:text-sm md:text-base m-0">
                    I am working as a Frontend Developer at ProtectRemote.com,
                    helping the company to build their website and their
                    products.
                  </p>
                </li>

                <li className="relative py-0 pr-3 sm:pr-4 md:pr-5 pl-12 sm:pl-14 md:pl-16 mx-0 mt-0 mb-8 sm:mb-10 md:mb-12">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 absolute left-0 right-0 leading-8 sm:leading-9 md:leading-10 text-center rounded-full bg-mainColor">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="my-2 sm:my-2.5 md:my-3 text-lGray text-lg sm:text-xl md:text-2xl"
                    />
                  </div>
                  <span className="text-textLight dark:text-lGray text-[10px] sm:text-xs py-0.5 sm:py-1 px-2 sm:px-3 mb-2 sm:mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                    {`${translator("MONTH.FEBRUARY")} 2023 - ${translator(
                      "MONTH.DECEMBER"
                    )} 2023`}
                  </span>
                  <h5 className="text-base sm:text-lg mt-2 mx-0 mb-2 sm:mb-3 font-medium">
                    Frontend Developer Intern
                    <span className="before:content-['-'] opacity-80 relative pl-2 sm:pl-4 text-xs sm:text-sm md:text-[15px]">
                      {" "}
                      POINTO
                    </span>
                  </h5>
                  <p className="text-textLight dark:text-lGray text-xs sm:text-sm md:text-base m-0">
                    I am working as a Frontend Developer Intern at Pointo.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-2/4 w-full px-2 sm:px-3 md:px-4">
            <div className="box-border">
              <ul className="list-none m-0 p-0 block">
                <li className="relative py-0 pr-3 sm:pr-4 md:pr-5 pl-12 sm:pl-14 md:pl-16 mx-0 mt-0 mb-8 sm:mb-10 md:mb-12">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 absolute left-0 right-0 leading-8 sm:leading-9 md:leading-10 text-center rounded-full bg-mainColor">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="my-2 sm:my-2.5 md:my-3 text-lGray text-lg sm:text-xl md:text-2xl"
                    />
                  </div>
                  <span className="text-textLight dark:text-lGray text-[10px] sm:text-xs py-0.5 sm:py-1 px-2 sm:px-3 mb-2 sm:mb-3 rounded-[20px] font-semibold bg-lGray dark:bg-borderColor opacity-80">
                    {`${translator("MONTH.DECEMBER")} 2023 - ${translator(
                      "MONTH.APRIL"
                    )} 2024`}
                  </span>
                  <h5 className="text-base sm:text-lg mt-2 mx-0 mb-2 sm:mb-3 font-medium">
                    FRONTEND DEVELOPER
                    <span className="before:content-['-'] opacity-80 relative pl-2 sm:pl-4 text-xs sm:text-sm md:text-[15px]">
                      {" "}
                      ÜRÜNVER MÜHENDİSLİK -{" "}
                      <Link
                        href="https://difolaunchpad.com/"
                        target="_blank"
                        className=" hover:underline"
                      >
                        https://difolaunchpad.com/
                      </Link>
                    </span>
                  </h5>
                  <p className="text-textLight dark:text-lGray text-xs sm:text-sm md:text-base m-0">
                    I worked as a Frontend Developer at Ürünver Mühendislik
                    where I built difolaunchpad.com using Next.js. My
                    responsibilities included implementing responsive UI
                    components, integrating APIs, and ensuring cross-browser
                    compatibility. I collaborated with the design and backend
                    teams to deliver a seamless user experience while
                    maintaining code quality and performance standards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
