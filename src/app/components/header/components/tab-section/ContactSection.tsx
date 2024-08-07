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

export const ContactSection = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title titleOne="GET IN" titleTwo="TOUCH" titleBackground="CONTACT" />
        <div className="flex flex-col lg:flex-row xl:justify-between items-center mt-7 mb-20">
          <div className="w-full px-4 xl:px-0 lg:w-2/6 pr-5 text-textLight dark:text-tWhite">
            <h3 className="text-2xl md:text-3xl pb-4 font-medium">
              DON'T BE SHY!
            </h3>
            <p className=" mb-6 text-sm md:text-base">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <p className=" font-medium leading-7 pt-1 mb-5 text-sm md:text-base pl-16 relative">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-4 left-0 top-2 text-4xl md:text-5xl text-mainColor absolute pl-2"
              />
              <span className=" font-normal opacity-50 pb-0 text-base md:text-lg block text-textLight dark:text-amber-50">
                ADDRESS POINT
              </span>
              Yenimahalle/ Ankara
            </p>
            <p className=" font-medium leading-7 pt-1 mb-5 text-sm md:text-base pl-16 relative">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="mr-4 left-0 top-2 text-4xl md:text- text-mainColor absolute"
              />
              <span className=" font-normal opacity-50 pb-0 text-base md:text-lg block text-textLight dark:text-amber-50">
                MAIL ME
              </span>
              <a href="mailto:esra.tansuk@gmail.com">esra.tansuk@gmail.com</a>
            </p>
            
            <ul className="flex flex-row gap-4 text-xl pt-4 -ml-1">
              <li className=" inline-block ">
                <Link
                  href="https://www.facebook.com/esra.blks/"
                  target="_blank"
                  className=" inline-block h-11 w-11 pt-2 text-center text-textLight dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://twitter.com/EsraTansuk"
                  target="_blank"
                  className=" inline-block h-11 w-11 pt-2 text-center text-textLight dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://www.instagram.com/esra.she/"
                  target="_blank"
                  className=" inline-block  h-11 w-11 pt-2 text-center text-textLight dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://www.linkedin.com/in/esra-tansuk-9313a6211/"
                  target="_blank"
                  className=" inline-block h-11 w-11 pt-2 text-center  text-textLight dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li className=" inline-block ">
                <Link
                  href="https://github.com/EsraTansuk"
                  target="_blank"
                  className=" inline-block  h-11 w-11 pt-2 text-center  text-textLight dark:text-white text-2xl my-0 bg-lGray  dark:bg-iconBgColor rounded-full hover:bg-mainColor"
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
                  placeholder="YOUR NAME"
                  className="w-full mb-4 py-3 text-bodyDarkColor px-6 border text-sm md:text-lg outline outline-2 dark:outline-bodyDarkColor focus-visible:outline-mainColor dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-full"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full outline outline-2 text-bodyDarkColor dark:outline-bodyDarkColor focus-visible:outline-mainColor mb-4 py-2 px-6 border text-sm md:text-lg dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-full"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                className="mb-4 outline outline-2 text-bodyDarkColor dark:outline-bodyDarkColor  focus-visible:outline-mainColor py-3 px-6 border text-sm md:text-lg dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-full"
              />
              <textarea
                name="message"
                id="message"
                placeholder="YOUR MESSAGE"
                className="mb-4 outline outline-2 text-bodyDarkColor dark:outline-bodyDarkColor focus-visible:outline-mainColor py-3 px-6 border text-sm md:text-lg dark:bg-borderColor dark:border-bodyDarkColor dark:text-white rounded-3xl h-36 md:h-52"
              ></textarea>

              <div className="mt-3 group">
                <button className="border border-solid border-mainColor rounded-full text-sm md:text-lg font-semibold ps-[35px] pe-[74px] md:pe-[85px] py-[10px] md:py-[14px] relative -mt-1 -mr-1 inline-block leading-6 hover:text-tWhite hover:bg-mainColor transition duration-300 ease-in-out">
                  <span className="relative text-textLight dark:text-tWhite group-hover:text-tWhite">
                    SEND MESSAGE
                  </span>
                  <span className="rounded-full text-tWhite bg-mainColor w-11 h-11 md:w-[56px] md:h-[56px] flex justify-center items-center -mt-[34px] md:-mt-[42px] ml-[135px] md:ml-[164px] absolute">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      style={{ width: "46px", height: "28px" }}
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
