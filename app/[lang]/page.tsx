"use client";
import { Locale } from "@/i18n.config";
import bg from "../../assets/background_hero.png";
import Header from "@/components/Header/Header";
import { useDictionary } from "./dictionary-provider";
import BegginPresentationCard from "@/components/LandingPageCards/BegginPresentationCard/BegginPresentationCard";
import AdvantagesCard from "@/components/LandingPageCards/AdvantagesCard/AdvantagesCard";
import KnowCard from "@/components/LandingPageCards/KnowCard/KnowCard";
import PlansCard from "@/components/LandingPageCards/PlansCard/PlansCard";
import ContactCard from "@/components/LandingPageCards/ContactCard/ContactCard";

export default function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = useDictionary();

  return (
    <>
      <div
        id="beginning"
        className="px-[0px] md:px-[60px] 2xl:px-[112px] py-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Header lang={lang} languages={dictionary.header} btn={dictionary.languages} />
        <BegginPresentationCard languages={dictionary} />
      </div>

      <div className="flex flex-col px-[20px] md:px-[60px] 2xl:px-[112px] py-0">
        <div id="advantages">
          <AdvantagesCard languages={dictionary} />
        </div>
      </div>

      <div className="flex flex-col py-0">
        <div id="know">
          <KnowCard languages={dictionary} />
        </div>
      </div>

      <div className="flex flex-col px-[20px] md:px-[60px] 2xl:px-[112px] py-0">
        <div id="plans">
          <PlansCard languages={dictionary} />
        </div>
        <div id="contact">
          <ContactCard languages={dictionary} />
        </div>
      </div>
    </>
  );
}
