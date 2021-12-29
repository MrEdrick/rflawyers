import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-with-add',
  templateUrl: './select-with-add.component.html',
  styleUrls: ['./select-with-add.component.scss']
})
export class SelectWithAddComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  selectedId: string;

  @Output()
  selectedIdChange = new EventEmitter();

  @Input()
  selectList = [];

  @Output()
  add = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  valueChange($event) {
    this.selectedId = $event.value;
    this.selectedIdChange.emit(this.selectedId);
  }

  onClick($event) {
    this.add.emit($event);
  }
}
