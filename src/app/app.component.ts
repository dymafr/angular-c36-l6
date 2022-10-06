import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      code: [''],
    });
  }
}
