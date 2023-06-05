'use client'
import React, { ReactElement, useState } from "react";
import { TabTitle } from "./TabTitle";

type Props = {
  children: ReactElement[];
};

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
    {children[selectedTab]}
      <ul className="text-3xl w-full text-white flex flex-row lg:flex-col lg:w-20 lg:justify-center px-3 lg:px-0 lg:mx-6 bottom-0 bg-greyBg lg:bg-transparent justify-around lg:h-full fixed right-0 z-10">
        {children.map((item, index) => (
          <TabTitle
            title={item.props.title}
            key={index}
            icon={item.props.icon}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      
    </>
  );
};
