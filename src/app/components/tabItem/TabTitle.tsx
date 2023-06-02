import { IconDefinition, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classNames from "classnames";

type Props = {
  title: IconDefinition;
  index: number;
  setSelectedTab: (index: number) => void;
};

export const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  const [displayShowMore, setDisplayShowMore] = useState(false);
  
  const showMoreClass = classNames(
    "absolute top-0 -right-4 rounded-3xl -z-10 bg-mainColor pr-16 pl-7 h-14 flex items-center opacity-0 text-2xl transition-transform",
    {
      "-translate-x-4 duration-300 opacity-100": displayShowMore,
    },
    {
      "translate-x-1 opacity-0": !displayShowMore,
    }
  );

  return (
    <>
      <li
        className="w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative mx-3 lg:my-3 px-4 py-3 hover:bg-mainColor"
        onMouseOver={() => setDisplayShowMore(true)}
        onMouseOut={() => setDisplayShowMore(false)}
      >
        <button onClick={() => setSelectedTab(index)}>
          <FontAwesomeIcon icon={title} style={{ width: "24px" }} />
          <h2 className={showMoreClass}>
            Home
          </h2>
        </button>
      </li>
    </>
  );
};
