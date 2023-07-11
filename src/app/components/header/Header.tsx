/* eslint-disable react/no-unescaped-entities */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faEnvelopeOpen,
  faHouse,
  faMapMarkerAlt,
  faPaperPlane,
  faRightLong,
  faSquarePhoneFlip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { Tabs } from "../tabItem/Tabs";
import { Tab } from "../tabItem/Tab";

import { Progressbar, Title } from "./components";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { BlogItem } from "./components/blog-item";
import { PortfolioItem } from "./components/portfolio-item";
import { BlogDetail } from "./components/blog-detail";
import { CustomModal } from "./components/customModal";
import { useModal } from "./components/customModal/useModal";

export const Header: React.FC = () => {
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

  const { isOpen, closeModal, openModal, toggleModal } = useModal();

  return (
    <div className=" text-white w-full flex h-screen">
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
                  boxShadow: " 0 0 7px rgba(0,0,0,.9)",
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
                <button className="border border-solid border-mainColor rounded-full text-lg font-semibold ps-[35px] pe-[70px] py-[16px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor transition duration-300 ease-in-out" onClick={() => openModal()}>
                  <span className="relative">MORE ABOUT ME</span>
                  <span className="rounded-full bg-mainColor w-[56px] h-[56px] flex justify-center items-center -mt-10 ml-[163px] absolute">
                    <FontAwesomeIcon
                      icon={faRightLong}
                      style={{ width: "50px", height: "30px" }}
                    />
                  </span>
                </button>
                <CustomModal isOpen={isOpen} onClose={closeModal}>
                  <button
                    className=" flex z-50 ml-[730px] mb-2"
                    onClick={closeModal}
                  >
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      style={{ color: "#fff" }}
                      size="2xl"
                    />
                  </button>
                  
                </CustomModal>
              </div>
            </div>
          </div>
        </Tab>
        <Tab icon={faUser} title="ABOUT">
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
        </Tab>
        <Tab icon={faBriefcase} title="PORTFOLIO">
          <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
            <div className="w-full lg:max-w-7xl">
              <Title
                titleOne="MY"
                titleTwo="PORTFOLIO"
                titleBackground="WORKS"
              />

              <div className="w-full mb-20 lg:mb-12">
                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-auto  ">
                  <PortfolioItem
                    src="/img/project-1.webp"
                    alt="project1"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-2.webp"
                    alt="project2"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-3.webp"
                    alt="project3"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-4.webp"
                    alt="project4"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-5.webp"
                    alt="project5"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-6.webp"
                    alt="project6"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-7.webp"
                    alt="project7"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-8.webp"
                    alt="project8"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                  <PortfolioItem
                    src="/img/project-9.webp"
                    alt="project9"
                    hoverTitle={"MOCKUP PROJECT"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab icon={faEnvelopeOpen} title="CONTACT">
          <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
            <div className="w-full lg:max-w-7xl">
              <Title
                titleOne="GET IN"
                titleTwo="TOUCH"
                titleBackground="CONTACT"
              />
              <div className="flex flex-col  lg:flex-row justify-between items-center gap-12 mt-7 mb-20">
                <div className="w-full px-4 xl:px-0 lg:w-2/6 pr-5">
                  <h3 className=" text-3xl pb-4 font-medium">DON'T BE SHY!</h3>
                  <p className=" mb-6 text-base">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <p className=" font-medium leading-7 pt-1 mb-5 text-base pl-16 relative">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="mr-4 left-0 top-2 text-5xl text-mainColor absolute pl-2"
                    />
                    <span className=" font-normal opacity-50 pb-0 text-lg block text-amber-50">
                      ADDRESS POINT
                    </span>
                    123 Stree New York City , United States Of America 750065.
                  </p>
                  <p className=" font-medium leading-7 pt-1 mb-5 text-base pl-16 relative">
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      className="mr-4 left-0 top-2 text-5xl text-mainColor absolute"
                    />
                    <span className=" font-normal opacity-50 pb-0 text-lg block text-amber-50">
                      MAIL ME
                    </span>
                    <a href="mailto:esra.tansuk@gmail.com">
                      esra.tansuk@gmail.com
                    </a>
                  </p>
                  <p className=" font-medium leading-7 pt-1 mb-5 text-base pl-16 relative">
                    <FontAwesomeIcon
                      icon={faSquarePhoneFlip}
                      className="mr-4 left-0 top-2 text-5xl text-mainColor absolute"
                    />
                    <span className=" font-normal opacity-50 pb-0 text-lg block text-amber-50">
                      CALL ME
                    </span>
                    <a href="tel:+905323456789">+90 532 345 67 89</a>
                  </p>

                  <ul className="flex flex-row gap-4 text-xl pt-4 -ml-1">
                    <li className=" inline-block ">
                      <a
                        href="https://www.facebook.com/"
                        className=" inline-block h-11 w-11 pt-2 text-center text-white text-2xl my-0  bg-iconBgColor rounded-full hover:bg-mainColor"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className=" inline-block ">
                      <a
                        href="https://www.twitter.com/"
                        className=" inline-block h-11 w-11 pt-2 text-center text-white text-2xl my-0  bg-iconBgColor rounded-full hover:bg-mainColor"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className=" inline-block ">
                      <a
                        href="https://www.instagram.com/"
                        className=" inline-block  h-11 w-11 pt-2 text-center text-white text-2xl my-0  bg-iconBgColor rounded-full hover:bg-mainColor"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className=" inline-block ">
                      <a
                        href="https://www.linkedin.com/"
                        className=" inline-block h-11 w-11 pt-2 text-center text-white text-2xl my-0  bg-iconBgColor rounded-full hover:bg-mainColor"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li className=" inline-block ">
                      <a
                        href="https://www.github.com/"
                        className=" inline-block  h-11 w-11 pt-2 text-center text-white text-2xl my-0  bg-iconBgColor rounded-full hover:bg-mainColor"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-3/5">
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 ">
                      <input
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full mb-4 py-3 px-6 border text-lg outline outline-2 outline-bodyDarkColor focus-visible:outline-mainColor bg-borderColor border-bodyDarkColor rounded-full"
                      />
                      <input
                        type="email"
                        placeholder="YOUR EMAIL"
                        className="w-full outline outline-2 outline-bodyDarkColor focus-visible:outline-mainColor mb-4 py-3 px-6 border text-lg bg-borderColor border-bodyDarkColor rounded-full"
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="YOUR SUBJECT"
                      className="mb-4 outline outline-2 outline-bodyDarkColor focus-visible:outline-mainColor py-3 px-6 border text-lg bg-borderColor border-bodyDarkColor rounded-full"
                    />
                    <textarea
                      name="message"
                      id="message"
                      placeholder="YOUR MESSAGE"
                      className="mb-4 outline outline-2 outline-bodyDarkColor focus-visible:outline-mainColor py-3 px-6 border text-lg bg-borderColor border-bodyDarkColor rounded-3xl h-52"
                    ></textarea>

                    <div className="mt-3">
                      <button className="border border-solid border-mainColor rounded-full text-lg font-semibold ps-[35px] pe-[85px] py-[16px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor transition duration-300 ease-in-out">
                        <span className="relative">SEND MESSAGE</span>
                        <span className="rounded-full bg-mainColor w-[56px] h-[56px] flex justify-center items-center -mt-10 ml-[165px] absolute">
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{ width: "46px", height: "28px" }}
                          />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab icon={faComments} title="BLOG">
          <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
            <div className="w-full lg:max-w-7xl">
              <Title titleOne="MY" titleTwo="BLOG" titleBackground="POSTS" />
              <div className="w-full mb-14">
                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-auto">
                  <BlogItem
                    src="/img/blog-post-1.webp"
                    alt="Blog Post 1"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
                  >
                    <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                      <article>
                        <Title
                          titleOne="POST"
                          titleTwo="DETAILS"
                          titleBackground="POSTS"
                          pySmall
                        />
                      </article>
                      <BlogDetail
                        src="/img/blog-post-1.webp"
                        alt="Blog Post 1"
                        author="John Doe"
                        date="May 10, 2021"
                        tags="wordpress, business, economy, design"
                        title="How to Own Your Audience by Creating an Email List"
                        text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                      />
                    </div>
                  </BlogItem>

                  <BlogItem
                    src="/img/blog-post-2.webp"
                    alt="Blog Post 2"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
                  >
                    <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                      <article>
                        <Title
                          titleOne="POST"
                          titleTwo="DETAILS"
                          titleBackground="POSTS"
                          pySmall
                        />
                      </article>
                      <BlogDetail
                        src="/img/blog-post-2.webp"
                        alt="Blog Post 2"
                        author="John Doe"
                        date="May 10, 2021"
                        tags="wordpress, business, economy, design"
                        title="How to Own Your Audience by Creating an Email List"
                        text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                      />
                    </div>
                  </BlogItem>

                  <BlogItem
                    src="/img/blog-post-3.webp"
                    alt="Blog Post 3"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
                  >
                    <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                      <article>
                        <Title
                          titleOne="POST"
                          titleTwo="DETAILS"
                          titleBackground="POSTS"
                          pySmall
                        />
                      </article>
                      <BlogDetail
                        src="/img/blog-post-3.webp"
                        alt="Blog Post 3"
                        author="John Doe"
                        date="May 10, 2021"
                        tags="wordpress, business, economy, design"
                        title="How to Own Your Audience by Creating an Email List"
                        text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                      />
                    </div>
                  </BlogItem>

                  <BlogItem
                    src="/img/blog-post-4.webp"
                    alt="Blog Post 4"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
                  >
                    <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                      <article>
                        <Title
                          titleOne="POST"
                          titleTwo="DETAILS"
                          titleBackground="POSTS"
                          pySmall
                        />
                      </article>
                      <BlogDetail
                        src="/img/blog-post-4.webp"
                        alt="Blog Post 4"
                        author="John Doe"
                        date="May 10, 2021"
                        tags="wordpress, business, economy, design"
                        title="How to Own Your Audience by Creating an Email List"
                        text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                      />
                    </div>
                  </BlogItem>

                  <BlogItem
                    src="/img/blog-post-5.webp"
                    alt="Blog Post 5"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
                  >
                    <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                      <article>
                        <Title
                          titleOne="POST"
                          titleTwo="DETAILS"
                          titleBackground="POSTS"
                          pySmall
                        />
                      </article>
                      <BlogDetail
                        src="/img/blog-post-5.webp"
                        alt="Blog Post 5"
                        author="John Doe"
                        date="May 10, 2021"
                        tags="wordpress, business, economy, design"
                        title="How to Own Your Audience by Creating an Email List"
                        text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                      />
                    </div>
                  </BlogItem>

                  <BlogItem
                    src="/img/blog-post-6.webp"
                    alt="Blog Post 6"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
                  >
                    <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                      <article>
                        <Title
                          titleOne="POST"
                          titleTwo="DETAILS"
                          titleBackground="POSTS"
                          pySmall
                        />
                      </article>
                      <BlogDetail
                        src="/img/blog-post-6.webp"
                        alt="Blog Post 6"
                        author="John Doe"
                        date="May 10, 2021"
                        tags="wordpress, business, economy, design"
                        title="How to Own Your Audience by Creating an Email List"
                        text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                      />
                    </div>
                  </BlogItem>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
