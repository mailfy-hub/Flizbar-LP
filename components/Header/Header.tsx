"use client";
import { Locale } from "@/i18n.config";
import LocaleSwitch from "@/components/LocaleSwitch/LocaleSwitch";
import logo from "../../assets/logo.png";
import vector from "../../assets/Vector.png";
import Image from "next/image";
import OpenAccButton from "../OpenAccButton/OpenAccButton";
import { useState } from "react";
import { List, X } from "phosphor-react";

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
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="py-6 bg-transparent w-full">
      <nav className="container flex items-center justify-between w-full">
        <div className="flex items-center gap-x-[48px] justify-between">
          <div className="w-[125px] h-[32px]" style={{ backgroundImage: `url(${logo.src})` }}></div>

          <div className="hidden md:flex items-center gap-x-[24px] mt-2">
            <button onClick={() => handleContentIndex("init")}>{languages.beginning}</button>
            <button onClick={() => handleContentIndex("advantages")}>{languages.advantages}</button>
            <button onClick={() => handleContentIndex("know")}>{languages.getToKnow}</button>
            <button onClick={() => handleContentIndex("plans")}>{languages.plans}</button>
            <button onClick={() => handleContentIndex("contact")}>{languages.contact}</button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-[16px] -mb-2">
          <LocaleSwitch lang={lang} languages={btn} />
          <button className="flex gap-[8px] border w-[154px] h-[40px] items-center justify-center rounded font-semibold text-[16px]">
            {languages.client} <Image alt="user-img" src={vector.src} width={20} height={20} />
          </button>
          <OpenAccButton text={languages.buttonTxt} />
        </div>

        <div className="flex md:hidden">
          <button type="button" onClick={handleMenu} className="inline-flex intems-center justify-center p-2 rounded-md">
            <span className="sr-only">Open Menu</span>
            {open ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="md:hidden relative">
          <div className="flex flex-col items-center gap-2 bg-[#0C0B0A] ox-2 pt-2 pb-3 space-y-1 sm:px-3 absolute top-0 right-1 w-full">
            <button
              onClick={() => {
                handleContentIndex("init");
                handleMenu();
              }}
            >
              {languages.beginning}
            </button>
            <button
              onClick={() => {
                handleContentIndex("advantages");
                handleMenu();
              }}
            >
              {languages.advantages}
            </button>
            <button
              onClick={() => {
                handleContentIndex("know");
                handleMenu();
              }}
            >
              {languages.getToKnow}
            </button>
            <button
              onClick={() => {
                handleContentIndex("plans");
                handleMenu();
              }}
            >
              {languages.plans}
            </button>

            <button
              onClick={() => {
                handleContentIndex("contact");
                handleMenu();
              }}
            >
              {languages.contact}
            </button>

            <LocaleSwitch lang={lang} languages={btn} />
            <button className="flex gap-[8px] border w-[140px] h-[48px] items-center justify-center rounded font-semibold text-[16px]">
              {languages.client} <Image alt="user-img" src={vector.src} width={20} height={20} />
            </button>
            <div>
              <OpenAccButton text={languages.buttonTxt} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
