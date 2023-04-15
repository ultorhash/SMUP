import { Component } from '@angular/core';
import { ISubpage } from '../../interfaces';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isChecked: boolean = false;
  public subpages: ISubpage[] = [
    {
      name: 'o nas',
      href: 'about'
    },
    {
      name: 'kontakt',
      href: 'contact'
    }
  ];

  onThemeChange({ checked }: MatSlideToggleChange): void {
    this.isChecked = checked;
  }
}
