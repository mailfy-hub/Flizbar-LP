import React from "react";

export default function BegginPresentationCard({ languages }: { languages: any }) {
  return (
    <div className="flex flex-col max-w-[727px] w-full h-full justify-end">
      <div className="flex items-center mb-[37px] w-[362px] h-[38px] border-l-2 border-[#A06A08] pl-4">
        {languages.default.beginning.openAcc}
      </div>
      <p className="max-w-[591px] text-[48px] font-semibold mb-[24px]">{languages.default.beginning.title}</p>
      <p className="text-[20px] mb-[64px]">{languages.default.beginning.text}</p>
      <div className="flex gap-8 mb-[160px]">
        <button className="flex items-center gap-2 bg-[#A06A08] h-[40px] text-white py-2 px-4 rounded font-bold text-[16px]">
          {languages.default.beginning.button}
          <svg className="fill-current h-6 w-6 transform -rotate-90 stroke-1" viewBox="0 0 20 20">
            <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7z"></path>
          </svg>
        </button>

        <p className="text-[14px] max-w-[221px]">
          {languages.default.beginning.presentation}
          <span className="text-[#A06A08] ml-[5px]">{languages.default.beginning.presentationSpan}</span>
        </p>
      </div>
    </div>
  );
}
