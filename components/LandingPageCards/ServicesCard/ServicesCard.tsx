import React, { useState } from "react";
import SelectCard from "../About/SelectCard";
import Image from "next/image";
import OpenAccButton from "@/components/OpenAccButton/OpenAccButton";
import img from "../../../assets/frame373.png";
import { Inter } from "next/font/google";
import treasury from "../../../assets/treasury.png";
import commodities from "../../../assets/commodities.png";
import acoes from "../../../assets/acoes.png";
import opcoes from "../../../assets/opcoes.png";
import indices from "../../../assets/indicies.png";
import etf from "../../../assets/etf.png";
import cfd from "../../../assets/cfd.png";
import mercadoFuturo from "../../../assets/mercado-do-futuro.png";

const inter = Inter({ subsets: ["latin"] });

export default function ServicesCard({
  lang,
  languages,
}: {
  lang: string;
  languages: any;
}) {
  const services = languages.page.default.services;
  const [selectedCard, setSelectedCard] = useState<
    | "first-card"
    | "second-card"
    | "third-card"
    | "fourth-card"
    | "fifth-card"
    | "sixth-card"
    | "seventh-card"
    | "eighth-card"
  >("first-card");

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-[#C89305] font-semibold text-[14px] uppercase">
          {services.title}
        </p>
        <p className="text-white font-semibold text-3xl mt-12 mb-12">
          {services.subtitle}
        </p>
      </div>
      <div className="flex w-full h-[100px] md:mb-4 overflow-x-auto">
        <SelectCard
          title={services.menu.first.title}
          selected={selectedCard === "first-card"}
          onClick={() => setSelectedCard("first-card")}
        />
        <SelectCard
          title={services.menu.second.title}
          selected={selectedCard === "second-card"}
          onClick={() => setSelectedCard("second-card")}
        />
        <SelectCard
          title={services.menu.third.title}
          selected={selectedCard === "third-card"}
          onClick={() => setSelectedCard("third-card")}
        />
        <SelectCard
          title={services.menu.fourth.title}
          selected={selectedCard === "fourth-card"}
          onClick={() => setSelectedCard("fourth-card")}
        />
        <SelectCard
          title={services.menu.fifth.title}
          selected={selectedCard === "fifth-card"}
          onClick={() => setSelectedCard("fifth-card")}
        />
        <SelectCard
          title={services.menu.sixth.title}
          selected={selectedCard === "sixth-card"}
          onClick={() => setSelectedCard("sixth-card")}
        />
        <SelectCard
          title={services.menu.seventh.title}
          selected={selectedCard === "seventh-card"}
          onClick={() => setSelectedCard("seventh-card")}
        />
        <SelectCard
          title={services.menu.eighth.title}
          selected={selectedCard === "eighth-card"}
          onClick={() => setSelectedCard("eighth-card")}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full lg:justify-between 2xl:mt-[100px]">
        <div className="flex flex-col 2xl:justify-between">
          {selectedCard === "first-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="md:mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.first.title}
                </p>
                <p
                  className={`md:max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.first.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image className="mt-8 md:mt-0" src={treasury} alt="Treasury" />
            </div>
          )}

          {selectedCard === "second-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.second.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.second.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image
                className="mt-8 md:mt-0"
                src={commodities}
                alt="Commodities"
              />
            </div>
          )}

          {selectedCard === "third-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.third.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.third.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image className="mt-8 md:mt-0" src={acoes} alt="Ações" />
            </div>
          )}

          {selectedCard === "fourth-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.fourth.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.fourth.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image className="mt-8 md:mt-0" src={opcoes} alt="Opções" />
            </div>
          )}

          {selectedCard === "fifth-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.fifth.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.fifth.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image className="mt-8 md:mt-0" src={indices} alt="Índices" />
            </div>
          )}

          {selectedCard === "sixth-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.sixth.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.sixth.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image className="mt-8 md:mt-0" src={etf} alt="ETF" />
            </div>
          )}

          {selectedCard === "seventh-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.seventh.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.seventh.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image className="mt-8 md:mt-0" src={cfd} alt="CFD" />
            </div>
          )}

          {selectedCard === "eighth-card" && (
            <div className="flex flex-col md:flex-row mx-4 md:mx-0">
              <div className="mr-24">
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {services.menu.eighth.title}
                </p>
                <p
                  className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}
                >
                  {services.menu.eighth.text}
                </p>
                <a href={`https://dashboard.flizbar.com/register?lang=${lang}`}>
                  <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded mt-12">
                    {services.button}
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
              <Image
                className="mt-8 md:mt-0"
                src={mercadoFuturo}
                alt="Mercado Futuro"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
