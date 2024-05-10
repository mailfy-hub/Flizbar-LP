'use client'
import { Locale } from "@/i18n.config";
import bg from "../../assets/background_hero.png";
import Script from "next/script";
import Header from "@/components/Header/Header";
import MainContentRouter from "@/components/MainContentRouter/MainContentRouter";
import { useDictionary } from "./dictionary-provider";
import { useState } from "react";

export default function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = useDictionary()
  const [contentIndex, setContentIndex] = useState("initial")

  return (
    <>
      <div className="px-[112px] py-0 bg-cover bg-center h-[calc(100vh-80px)]" style={{ backgroundImage: `url(${bg.src})` }}>
        <Header lang={lang} languages={dictionary.header} btn={dictionary.languages} handleContentIndex={setContentIndex} />        
        <MainContentRouter languages={dictionary.page} contentIndex={contentIndex} />
      </div>
      <div className="tradingview-widget-container" style={{ marginBottom: "0px" }}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
      <Script
        id="my-script-tradingview"
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        strategy="afterInteractive"
      >
        {`
          {
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500 Index"
              },
              {
                "proName": "FOREXCOM:NSXUSD",
                "title": "US 100 Cash CFD"
              },
              {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR to USD"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
              }
            ],
            "showSymbolLogo": true,
            "isTransparent": false,
            "displayMode": "adaptive",
            "colorTheme": "dark",
            "locale": "en"
          }
        `}
      </Script>
    </>
  );
}
