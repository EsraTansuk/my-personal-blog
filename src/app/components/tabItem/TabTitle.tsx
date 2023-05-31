import { IconDefinition, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  title: IconDefinition;
  index: number;
  setSelectedTab: (index: number) => void;
};

export const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  return (
    <>
      <li className=" w-14 h-14 rounded-full bg-iconBgColor cursor-pointer relative mx-3 lg:my-3 px-4 py-3 hover:bg-mainColor focus-within:bg-mainColor">
        <button onClick={() => setSelectedTab(index)}>
          <FontAwesomeIcon icon={title} style={{ width: "24px" }} />
        </button>
      </li>

      
      
    </>
  );
};
