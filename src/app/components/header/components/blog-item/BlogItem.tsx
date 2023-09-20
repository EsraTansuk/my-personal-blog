import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { CustomModal } from "../customModal";
import { useModal } from "../customModal/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

interface BlogItemProps extends PropsWithChildren<any> {
  title: string;
  text: string;
  src: string;
  alt: string;
}

export const BlogItem: React.FC<BlogItemProps> = ({
  title,
  text,
  src,
  alt,
  children,
}) => {
  const { isOpen, closeModal, openModal, toggleModal } = useModal();

  return (
    <>
      <div
        className="block cursor-pointer overflow-hidden rounded-md hover:text-mainColor group"
        onClick={() => openModal()}
      >
        <div className=" border-b-[5px] border-mainColor rounded-t-md">
          <div className="relative overflow-hidden block h-64">
            <Image
              src={src}
              alt={alt}
              width={895}
              height={552}
              className="absolute top-0 left-0 w-full h-full  group-hover:scale-110"
            />
          </div>
        </div>
        <div className=" bg-lGray dark:bg-borderColor text-textLight dark:text-tWhite pt-5 px-6 pb-6 rounded-b-md">
          <div className=" box-border">
            <h3 className=" text-textLight dark:text-tWhite hover:text-mainColor  group-hover:text-mainColor text-2xl font-semibold transition-all duration-300 ease-in-out delay-0">
              {title}
            </h3>
          </div>
          <div>
            <p className=" mt-4 mx-0 mb-1 text-base">{text}</p>
          </div>
        </div>
      </div>

      <CustomModal isOpen={isOpen} onClose={closeModal}>
        <button className=" flex z-50 ml-[730px] mb-2" onClick={closeModal}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ color: "#fff" }}
            size="2xl"
          />
        </button>
        {children}
      </CustomModal>
    </>
  );
};
