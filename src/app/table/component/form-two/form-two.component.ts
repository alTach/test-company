import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fd-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormTwoComponent
    }
  ]
})
export class FormTwoComponent implements OnInit, ControlValueAccessor {
  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  constructor() { }

  ngOnInit(): void {
  }

}
