import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background:#000000; color: #ffffff}',
    'li a { color: white}',
    'ul.nav a:hover { color: #fffccc  }',
  ],
})
export class HeaderComponent {
  constructor() {}
}
