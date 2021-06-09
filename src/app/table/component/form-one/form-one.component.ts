import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fd-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormOneComponent
    }
  ]
})
export class FormOneComponent implements OnInit, ControlValueAccessor {
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
