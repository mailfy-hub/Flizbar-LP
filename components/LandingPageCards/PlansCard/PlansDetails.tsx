import React from "react";
import moneyIcon from "../../../assets/money-frame.png";
import Image from "next/image";
import { highBenefits, privateBenefits, traderBenefits, ultraHighBenefits } from "./constants";
import OpenAccButton from "@/components/OpenAccButton/OpenAccButton";
import CheckList from "@/components/CheckList/CheckList";
import Star from "../../../assets/material-symbols_star.png";

interface PlanDetailsProps {
  languages: any;
  plan: "trader" | "high" | "private" | "ultraHigh";
}

export default function PlansDetails({ languages, plan }: PlanDetailsProps) {
  const PlansDetails = {
    trader: traderBenefits,
    high: highBenefits,
    private: privateBenefits,
    ultraHigh: ultraHighBenefits,
  };

  const PlansCustody = {
    trader: "custódia até R$ 300 mil",
    high: "custódia até entre R$ 300 mil e R$ 1 milhão",
    private: "custódia até entre R$ 1 milhão e R$ 5 milhões",
    ultraHigh: "custódia acima de R$ 5 milhões",
  };

  const plansLanguages = languages.page.default.plans;

  return (
    <div className="p-10 border border-[#302F2D] max-w-[800px] w-full mb-8">
      <div className="flex justify-between items-center w-full">
        <p className="text-[24px]">{plansLanguages.plansTitles[plan]}</p>

        {plan === "high" && (
          <div className="flex gap-1">
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
          </div>
        )}

        {plan === "private" && (
          <div className="flex gap-1">
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
          </div>
        )}

        {plan === "ultraHigh" && (
          <div className="flex gap-1">
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
            <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
          </div>
        )}
      </div>
      <p className="flex w-full items-center gap-2 text-[#C89305] mt-2 mb-4">
        <Image className="h-[18px]" src={moneyIcon.src} height={1} width={18} alt="icon" /> {plansLanguages.plansCustody[plan]}
      </p>
      <CheckList items={plansLanguages.plansDetails[plan]} />

      <div className="max-w-[260px] mt-[40px]">
        <OpenAccButton text={languages.header.buttonTxt} />
      </div>
    </div>
  );
}
