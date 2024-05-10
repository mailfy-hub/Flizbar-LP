"use client";
import { Locale } from "@/i18n.config";
import LocaleSwitch from "@/components/LocaleSwitch/LocaleSwitch";
import logo from "../../assets/logo.png";
import vector from "../../assets/Vector.png";
import Image from "next/image";

interface HeaderProps {
  lang: Locale;
  languages: any;
  btn: any;
  handleContentIndex: (index: string) => void;
}

export default function Header({
  lang,
  languages,
  btn,
  handleContentIndex,
}: {
  lang: Locale;
  languages: any;
  btn: any;
  handleContentIndex: (index: string) => void;
}) {
  return (
    <header className="py-6 bg-transparent">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-x-[48px]">
          <div className="w-[125px] h-[32px]" style={{ backgroundImage: `url(${logo.src})` }}></div>

          <div className="flex items-center gap-x-[24px] mt-2">
            <button onClick={() => handleContentIndex("initial")}>{languages.beginning}</button>
            <button onClick={() => handleContentIndex("advantages")}>{languages.advantages}</button>
            <button onClick={() => handleContentIndex("know")}>{languages.getToKnow}</button>
            <button onClick={() => handleContentIndex("plans")}>{languages.plans}</button>
          </div>
        </div>

        <div className="flex items-center gap-[16px] -mb-2">
          <LocaleSwitch lang={lang} languages={btn} />
          <button className="flex gap-[8px] border w-[154px] h-[40px] items-center justify-center rounded font-semibold text-[16px]">
            {languages.client} <Image alt="user-img" src={vector.src} width={20} height={20} />
          </button>

          <button className="flex items-center gap-2 bg-[#A06A08] h-[40px] text-white py-2 px-4 rounded font-bold text-[16px]">
            {languages.buttonTxt}
            <svg className="fill-current h-6 w-6 transform -rotate-90 stroke-1" viewBox="0 0 20 20">
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
