import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-bank-code',
  templateUrl: './input-bank-code.component.html',
  styleUrls: ['./input-bank-code.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputBankCodeComponent),
    },
  ],
})
export class InputBankCodeComponent implements OnInit, ControlValueAccessor {
  public arr = new Array(10).fill(0).map((t, i) => i);
  public innerValue = '';
  private onChange: any;
  private onTouched: any;
  public isDisabled = false;

  constructor() {}

  ngOnInit() {
    this.arr = this.shuffle(this.arr);
  }

  writeValue(value: string) {
    this.innerValue = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.isDisabled = disabled;
  }

  private shuffle(arr: number[]) {
    arr.sort((el1, el2) => Math.random() - 0.5);
    return arr;
  }

  public update(i: number) {
    this.innerValue += i;
    this.onChange(this.innerValue);
  }

  public reset() {
    this.innerValue = '';
    this.onChange(this.innerValue);
  }
}
