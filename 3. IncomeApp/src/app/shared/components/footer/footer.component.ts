import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  rights: string;

  constructor() {
    const today: Date = new Date();
    this.rights = `Derechos reservados © ${today.getFullYear()}`;
  }
}
