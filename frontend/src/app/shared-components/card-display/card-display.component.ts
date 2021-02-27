import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss'],
})
export class CardDisplayComponent implements OnInit, AfterViewInit {
  @Input()
  id = '';

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  price = '';

  cardImageIndex = 0;

  @Input()
  cardImages = ['assets/images/no-image.jpg'];

  @Output()
  afterViewInit = new EventEmitter();

  constructor() { }
  ngAfterViewInit(): void {
    this.afterViewInit.emit(this.id);
  }

  ngOnInit(): void {
  }
}
