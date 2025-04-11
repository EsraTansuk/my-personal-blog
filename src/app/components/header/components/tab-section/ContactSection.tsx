'use client';

/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Title } from "../title";
import Link from "next/link";
import { translator } from "@/utils/translator";

export const ContactSection = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title titleOne={translator("CONTACT.GET.IN")} titleTwo={translator("CONTACT.TOUCH")} titleBackground={translator("CONTACT.CONTACT")} />
        <div className="flex flex-col lg:flex-row xl:justify-between items-center mt-7 mb-20">
          <div className="w-full px-4 xl:px-0 lg:w-2/6 pr-5 text-textLight dark:text-tWhite">
            <h3 className="text-2xl md:text-3xl pb-4 font-medium">
              {translator("CONTACT.DONT.BE.SHY")}
            </h3>
            <p className="mb-6 text-sm md:text-base">
              {translator("CONTACT.INTRODUCING")}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl md:text-5xl text-mainColor">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="flex flex-col">
                  <span className="font-normal opacity-50 text-base md:text-lg text-textLight dark:text-amber-50">
                    {translator("CONTACT.ADDRESS.POINT")}
                  </span>
                  <span className="font-medium text-sm md:text-base">
                    Yenimahalle/ Ankara
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl md:text-4xl text-mainColor">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </div>
                <div className="flex flex-col">
                  <span className="font-normal opacity-50 text-base md:text-lg text-textLight dark:text-amber-50">
                    {translator("CONTACT.MAIL.ME")}
                  </span>
                  <a
                    href="mailto:esra.tansuk@gmail.com"
                    className="font-medium text-sm md:text-base"
                  >
                    esra.tansuk@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <ul className="flex flex-row gap-4 text-xl pt-8 -ml-1">
              <li className=" inline-block ">
                <Link
                  href="https://www.facebook.com/esra.blks/"
                  target="_blank"
                  className=" inline-block h-11 w-11 pt-2 text-center text-textLight hover:text-white dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://twitter.com/EsraTansuk"
                  target="_blank"
                  className=" inline-block h-11 w-11 pt-2 text-center text-textLight hover:text-white dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://www.instagram.com/esra.she/"
                  target="_blank"
                  className=" inline-block  h-11 w-11 pt-2 text-center text-textLight hover:text-white dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://www.linkedin.com/in/esra-tansuk-9313a6211/"
                  target="_blank"
                  className=" inline-block h-11 w-11 pt-2 text-center  text-textLight hover:text-white dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://github.com/EsraTansuk"
                  target="_blank"
                  className=" inline-block  h-11 w-11 pt-2 text-center  text-textLight hover:text-white dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 py-8 lg:py-0 lg:w-3/5">
            <form className="flex flex-col gap-0 md:gap-4">
              <div className="flex flex-row gap-4 ">
                <input
                  type="text"
                  placeholder={translator("CONTACT.YOUR.NAME")}
                  className="w-full mb-4 md:py-3 text-bodyDarkColor px-6 border text-sm md:text-lg dark:outline-bodyDarkColor focus-visible:outline-mainColor dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-full border-gray-300"
                />
                <input
                  type="email"
                  placeholder={translator("CONTACT.YOUR.EMAIL")}
                  className="w-full text-bodyDarkColor md:py-3 dark:outline-bodyDarkColor focus-visible:outline-mainColor mb-4 py-2 px-6 border text-sm md:text-lg dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-full border-gray-300"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder={translator("CONTACT.YOUR.SUBJECT")}
                className="w-full text-bodyDarkColor dark:outline-bodyDarkColor focus-visible:outline-mainColor mb-4 py-2 px-6 border text-sm md:text-lg dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-full border-gray-300"
              />
              <textarea
                name="message"
                id="message"
                placeholder={translator("CONTACT.YOUR.MESSAGE")}
                className="mb-4  text-bodyDarkColor dark:outline-bodyDarkColor focus-visible:outline-mainColor py-3 px-6 border text-sm md:text-lg dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-3xl h-36 md:h-52 border-gray-300"
              ></textarea>

              <div className="mt-3">
                <button className="border border-solid text-tWhite border-mainColor rounded-full text-sm md:text-lg font-semibold ps-[35px] pe-[70px] py-[10px] md:py-[14px] relative -mt-1 -mr-1 inline-block leading-6 hover:bg-mainColor transition duration-300 ease-in-out">
                <span className="relative dark:text-tWhite text-textLight group-hover:text-tWhite">
                    {translator("CONTACT.SEND.MESSAGE")}
                  </span>
                  <span className="rounded-full bg-mainColor w-11 h-11 md:w-[56px] md:h-[56px] flex justify-center items-center -mt-[34px] md:-mt-[42px] ml-[141px] md:ml-[162px] absolute right-0">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="transition-transform duration-300 ease-in-out hover:scale-110 w-[35px] h-[22px] md:w-[50px] md:h-[30px]"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
