import { Component, OnInit, Input, Output, AfterViewInit, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogService } from '../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input()
  id = '';

  @Input()
  title = '';

  @Input()
  content = '';

  @Input()
  subtitle = '';

  @Input()
  showDeleteButton = true;

  showArrowsButtons = false;

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

  ngOnInit(): void {
  }

  async onDelete() {
    const confirm =
      await this.dialodService.showConfirmation('Deseja realmente deletar este registro?');

    if (confirm) { this.clickDeleteButton.emit(this.id); }
  }

  previousImage() {
    if (this.cardImageIndex > 0) {
      this.cardImageIndex = this.cardImageIndex - 1;
    }
  }

  nextImage() {
    if (this.cardImageIndex < (this.cardImages.length - 1)) {
      this.cardImageIndex = this.cardImageIndex + 1;
    }
  }
}
