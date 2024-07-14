import ArrowRight from "@/components/ArrowRight/ArrowRight";

interface SelectCardProps {
  title: string;
  // subtitle: string;
  selected: boolean;
  onClick: () => void;
}

export default function AboutCard({
  title,
  // subtitle,
  selected,
  onClick,
}: SelectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center h-full cursor-pointer px-[26px] lg:w-full border-b min-w-[200px] bg-[#161412] mr-5 ${
        selected
          ? "border-b-[#C89305]"
          : "border-b-[#7e7373] transition-all hover:opacity-75"
      }`}
    >
      <p
        className={`flex flex-col max-w-[162px] text-[20px] ${
          selected ? "text-[#C89305]" : "text-white"
        }`}
      >
        {title}
        {/* <p className={`${selected ? "text-[#C89305]" : "text-white"}`}>
          {subtitle}
        </p> */}
      </p>
      {/* <ArrowRight /> */}
    </div>
  );
}
