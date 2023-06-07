import React from "react";
import { CircularProgressbar} from "react-circular-progressbar";
import { CircularProgressbarProps } from "react-circular-progressbar/dist/types";

interface ProgressbarProps extends CircularProgressbarProps {
  percentage: number; 
  strokeWidth: number;
  trailColor: string;
  pathColor: string;
  textColor: string;
}

export const Progressbar: React.FC<ProgressbarProps> = ({ percentage, strokeWidth, trailColor, pathColor, textColor }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={{
        path: {
          stroke: `rgba(255, 180, 0)`,
          strokeLinecap: 'round',
          transform: 'rotate(0.0turn)',
          transformOrigin: 'center center',
        },
        trail: {
          stroke: '#252525',
          strokeLinecap: 'butt',
          transform: 'rotate(0.0turn)',
          transformOrigin: 'center center',
        },
        text: {
          fill: '#fff',
          fontSize: '12px',
        },
        background: {
          fill: '#3e98c7',
        },
      }}
    />
  );
};
