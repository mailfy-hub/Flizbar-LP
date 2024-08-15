import MoreThanNumbers from "@/assets/MoreThanNumbers.png";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function MuchMoreThanNumbers({
  lang,
  languages,
}: {
  lang: string;
  languages: any;
}) {
  const muchMoreThanNumbers = languages.page.default.moreThanNumbers;

  return (
    <div className="bg-black text-white py-12 ">
      <h1 className="font-bold mb-8 flex justify-center text-2xl md:text-5xl ">
        {muchMoreThanNumbers.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="">
          <Image
            src={MoreThanNumbers.src}
            alt="Woman using a smartphone"
            width={500}
            height={300}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2 text-custom-orange">
                {muchMoreThanNumbers.block.first.title}
              </h2>
              <p className="text-[#FEFDE8] text-2xl pr-3	">
                {muchMoreThanNumbers.block.first.text}
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 text-custom-orange">
                {muchMoreThanNumbers.block.second.title}
              </h2>
              <p className="text-[#FEFDE8] text-2xl pr-3	">
                {muchMoreThanNumbers.block.second.text}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2 text-custom-orange">
                {muchMoreThanNumbers.block.third.title}
              </h2>
              <p className="text-[#FEFDE8] text-2xl	">
                {muchMoreThanNumbers.block.third.text}
              </p>
            </div>
            <div>
              <p className="text-base-gray-400  text-xl pr-3	">
                {muchMoreThanNumbers.block.fourth.text}
              </p>
              <a
                href={`https://dashboard.flizbar.com/register?lang=${lang}`}
                className="text-custom-orange underline mt-4"
              >
                {muchMoreThanNumbers.block.fourth.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
