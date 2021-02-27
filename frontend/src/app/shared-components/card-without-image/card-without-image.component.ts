import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DialogService } from '../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-card-without-image',
  templateUrl: './card-without-image.component.html',
  styleUrls: ['./card-without-image.component.scss'],
})
export class CardWithoutImageComponent implements OnInit {
  @Input()
  id = '';

  @Input()
  title = '';

  @Input()
  firstSubtitle = '';

  @Input()
  secondSubtitle = '';

  @Output()
  clickDeleteButton = new EventEmitter();

  @Input()
  onlyHeader = false;

  constructor(
    private dialodService: DialogService
  ) { }

  ngOnInit(): void {
  }

  @Output()
  async onDelete() {
    const confirm =
      await this.dialodService.showConfirmation('Deseja realmente deletar este registro?');

    if (confirm) { this.clickDeleteButton.emit(this.id); }
  }

}
