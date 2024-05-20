"use client";
import { Locale } from "@/i18n.config";
import bg from "../../assets/background_hero.png";
import Header from "@/components/Header/Header";
import MainContentRouter from "@/components/MainContentRouter/MainContentRouter";
import { useDictionary } from "./dictionary-provider";
import { useEffect, useState } from "react";

export default function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = useDictionary();
  const [contentIndex, setContentIndex] = useState("init");

  const handleContentIndex = (content: string) => {
    setContentIndex(content);
    localStorage.setItem("contentIndex", content);
  };

  const savedContent = localStorage.getItem("contentIndex");
  useEffect(() => {
    if (savedContent) {
      setContentIndex(savedContent);
    }
  }, [savedContent]);

  return (
    <>
      <div className="px-[20px] md:px-[60px] 2xl:px-[112px] py-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <Header lang={lang} languages={dictionary.header} btn={dictionary.languages} handleContentIndex={handleContentIndex} />
        <MainContentRouter languages={dictionary} contentIndex={contentIndex} />
      </div>
    </>
  );
}
