"use client";
import Header from "@/components/Header/Header";
import CardAbout from "@/components/LandingPageCards/About/AboutCard";
import BegginPresentationCard from "@/components/LandingPageCards/BegginPresentationCard/BegginPresentationCard";
import ContactCard from "@/components/LandingPageCards/ContactCard/ContactCard";
import KnowCard from "@/components/LandingPageCards/KnowCard/KnowCard";
import MuchMoreThanNumbers from "@/components/LandingPageCards/MuchMoreThanNumbers/MuchMoreThanNumbers";
import { Locale } from "@/i18n.config";
import { TickerTape } from "react-ts-tradingview-widgets";
import bg from "../../assets/background_hero.png";
import { useDictionary } from "./dictionary-provider";
import AboutCard from "@/components/LandingPageCards/About/AboutCard";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = useDictionary();

  return (
    <>
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

      <div className="flex flex-col mt-[124px] py-[72px] bg-[#1E1C1B] ">
        <div id="about">
          <div className="w-full max-w-[1216px] mx-auto">
            <AboutCard languages={dictionary} />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col mt-[124px] py-[72px] bg-[#1E1C1B] ">
        <div id="know">
          <div className="w-full max-w-[1216px] mx-auto">
            <KnowCard languages={dictionary} />
          </div>
        </div>
      </div> */}

      <div className="flex flex-col mt-[124px] py-[72px] bg-[#1E1C1B] ">
        <div id="contact">
          <div className="w-full max-w-[1200px] mx-auto">
            <ContactCard languages={dictionary} />
          </div>
        </div>
      </div>
    </>
  );
}
