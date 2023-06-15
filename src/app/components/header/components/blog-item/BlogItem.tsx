import React from "react";
import Image from "next/image";

interface BlogItemProps {
  title: string;
  text: string;
  src: string;
  alt: string;
}

export const BlogItem: React.FC<BlogItemProps>  = ({title,text,src,alt}) => {
  return (
    <div className="block cursor-pointer overflow-hidden rounded-md hover:text-mainColor">
      <div className=" border-b-[5px] border-mainColor rounded-t-md">
        <div className="relative overflow-hidden block h-64">
          <Image
            src={src}
            alt={alt}
            width={895}
            height={552}
            className="absolute top-0 left-0 w-full h-full rounded-lg hover:scale-110"
          />
        </div>
      </div>
      <div className=" bg-borderColor text-tWhite pt-5 px-6 pb-6 rounded-b-md">
        <div className=" box-border">
          <h3 className=" text-tWhite hover:text-mainColor text-2xl font-semibold transition-all duration-300 ease-in-out delay-0">
            {title}
          </h3>
        </div>
        <div>
          <p className=" mt-4 mx-0 mb-1 text-base">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
