import "server-only";

const dictionaries = {
    id: () => import("../../../messages/id.json").then((m) => m.default),
    en: () => import("../../../messages/en.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export const locales: Locale[] = ["id", "en"];
export const defaultLocale: Locale = "id";

export const hasLocale = (locale: string): locale is Locale =>
    locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
