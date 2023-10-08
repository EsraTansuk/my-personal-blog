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
        className={className}
        styles={{
          root: {
            width: 140,
            height: 140,
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
            fontSize: "16px",
            textAnchor: "middle",
            alignmentBaseline: "middle",
          },
        }}
      />
      <div className="text-lg text-center mt-5">
        <h4>{text}</h4>
      </div>
    </>
  );
};
