import React from "react";
import Image from "next/image";

interface PortfolioItemProps  {
  src: string;
  alt: string;
  hoverTitle: any;
}

export const PortfolioItem: React.FC<PortfolioItemProps>  = ({src,alt,hoverTitle}) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-64 relative cursor-pointer flex">
        <Image
          src={src}
          alt={alt}
          width={895}
          height={552}
          className="absolute top-0 left-0 w-full h-full rounded-lg "
        />

        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transition-all duration-700 flex justify-center items-center text-lg rounded-lg bg-mainColor opacity-0 hover:opacity-100">
          <span className="transition-all duration-500 ease-in-out transform relative ">
            {hoverTitle}
          </span>
        </h3>
      </div>
    </div>
  );
};
