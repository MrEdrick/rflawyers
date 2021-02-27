import { Component, OnInit, Input, Output } from '@angular/core';
import { SelectWithImageDto } from './dto/select-with-image.dto';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-with-avatar',
  templateUrl: './select-with-avatar.component.html',
  styleUrls: ['./select-with-avatar.component.scss']
})
export class SelectWithAvatarComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  selectedImage: string;

  @Input()
  selectedId: string;

  @Output()
  selectedIdChange = new EventEmitter();

  @Input()
  selectWithImageList: SelectWithImageDto[] = [];

  constructor() { }

  ngOnInit(): void { }

  valueChange($event) {
    this.selectedId = $event.value;
    this.selectedImage = this.selectWithImageList.find(select => select.id === this.selectedId).image;
    this.selectedIdChange.emit(this.selectedId);
  }
}
