import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { VALUE_TYPE_COLOR } from '../../common/const/value-type-list.const';
import { DialogService } from '../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-card-tag',
  templateUrl: './card-tag.component.html',
  styleUrls: ['./card-tag.component.scss'],
})
export class CardTagComponent implements OnInit {
  showColorValue = false;

  @Input()
  id = '';

  @Input()
  name = '';

  @Input()
  valueType = '';

  @Input()
  value = '';

  @Input()
  showDeleteButton = true;

  @Output()
  clickDeleteButton = new EventEmitter();

  constructor(
    private dialodService: DialogService
  ) { }

  ngOnInit(): void {
    this.showColorValue = this.valueType === VALUE_TYPE_COLOR;
  }

  async onDelete() {
    const confirm =
      await this.dialodService.showConfirmation('Deseja realmente deletar este registro?');

    if (confirm) { this.clickDeleteButton.emit(this.id); }
  }

}
