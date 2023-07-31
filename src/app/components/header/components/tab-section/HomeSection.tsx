/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useModal } from "../customModal/useModal";
import { CustomModal } from "../customModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { AboutSection } from "./AboutSection";

export const HomeSection = () => {
  const aboutPageModalStyle = {
    ...CustomModal,
    backgroundColor: "#111",
    overlay: {
      backgroundColor: "#efef",
    },
  };
  const { isOpen, closeModal, openModal, toggleModal } = useModal();
  return (
    <>
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
              I'm Esra Tansuk. <br />
              <span className="dark:text-white text-textLight my-4">
                Frontend Developer
              </span>
            </h1>
            <p className=" mt-4 mb-7 leading-8 text-lg dark:text-white text-textLight">
              Hello, I'm Esra, a frontend developer with a year's
              experience in web development. I have strong skills in HTML, CSS,
              JavaScript, along with expertise in responsive design frameworks
              like Bootstrap and Tailwind. I have hands-on experience in React
              and Next.js for building dynamic web apps, and use TypeScript for
              improved code reliability. Passionate and self-driven, I always
              strive to stay updated with the latest trends in my field.
            </p>
            <button
              className="border border-solid border-mainColor rounded-full text-lg font-semibold ps-[35px] pe-[70px] py-[16px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor transition duration-300 ease-in-out"
              onClick={() => openModal()}
            >
              <span className="relative dark:text-white text-textLight">
                MORE ABOUT ME
              </span>
              <span className="rounded-full bg-mainColor w-[56px] h-[56px] flex justify-center items-center -mt-10 ml-[163px] absolute">
                <FontAwesomeIcon
                  icon={faRightLong}
                  style={{ width: "50px", height: "30px" }}
                />
              </span>
            </button>
            <CustomModal
              isOpen={isOpen}
              onClose={closeModal}
              className="about-page-modal force-overflow large-2 "
            >
              <div style={aboutPageModalStyle}>
                <button
                  className=" flex z-50 ml-[1340px] mb-2 mt-4"
                  onClick={closeModal}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{ color: "#fff" }}
                    size="2xl"
                  />
                </button>
                <AboutSection />
              </div>
            </CustomModal>
          </div>
        </div>
      </div>
    </>
  );
};
