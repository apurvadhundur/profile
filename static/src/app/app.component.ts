import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  items: MenuItem[] | undefined;
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
        label: 'Profile',
        icon: PrimeIcons.USER,
        routerLink: '/profile'
      },
      {
        label: 'Projects',
        icon: PrimeIcons.BOOK,
        routerLink: '/projects'
      }
    ];
  }
}
