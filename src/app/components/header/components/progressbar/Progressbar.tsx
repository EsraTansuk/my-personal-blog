import { color } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { CircularProgressbarProps } from "react-circular-progressbar/dist/types";

interface ProgressbarProps extends Omit<CircularProgressbarProps, "className"> {
  percentage: number;
  strokeWidth: number;
  trailColor: string;
  pathColor: string;
  textColor: string;
  className?: string;
}

export const Progressbar: React.FC<ProgressbarProps> = ({
  percentage,
  strokeWidth,
  trailColor,
  text,
  textColor,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <CircularProgressbarWithChildren
        value={percentage}
        text={`${percentage}%`}
        className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] text-xs sm:text-sm md:text-base ${className}`}
        styles={{
          root: {
            margin: "auto",
            position: "relative",
          },
          path: {
            stroke: `#8062D6`,
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transform: "rotate(0 turn)",
            transformOrigin: "center center",
            strokeWidth: strokeWidth,
          },
          trail: {
            stroke: theme == "dark" ? trailColor : `#eee`,
            strokeLinecap: "round",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          text: {
            fill: theme == "dark" ? textColor : "#666",
            fontSize: "inherit",
            textAnchor: "middle",
            alignmentBaseline: "middle",
          },
        }}
      />
      <div className="text-center mt-3 sm:mt-4 md:mt-5">
        <h4 className="text-sm sm:text-base md:text-lg">{text}</h4>
      </div>
    </>
  );
};
