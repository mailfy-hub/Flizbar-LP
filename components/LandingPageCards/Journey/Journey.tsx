import React from "react";
import Image from "next/image";
import img from "@/assets/Frame 399.png";

export default function Journey({ languages }: { languages: any }) {
  const journey = languages.page.default.journey;

  return (
    <div className=" text-white font-sans">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 px-5 mr-9 ">
            <Image
              src={img.src}
              alt="Businesspeople high-fiving"
              className="w-full "
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-[40px] md:text-6xl  mb-4">
              &quot;{journey.title}
              <strong>{` ${journey.titleStrong}`}</strong>&quot;
            </h1>
            <p className="text-[20px] mb-6">{journey.text}</p>
            <a href="https://dashboard.flizbar.com/register/">
              <button className="flex  items-center bg-[#A06A08] hover:bg-[#A06A08] text-white font-bold py-2 px-4 rounded">
                {journey.button}
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
      </div>
    </div>
  );
}
