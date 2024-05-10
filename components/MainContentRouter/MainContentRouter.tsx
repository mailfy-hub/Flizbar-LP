import BegginPresentationCard from "../LandingPageCards/BegginPresentationCard/BegginPresentationCard";

export default function MainContentRouter({ languages, contentIndex }: { languages: any, contentIndex: string }) {
  return <BegginPresentationCard languages={languages} />;
}
