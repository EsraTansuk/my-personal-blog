'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  title: string;
  text: string;
  src: string;
  alt: string;
  slug: string;
}

export const BlogItem: React.FC<BlogItemProps> = ({
  title,
  text,
  src,
  alt,
  slug,
}) => {
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="overflow-hidden rounded-md hover:text-mainColor group transition-all duration-300">
        <div className="border-b-[5px] border-mainColor rounded-t-md">
          <div className="relative overflow-hidden block h-64">
            <Image
              src={src}
              alt={alt}
              width={895}
              height={552}
              className="absolute top-0 left-0 w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="bg-lGray dark:bg-borderColor text-textLight dark:text-tWhite pt-5 px-6 pb-6 rounded-b-md">
          <div className="box-border">
            <h3 className="text-textLight dark:text-tWhite hover:text-mainColor group-hover:text-mainColor text-xl md:text-2xl font-semibold transition-all duration-300 ease-in-out">
              {title}
            </h3>
          </div>
          <div>
            <p className="mt-4 mx-0 mb-1 text-sm md:text-base text-gray-600 dark:text-gray-300">
              {truncateText(text)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
