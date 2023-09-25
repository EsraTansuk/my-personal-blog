import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren } from "react";

interface TabProps extends PropsWithChildren<any> {
  icon: IconDefinition;
  title: string;
}

export const Tab: React.FC<TabProps> = ({ children, title, icon }) => {
  return <>{children}</>;
};
