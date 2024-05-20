"use client";
import { useState } from "react";
import { i18n, Locale } from "@/i18n.config";
import { useRouter } from "next/navigation";

export default function LocaleSwitch({ lang, languages }: { lang: Locale; languages: any }) {
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState<Locale>(i18n.defaultLocale);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    setSelectedLocale(newLocale);
    window.location.assign(`/${newLocale}`);
  };

  return (
    <div className="flex gap-x-3">
      <div className="relative">
        <select className="rounded-full h-[40px] px-[4px] py-[5px] text-sm bg-black cursor-pointer" value={lang} onChange={handleChange}>
          <option value="pt-BR">{languages.portuguese}</option>
          <option value="en">{languages.english}</option>
          <option value="es-ES">{languages.spanish}</option>
        </select>
      </div>
    </div>
  );
}
