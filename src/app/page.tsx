import Head from "next/head";
import "../../styles/global.css";
import { HomePage } from "./components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esra Tansuk | Personal Portfolio",
};

export default function Home() {
  return <HomePage />;
}
