"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

type SideBarItemProps = {
  title: string;
  icon: IconDefinition;
  index: number;
  url: string;
  isActive: boolean;
  setSelectedTab: (index: number) => void;
};

export const SideBarItem: React.FC<SideBarItemProps> = ({
  icon,
  setSelectedTab,
  index,
  url,
  title,
  isActive,
}) => {
  const { push } = useRouter();
  const [displayShowMore, setDisplayShowMore] = useState(false);

  const showMoreClass = classNames(
    "hidden lg:flex absolute top-0 -right-4 rounded-3xl -z-10 bg-mainColor pr-16 pl-7 h-14 flex items-center opacity-0 text-lg font-medium transition-transform",
    {
      "-translate-x-4 duration-300 opacity-100": displayShowMore,
    },
    {
      "translate-x-1 opacity-0": !displayShowMore,
    }
  );

  const itemClass = classNames(
    "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full cursor-pointer relative mx-1 sm:mx-2 lg:mx-3 flex items-center justify-center transition-colors duration-300",
    {
      "bg-mainColor text-tWhite": isActive,
      "bg-lGray dark:bg-iconBgColor dark:hover:bg-mainColor hover:bg-mainColor hover:text-tWhite": !isActive,
    }
  );

  return (
    <li
      className={itemClass}
      onMouseOver={() => setDisplayShowMore(true)}
      onMouseOut={() => setDisplayShowMore(false)}
      onClick={() => (url === "" ? setSelectedTab(index) : push(url))}
    >
      <button className="w-full h-full flex items-center justify-center">
        <FontAwesomeIcon 
          icon={icon} 
          className="fa-sm sm:fa-base lg:fa-lg"
        />
        <h2 className={`${showMoreClass} text-sm sm:text-base lg:text-lg`}>{title}</h2>
      </button>
    </li>
  );
};
