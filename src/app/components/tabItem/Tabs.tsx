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
      <ul className="text-3xl w-full text-white flex flex-row lg:flex-col lg:w-20  ">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      
    </>
  );
};
