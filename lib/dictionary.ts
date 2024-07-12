import "server-only";
import type { Locale } from "@/i18n.config";

// Defina o tipo para o dicionário de funções
type DictionaryLoader = () => Promise<any>;

const dictionaries: { [key in Locale]: DictionaryLoader } = {
  "pt-BR": () => import("@/dictionaries/pt.json").then((module) => module.default),
  "es-ES": () => import("@/dictionaries/es.json").then((module) => module.default),
  "en": () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const loadDictionary = dictionaries[locale];
  if (loadDictionary) {
    return await loadDictionary();
  } else {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
};
