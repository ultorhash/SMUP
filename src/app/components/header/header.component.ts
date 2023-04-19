import {
  Component,
  Inject,
  OnInit,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage, ISubpage } from '../../interfaces';
import { ThemeClasses, Themes } from '../../enums';
import { PreferenceService } from '../../services';
import { languages, subpages } from './header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isChecked: boolean = false;
  public subpages: ISubpage[] = subpages;
  public languages: ILanguage[] = languages

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private translateService: TranslateService,
    private preferenceService: PreferenceService
  ) {}

  ngOnInit(): void {
    const language = this.preferenceService.getLanguage();
    const theme = this.preferenceService.getTheme();

    this.isChecked = theme === Themes.DARK;
    const themeClass = this.isChecked ? ThemeClasses.DARK_CLASS : ThemeClasses.LIGHT_CLASS;

    this.translateService.use(language ?? languages[0].code);
    this.setAppTheme(themeClass);
  }

  onThemeChange({ checked }: MatSlideToggleChange): void {
    const themeClass = checked ? ThemeClasses.DARK_CLASS : ThemeClasses.LIGHT_CLASS;
  
    this.isChecked = checked;
    this.preferenceService.saveTheme(checked ? Themes.DARK : Themes.LIGHT);
    this.setAppTheme(themeClass);
  }

  onLanguageSelect(language: ILanguage): void {
    this.translateService.use(language.code);
    this.preferenceService.saveLanguage(language.code);
  }

  private setAppTheme(themeClass: ThemeClasses): void {
    this.renderer.setAttribute(this.document.body, 'class', themeClass);
  }
}
