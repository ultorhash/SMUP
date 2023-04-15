import { Component } from '@angular/core';
import { ISubpage } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
}
