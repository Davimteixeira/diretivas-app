import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-diretivas></app-diretivas>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'diretivas-app';
}
