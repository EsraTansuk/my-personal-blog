import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface BlogDetailProps {
  author: string;
  date: string;
  tags: string;
  title: string;
  children: React.ReactNode;
  src: string;
  alt: string;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({
  author,
  date,
  tags,
  title,
  children,
  src,
  alt,
}) => {
  return (
    <article className="transition-colors duration-300">
      <div className="my-7 flex flex-wrap gap-4">
        <span className="text-base font-semibold flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-mainColor hover:text-mainColor/80 transition-colors" />
          <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm hover:text-mainColor transition-colors">{author}</span>
        </span>
        <span className="text-base font-semibold flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-mainColor hover:text-mainColor/80 transition-colors" />
          <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm hover:text-mainColor transition-colors">{date}</span>
        </span>
        <span className="text-base font-semibold flex items-center">
          <FontAwesomeIcon icon={faTags} className="text-mainColor hover:text-mainColor/80 transition-colors" />
          <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm hover:text-mainColor transition-colors">{tags}</span>
        </span>
      </div>
      <h1 className="text-[2.5rem] text-gray-800 dark:text-gray-100 font-semibold leading-normal mb-6 transition-colors">
        {title}
      </h1>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
};
