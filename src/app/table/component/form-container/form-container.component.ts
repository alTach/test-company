import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'fd-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  @HostBinding('class') classList = 'border-sm';
  constructor() { }

  ngOnInit(): void {
  }

}
