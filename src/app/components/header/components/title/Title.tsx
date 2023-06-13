import React from "react";

interface TitleProps {
  titleOne: string;
  titleTwo: string;
  titleBackground: string;
}

export const Title: React.FC<TitleProps> = ({ titleOne, titleTwo, titleBackground }) => {
  return (
    <div className="w-full text-center relative py-20 ">
      <h1 className="font-black text-6xl m-0">
        {titleOne} <span className=" text-mainColor">{titleTwo}</span>
      </h1>
      <span className="absolute text-9xl tracking-wider text-center font-black text-transparentGray top-[50%] -translate-x-[50%] -translate-y-[50%] ">
        {titleBackground}
      </span>
    </div>
  );
};
