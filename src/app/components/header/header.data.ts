import { LangCodes } from "../../enums";
import { ILanguage, ISubpage } from "../../interfaces";

export const subpages: ISubpage[] = [
  {
    name: 'about',
    href: 'about'
  },
  {
    name: 'contact',
    href: 'contact'
  }
];

export const languages: ILanguage[] = [
  {
    nativeName: 'Polski',
    code: LangCodes.POLAND
  },
  {
    nativeName: 'English US',
    code: LangCodes.USA
  }
];
