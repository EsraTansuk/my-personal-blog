'use client'

import React from "react";
import { PortfolioItem } from "../portfolio-item";
import { Title } from "../title";
import { useAppSelector } from "@/hooks";
import { translator } from "@/utils/translator";
import { getLanguageState } from "@/app/app/appSelector";

export const PortfolioSection = () => {

  const currentLanguage = useAppSelector(getLanguageState());


  return (
    <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title
          titleOne={translator("PORTFOLIO.MY.PORTFOLIO")}
          titleTwo={
            currentLanguage?.name === "en-US"
              ? translator("PORTFOLIO.PORTFOLIO")
              : undefined
          }
          titleBackground={translator("PORTFOLIO.WORKS")}
          isLongText={currentLanguage?.name === "tr-TR"}
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
  );
};
