"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useModal } from "../customModal/useModal";
import { CustomModal } from "../customModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { AboutSection } from "./AboutSection";
import { translator } from "@/utils/translator";

export const HomeSection = () => {
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <>
      <div className="color-block d-none d-lg-block bg-mainColor hidden lg:block"></div>
      <div className="z-10 px-10 py-10 align-middle w-full">
        <div className="flex flex-col pb-10 lg:flex-row w-full items-center">
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
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl relative mt-6 uppercase text-mainColor font-bold">
              I'm Esra Tansuk. <br />
              <span className="dark:text-white text-textLight my-4">
                Frontend Developer
              </span>
            </h1>
            <p className=" mt-4 mb-7 leading-7 md:leading-8 text-base md:text-lg dark:text-white text-textLight">
              {translator("HOME.INTRODUCING")}
            </p>

            <div className="group">
              <button
                className="border border-solid text-tWhite border-mainColor rounded-full text-sm md:text-lg font-semibold ps-[35px] pe-[70px] py-[10px] md:py-[14px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor transition duration-300 ease-in-out"
                onClick={() => openModal()}
              >
                <span className="relative dark:text-tWhite text-textLight group-hover:text-tWhite">
                  {translator("HOME.MORE.ABOUT.ME")}
                </span>
                <span className="rounded-full bg-mainColor w-11 h-11 md:w-[56px] md:h-[56px] flex justify-center items-center -mt-[34px] md:-mt-[42px] ml-[141px] md:ml-[162px] absolute right-0">
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 w-[35px] h-[22px] md:w-[50px] md:h-[30px]"
                  />
                </span>
              </button>
            </div>

            <CustomModal
              isOpen={isOpen}
              onClose={closeModal}
              className="about-page-modal mx-2 force-overflow large-2"
            >
              <div>
                <button
                  className=" flex z-10 ml-5 mb-2 mt-4"
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
