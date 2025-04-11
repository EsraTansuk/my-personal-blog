import React from "react";
import clsx from "clsx";

interface TitleProps {
  titleOne: string;
  titleTwo?: string;
  titleBackground: string;
  pySmall?: boolean;
  isLongText?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  titleOne,
  titleTwo,
  titleBackground,
  pySmall,
  isLongText = false,
}) => {
  return (
    <div
      className={clsx(
        "w-full text-center relative",
        {
          "py-20": !pySmall,
        },
        {
          "py-10": pySmall,
        }
      )}
    >
      <h1 className="font-black text-4xl md:text-6xl m-0 text-textLight dark:text-tWhite">
        {titleOne}{" "}
        {titleTwo && <span className="text-mainColor">{titleTwo}</span>}
      </h1>
      <span
        className={clsx(
          "absolute text-[56px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-normal md:tracking-wider text-center font-black text-titleLight dark:text-transparentGray top-[50%] -translate-x-[50%] -translate-y-[50%]",
          {
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl":
              isLongText,
          }
        )}
      >
        {titleBackground}
      </span>
    </div>
  );
};
