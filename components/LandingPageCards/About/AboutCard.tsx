import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutCard({ languages }: { languages: any }) {
  const about = languages.page.default.about;

  const [selectedCard, setSelectedCard] = useState("first-card");

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-[#C89305] font-semibold text-[14px] mt-12 text-center">
          {about.title}
        </p>
        <p className="text-[32px] md:text-[40px] mb-[20px] text-center">
          {about.subtitle}
        </p>

        <p className="flex justify-center items-center text-center text-[20px] mt-12 mx-4 md:mx-10">
          {about.text}
        </p>
      </div>

      <div className="container md:mx-auto grid md:grid-cols-3 gap-5 my-20 mx-4">
        <div className="flex flex-col  gap-12 mt-16">
          <h1 className="text-3xl md:text-5xl  font-bold ">
            {about.menu.first.title}
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base  ">{about.menu.first.textFirst}</p>
            <p className="text-base ">{about.menu.first.textSecond}</p>
          </div>
        </div>
        <div className="flex flex-col  gap-12 mt-16">
          <h1 className="text-3xl md:text-5xl font-bold ">
            {about.menu.second.title}
          </h1>
          <div className="flex flex-col  gap-4">
            <p className="text-base ">{about.menu.second.textFirst}</p>
            <p className="text-base ">{about.menu.second.textSecond}</p>
          </div>
        </div>
        <div className="flex flex-col gap-12 mt-16">
          <h1 className="text-3xl md:text-5xl font-bold ">
            {about.menu.third.title}
          </h1>
          <div className="flex flex-col  gap-4">
            <p className="text-base ">{about.menu.third.textFirst}</p>
            <p className="text-base ">{about.menu.third.textSecond}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-12 mt-16">
        <h1 className="text-3xl font-bold text-center md:mx-80">
          {about.menu.fourth.text}
        </h1>
        <a href="https://dashboard.flizbar.com/register">
          <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded">
            {about.menu.fourth.btnText}
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
    </div>
  );
}
