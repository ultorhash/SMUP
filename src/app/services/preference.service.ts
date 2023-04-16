import { Injectable } from '@angular/core';
import { LangCodes, Themes } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  getTheme(): Themes {
    return localStorage.getItem('Theme') as Themes;
  }

  saveTheme(theme: Themes): void {
    localStorage.setItem('Theme', theme);
  }

  getLanguage(): LangCodes {
    return localStorage.getItem('Language') as LangCodes;
  }

  saveLanguage(code: LangCodes): void {
    localStorage.setItem('Language', code);
  }
}
