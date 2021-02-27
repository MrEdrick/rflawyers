import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DialogService } from '../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.scss'],
})
export class CardHorizontalComponent implements OnInit, AfterViewInit {
  @Input()
  id = '';

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  price = '';

  @Input()
  showDeleteButton = true;

  cardImageIndex = 0;

  @Input()
  cardImages = ['assets/images/no-image.jpg'];
  
  @Output()
  clickDeleteButton = new EventEmitter();

  @Output()
  afterViewInit = new EventEmitter();

  constructor(private dialodService: DialogService) { }
  
  ngAfterViewInit(): void {
    this.afterViewInit.emit(this.id);
  }

  ngOnInit(): void { }

  async onDelete() {
    const confirm =
      await this.dialodService.showConfirmation('Deseja realmente remover este item?');

    if (confirm) { this.clickDeleteButton.emit(this.id); }
  }

}
