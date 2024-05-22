"use client";
import AdvantagesCard from "../LandingPageCards/AdvantagesCard/AdvantagesCard";
import BegginPresentationCard from "../LandingPageCards/BegginPresentationCard/BegginPresentationCard";
import ContactCard from "../LandingPageCards/ContactCard/ContactCard";
import KnowCard from "../LandingPageCards/KnowCard/KnowCard";
import PlansCard from "../LandingPageCards/PlansCard/PlansCard";
import { useCookies } from "next-client-cookies";

export default function MainContentRouter({ languages, contentIndex }: { languages: any; contentIndex: string }) {
  const cookies = useCookies();
  const savedContent = cookies.get("contentIndex") || "";

  if (contentIndex === "init") {
    return <BegginPresentationCard languages={languages} index={savedContent || "init"} />;
  }

  if (savedContent === "advantages") {
    return <AdvantagesCard languages={languages} />;
  }

  if (savedContent === "know") {
    return <KnowCard languages={languages} />;
  }

  if (savedContent === "plans") {
    return <PlansCard languages={languages} />;
  }

  if (savedContent === "contact") {
    return <ContactCard languages={languages} />;
  }

  return <BegginPresentationCard languages={languages} index={savedContent || "init"} />;
}
