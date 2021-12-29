import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-tag',
  templateUrl: './profile-tag.component.html',
  styleUrls: ['./profile-tag.component.scss'],
})
export class ProfileTagComponent{
  @Input()
  id = '';

  @Input()
  name = '';

  @Input()
  email = '';

  @Input()
  image = 'assets/images/no-image.jpg';

  @Output()
  logoutClick = new EventEmitter();

  constructor() { }
}
