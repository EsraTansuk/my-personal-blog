import "../../styles/global.css";
import { HomeSection } from "./components/header/components/tab-section";
import { Metadata } from "next";
import { SideBar } from "./components/sideBar";

export const metadata: Metadata = {
  title: "Esra Tansuk | Personal Portfolio",
};

export default function Home() {
  return (
    <>
      <div className="text-3xl text-white w-full">
        <div className=" text-white w-full flex h-screen">
          <SideBar />
          <HomeSection />
        </div>
      </div>
    </>
  );
}
