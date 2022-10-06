import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { InputBankCodeComponent } from './input-bank-code/input-bank-code.component';
import { InputAddressComponent } from './input-address/input-address.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, FlexLayoutModule],
  declarations: [AppComponent, InputBankCodeComponent, InputAddressComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
