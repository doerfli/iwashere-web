import { Locales } from "./locales";

// @ts-ignore
import en from "./en.json";
// @ts-ignore
import de from "./de.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.DE]: de
};

export const defaultLocale = Locales.DE;
