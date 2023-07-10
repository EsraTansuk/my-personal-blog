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
  text: string;
  src: string;
  alt: string;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({
  author,
  date,
  tags,
  title,
  text,
  src,
  alt,
}) => {
  return (
    <article>
      <div className="my-7">
        <span className="text-base font-semibold">
          <FontAwesomeIcon icon={faUser} className=" text-mainColor" />
          <span className="ml-2 text-lGray text-sm">{author}</span>
        </span>
        <span className="text-base font-semibold ml-4">
          <FontAwesomeIcon icon={faCalendarAlt} className=" text-mainColor" />
          <span className="ml-2 text-lGray text-sm">{date}</span>
        </span>
        <span className="text-base font-semibold ml-4">
          <FontAwesomeIcon icon={faTags} className=" text-mainColor" />
          <span className="ml-2 text-lGray text-sm">{tags}</span>
        </span>
      </div>
      <h1 className="text-[2.5rem] text-lGray font-semibold leading-normal mb-6">
        {title}
      </h1>
      <Image src={src} alt={alt} width={895} height={552}/>
      <p className="my-5 text-lg text-lGray">{text}</p>
    </article>
  );
};
