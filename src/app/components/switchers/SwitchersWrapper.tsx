"use client";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import LanguageSwitcher from "../../LanguageSwitcher";

export const SwitchersWrapper = () => {
  return (
    <div className="fixed top-5 sm:top-7 lg:top-8 right-2 sm:right-3 z-[999] flex items-center lg:flex-col">
      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-lGray dark:bg-iconBgColor hover:bg-mainColor hover:text-tWhite transition-colors duration-300 text-textLight dark:text-tWhite rounded-full flex items-center justify-center">
        <LanguageSwitcher />
      </div>
      <div className="ml-2 sm:ml-3 lg:ml-0 lg:mt-3 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-lGray dark:bg-iconBgColor hover:bg-mainColor hover:text-tWhite transition-colors duration-300 rounded-full flex items-center justify-center">
        <ThemeSwitcher />
      </div>
    </div>
  );
}; 