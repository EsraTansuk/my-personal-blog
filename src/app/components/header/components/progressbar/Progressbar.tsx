import { color } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { CircularProgressbarProps } from "react-circular-progressbar/dist/types";

interface ProgressbarProps extends CircularProgressbarProps {
  percentage: number;
  strokeWidth: number;
  trailColor: string;
  pathColor: string;
  textColor: string;
}

export const Progressbar: React.FC<ProgressbarProps> = ({
  percentage,
  strokeWidth,
  trailColor,
  textColor,
  text,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <CircularProgressbarWithChildren
        value={percentage}
        text={`${percentage}%`}
        styles={{
          root: {
            width: 140,
            height: 140,
            margin: "auto",
            position: "relative",
          },
          path: {
            stroke: `rgba(255, 180, 0)`,
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transform: "rotate(0 turn)",
            transformOrigin: "center center",
            strokeWidth: strokeWidth,
          },
          trail: {
            stroke: trailColor,
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
      >
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        {/* <div style={{ fontSize: 20, display:"block" }}>
          <h4>{`${percentage}%`}</h4>
        </div> */}
      </CircularProgressbarWithChildren>
      <div className="text-lg text-center mt-5">
        <h4>{text}</h4>
      </div>
    </>
  );
};
