import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = this.fb.group({
    name: '',
    code: '',
    address: [
      {
        address:
          '78 Rue du Moulin Vert, Paris 14e Arrondissement, Île-de-France, France',
        lat: 48.8304,
        lng: 2.32209,
      },
    ],
  });

  constructor(public fb: FormBuilder) {}
}
