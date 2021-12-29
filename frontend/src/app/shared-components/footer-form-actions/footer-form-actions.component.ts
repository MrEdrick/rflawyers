import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-form-actions',
  templateUrl: './footer-form-actions.component.html',
  styleUrls: ['./footer-form-actions.component.scss'],
})
export class FooterFormActionsComponent implements OnInit {
  @Input()
  marginRight = '16';

  @Input()
  showSubmitButton = true;

  @Input()
  showCancelButton = true;

  @Output()
  submitClick = new EventEmitter();

  @Output()
  cancelClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
