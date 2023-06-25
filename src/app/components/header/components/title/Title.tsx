import React from "react";
import clsx from 'clsx';

interface TitleProps {
  titleOne: string;
  titleTwo: string;
  titleBackground: string;
  pySmall?: boolean;
}

export const Title: React.FC<TitleProps> = ({ titleOne, titleTwo, titleBackground, pySmall}) => {
  return (
    <div className={clsx('w-full text-center relative', 
    {
      'py-20': !pySmall
    },
    {
      'py-10': pySmall
    }

    )}>
      <h1 className="font-black text-6xl m-0 text-tWhite">
        {titleOne} <span className=" text-mainColor">{titleTwo}</span>
      </h1>
      <span className="absolute text-9xl tracking-wider text-center font-black text-transparentGray top-[50%] -translate-x-[50%] -translate-y-[50%] ">
        {titleBackground}
      </span>
    </div>
  );
};
