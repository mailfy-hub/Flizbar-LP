"use client";
import Header from "@/components/Header/Header";
import AboutCard from "@/components/LandingPageCards/About/AboutCard";
import BegginPresentationCard from "@/components/LandingPageCards/BegginPresentationCard/BegginPresentationCard";
import ContactCard from "@/components/LandingPageCards/ContactCard/ContactCard";
import Footer from "@/components/LandingPageCards/Footer/Footer";
import Journey from "@/components/LandingPageCards/Journey/Journey";
import MuchMoreThanNumbers from "@/components/LandingPageCards/MuchMoreThanNumbers/MuchMoreThanNumbers";
import ServicesCard from "@/components/LandingPageCards/ServicesCard/ServicesCard";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import { TickerTape } from "react-ts-tradingview-widgets";
import bg from "../../assets/background_hero.png";
import whatsapp from "../../assets/whatsapp.svg";
import { useDictionary } from "./dictionary-provider";
export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = useDictionary();

  return (
    <>
      <a
        className="fixed bottom-4 right-4 cursor-pointer hover:opacity-85 transition-all w-12"
        href="#"
      >
        <Image src={whatsapp} alt="contato whatsapp" />
      </a>

      <div
        id="beginning"
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full max-w-[1216px] mx-auto">
          <Header
            lang={lang}
            languages={dictionary.header}
            btn={dictionary.languages}
          />
          <BegginPresentationCard languages={dictionary} />
        </div>
        <TickerTape isTransparent colorTheme="dark"></TickerTape>
      </div>

      <div className="flex flex-col px-[20px] md:px-[60px] 2xl:px-[112px] mt-[124px]">
        <div id="moreThanNumbers">
          <div className="w-full max-w-[1216px] mx-auto">
            <MuchMoreThanNumbers languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[124px] py-[72px] bg-[#1E1C1B]">
        <div id="about">
          <div className="w-full max-w-[1216px] mx-auto">
            <AboutCard languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[124px] py-[72px] bg-black">
        <div id="journey">
          <div className="w-full max-w-[1216px] mx-auto">
            <Journey languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[124px] py-[20px] bg-black">
        <div id="services">
          <div className="w-full max-w-[1200px] mx-auto">
            <ServicesCard languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[124px]  bg-black">
        <div id="contact">
          <div className="w-full max-w-[1200px] mx-auto">
            <ContactCard languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[124px] py-[20px] bg-black">
        <div id="footer">
          <div className="w-full max-w-[1200px] mx-auto">
            <Footer languages={dictionary} />
          </div>
        </div>
      </div>
    </>
  );
}
