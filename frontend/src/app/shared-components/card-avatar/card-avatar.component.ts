import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DialogService } from '../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-card-avatar',
  templateUrl: './card-avatar.component.html',
  styleUrls: ['./card-avatar.component.scss'],
})
export class CardAvatarComponent implements OnInit {
  @Input()
  id = '';

  @Input()
  title = '';

  @Input()
  firstSubtitle = '';

  @Input()
  secondSubtitle = '';

  @Input()
  cardImage = 'assets/images/no-image.jpg';

  @Output()
  clickDeleteButton = new EventEmitter();

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
